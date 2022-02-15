import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers, upgrades } from "hardhat";
import { MyTokenUpgradable } from "../src/types/MyTokenUpgradable";
import { MyTokenUpgradableV2 } from "../src/types/MyTokenUpgradableV2";

describe("MyTokenUpgradable Test", () => {
  let contractDeployer: SignerWithAddress;
  let recipient: SignerWithAddress;
  let proxy: Contract;
  let myToken: MyTokenUpgradable;
  let exponent: BigNumber;
  let tokenSupply: BigNumber;
  let approveAmount: BigNumber;

  before(async () => {
    [contractDeployer, recipient] = await ethers.getSigners();
    const MyTokenUpgradable = await ethers.getContractFactory(
      "MyTokenUpgradable"
    );
    proxy = await upgrades.deployProxy(MyTokenUpgradable, {
      kind: "uups",
    });

    // attach to proxy instance
    myToken = MyTokenUpgradable.attach(proxy.address) as MyTokenUpgradable;

    const decimalPlaces = await myToken.decimals();
    exponent = BigNumber.from(10).pow(BigNumber.from(decimalPlaces));
    tokenSupply = BigNumber.from(1000).mul(exponent);
  });

  it("should initialized token supply and roles correctly", async () => {
    expect(await myToken.totalSupply()).to.equal(tokenSupply);

    expect(await myToken.balanceOf(contractDeployer.address)).to.equal(
      tokenSupply
    );

    const adminRole = await myToken.DEFAULT_ADMIN_ROLE();
    expect(await myToken.hasRole(adminRole, contractDeployer.address)).to.true;

    const minterRole = await myToken.MINTER_ROLE();
    expect(await myToken.hasRole(minterRole, contractDeployer.address)).to.true;

    const upgraderRole = await myToken.UPGRADER_ROLE();
    expect(await myToken.hasRole(upgraderRole, contractDeployer.address)).to
      .true;
  });

  it("should be able to mint token by minter only", async () => {
    const minterRole = await myToken.MINTER_ROLE();
    expect(await myToken.hasRole(minterRole, recipient.address)).to.false;

    await expect(myToken.connect(recipient).mint(recipient.address, 100)).to
      .reverted;

    const mintAmount = BigNumber.from(100);
    const mintTx = await myToken.mint(contractDeployer.address, mintAmount);
    await mintTx.wait();

    tokenSupply = tokenSupply.add(mintAmount);
    expect(await myToken.totalSupply()).to.equal(tokenSupply);
    expect(await myToken.balanceOf(contractDeployer.address)).to.equal(
      tokenSupply
    );
  });

  it("should be able to transfer token", async () => {
    const balanceInitial = await myToken.balanceOf(recipient.address);
    expect(balanceInitial).to.equal(0);

    const transferAmount = BigNumber.from(10).mul(exponent);
    const transferTx = await myToken.transfer(
      recipient.address,
      transferAmount
    );
    await transferTx.wait();

    const recipientBalanceAfter = await myToken.balanceOf(recipient.address);
    expect(recipientBalanceAfter).to.equal(transferAmount);

    const contractDeployerBalanceAfter = await myToken.balanceOf(
      contractDeployer.address
    );
    expect(contractDeployerBalanceAfter).to.equal(
      tokenSupply.sub(transferAmount)
    );
  });

  it("should not transferFrom when allowance is 0", async () => {
    const allowanceBefore = await myToken.allowance(
      recipient.address,
      contractDeployer.address
    );
    expect(allowanceBefore).to.equal(0);

    const transferAmount = BigNumber.from(10).mul(exponent);
    const transferForPromise = myToken.transferFrom(
      recipient.address,
      contractDeployer.address,
      transferAmount
    );
    await expect(transferForPromise).to.be.revertedWith(
      "ERC20: insufficient allowance"
    );
  });

  it("should be able to approve a spender and transferFrom by spender", async () => {
    // for simplicity, we set the approve amount to be equal to the current balance of the recipient
    approveAmount = BigNumber.from(10).mul(exponent);
    const approveTx = await myToken
      .connect(recipient)
      .approve(contractDeployer.address, approveAmount);

    await approveTx.wait();

    const allowance = await myToken.allowance(
      recipient.address,
      contractDeployer.address
    );
    expect(allowance).to.equal(approveAmount);
  });

  it("should transferFrom when amount is equal or lesser to allowance", async () => {
    const transferAmount = BigNumber.from(1);
    expect(transferAmount).to.lte(approveAmount);

    const transferTx = await myToken.transferFrom(
      recipient.address,
      contractDeployer.address,
      transferAmount
    );
    await transferTx.wait();

    // allowance has been decreased after transferFrom
    approveAmount = approveAmount.sub(transferAmount);
    const allowance = await myToken.allowance(
      recipient.address,
      contractDeployer.address
    );

    expect(allowance).to.equal(approveAmount);

    const recipientBalance = await myToken.balanceOf(recipient.address);
    expect(recipientBalance).to.equal(approveAmount);
  });

  it("should be able to burn token and reduce total supply", async () => {
    const burnAmount = BigNumber.from(10);
    tokenSupply = tokenSupply.sub(burnAmount);
    const burnTx = await myToken.burn(burnAmount);
    await burnTx.wait();

    expect(await myToken.totalSupply()).to.equal(tokenSupply);
  });

  it("should be able to upgrade contract and access new function", async () => {
    const MyTokenUpgradableV2 = await ethers.getContractFactory(
      "MyTokenUpgradableV2"
    );
    let myTokenV2 = MyTokenUpgradableV2.attach(
      proxy.address
    ) as MyTokenUpgradableV2;

    await expect(myTokenV2.newFunction()).to.be.revertedWith(
      "Transaction reverted: function selector was not recognized and there's no fallback function"
    );

    const upgraded = await upgrades.upgradeProxy(proxy, MyTokenUpgradableV2);
    await upgraded.deployed();

    expect(await myTokenV2.newFunction()).to.true;
  });
});
