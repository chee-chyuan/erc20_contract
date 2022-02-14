import hre from "hardhat";

async function main() {
  const totalSupply = 1000;
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(totalSupply);

  const myTokenDeployed = await myToken.deployed();
  const myTokenAddress = myTokenDeployed.address;

  console.log(`Deployed to : ${myTokenAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
