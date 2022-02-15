import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { artifacts, ethers, upgrades } from "hardhat";
import { MyTokenUpgradable } from "../src/types/MyTokenUpgradable";

describe("MyTokenUpgradable Test", () => {
  let proxy: Contract;
  let myToken: MyTokenUpgradable;

  before(async () => {
    const MyTokenUpgradable = await ethers.getContractFactory(
      "MyTokenUpgradable"
    );
    proxy = await upgrades.deployProxy(MyTokenUpgradable, {
      kind: "uups",
    });

    // attach to proxy instance
    myToken = MyTokenUpgradable.attach(proxy.address) as MyTokenUpgradable;
  });

  //TODO: add more tests

  it("test", async () => {
    const name = await myToken.symbol();
    console.log(name);
  });
});
