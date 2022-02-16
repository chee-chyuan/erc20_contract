import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/types";
import { task } from "hardhat/config";
import "hardhat-spdx-license-identifier";
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades"
import "dotenv/config"

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

 const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    // rinkeby: {
    //   url: process.env.DEPLOYMENT_URL,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  }, 
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, 
    externalArtifacts: ['externalArtifacts/*.json'],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }

}

export default config;