import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { MyToken } from "../src/types/MyToken"

describe("MyToken Test", () => {
  let initTotalSupply = 1000;
  let exponent: BigNumber
  let contract: MyToken;
  let owner: SignerWithAddress;

  before(async () => {
    [owner] = await ethers.getSigners()

    const MyToken = await ethers.getContractFactory("MyToken");
    contract = await MyToken.deploy(initTotalSupply) as MyToken;

    console.log(`Contract has been deployed to ${contract.address}`);
  });

  it("should premint 1000 number of tokens initially to deployers adress", async () => {
    const totalSupply = await contract.totalSupply()
    const decimalPlaces = await contract.decimals()
    exponent = BigNumber.from(10).pow(BigNumber.from(decimalPlaces))

    expect(totalSupply.div(exponent)).to.equal(initTotalSupply);

    const ownerInitialBalance = await contract.balanceOf(owner.address);
    expect(ownerInitialBalance).to.equal(totalSupply);
  })
});
