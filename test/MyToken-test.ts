import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { MyToken } from "../src/types/MyToken";

describe("MyToken Test", () => {
  let initTotalSupply = 1000;
  let exponent: BigNumber;
  let contract: MyToken;
  let owner: SignerWithAddress;
  let recipient: SignerWithAddress;
  let approveAmount = BigNumber.from(0);

  before(async () => {
    [owner, recipient] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");
    contract = (await MyToken.deploy(initTotalSupply)) as MyToken;

    console.log(`Contract has been deployed to ${contract.address}`);
  });

  it("should premint 1000 number of tokens initially to deployers adress", async () => {
    const totalSupply = await contract.totalSupply();
    const decimalPlaces = await contract.decimals();
    exponent = BigNumber.from(10).pow(BigNumber.from(decimalPlaces));

    expect(totalSupply.div(exponent)).to.equal(initTotalSupply);

    const ownerInitialBalance = await contract.balanceOf(owner.address);
    expect(ownerInitialBalance).to.equal(totalSupply);
  });

  it("should transfer tokens to receipient", async () => {
    const balanceInitial = await contract.balanceOf(recipient.address);
    expect(balanceInitial).to.equal(0);

    const transferAmount = BigNumber.from(10).mul(exponent);
    const transferTx = await contract.transfer(
      recipient.address,
      transferAmount
    );
    await transferTx.wait();

    const balanceAfter = await contract.balanceOf(recipient.address);
    expect(balanceAfter).to.equal(transferAmount);
  });

  it("should not transferFrom when allowance is 0", async () => {
    const allowanceBefore = await contract.allowance(
      recipient.address,
      owner.address
    );
    expect(allowanceBefore).to.equal(approveAmount);

    const transferAmount = BigNumber.from(10).mul(exponent);
    const transferForPromise = contract.transferFrom(
      recipient.address,
      owner.address,
      transferAmount
    );
    await expect(transferForPromise).to.be.revertedWith(
      "ERC20: insufficient allowance"
    );
  });

  it("should be able to approve a spender and transferFrom by spender", async () => {
    // for simplicity, we set the approve amount to be equal to the current balance of the recipient
    approveAmount = BigNumber.from(10).mul(exponent);
    const approveTx = await contract
      .connect(recipient)
      .approve(owner.address, approveAmount);

    await approveTx.wait();

    const allowance = await contract.allowance(
      recipient.address,
      owner.address
    );
    expect(allowance).to.equal(approveAmount);
  });

  it("should transferFrom when amount is equal or lesser to allowance", async () => {
    const transferAmount = BigNumber.from(1);
    const transferTx = await contract.transferFrom(
      recipient.address,
      owner.address,
      transferAmount
    );
    await transferTx.wait();

    expect(transferAmount).to.lte(approveAmount);

    // allowance has been decreased after transferFrom
    approveAmount = approveAmount.sub(transferAmount);
    const allowance = await contract.allowance(
      recipient.address,
      owner.address
    );

    expect(allowance).to.equal(approveAmount);

    const recipientBalance = await contract.balanceOf(recipient.address);
    expect(recipientBalance).to.equal(approveAmount);
  });
});
