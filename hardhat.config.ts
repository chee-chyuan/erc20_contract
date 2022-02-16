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

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
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
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }

}

export default config;