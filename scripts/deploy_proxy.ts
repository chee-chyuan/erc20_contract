import { ethers, upgrades } from "hardhat";

async function main() {
  const MyTokenUpgradable = await ethers.getContractFactory(
    "MyTokenUpgradable"
  );
  const proxy = await upgrades.deployProxy(MyTokenUpgradable, { kind: "uups" });

  await proxy.deployed();
  console.log(`Proxy deployed to ${proxy.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });