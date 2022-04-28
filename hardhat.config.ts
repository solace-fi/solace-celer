import { HardhatUserConfig } from "hardhat/types";

import * as dotenv from "dotenv";

import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
    ],
  },
  networks: {
    localhost: { url: "http://127.0.0.1:8545" },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      chainId: 1,
      accounts: JSON.parse(process.env.MAINNET_ACCOUNTS || "[]"),
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      chainId: 4,
      accounts: JSON.parse(process.env.RINKEBY_ACCOUNTS || "[]"),
    },
    kovan: {
      url: process.env.KOVAN_URL || "",
      chainId: 42,
      accounts: JSON.parse(process.env.KOVAN_ACCOUNTS || "[]"),
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      chainId: 5,
      accounts: JSON.parse(process.env.GOERLI_ACCOUNTS || "[]"),
    },
    aurora: {
      url: process.env.AURORA_URL || "",
      chainId: 1313161554,
      accounts: JSON.parse(process.env.AURORA_ACCOUNTS || "[]"),
    },
    aurora_testnet: {
      url: process.env.AURORA_TESTNET_URL || "",
      chainId: 1313161555,
      accounts: JSON.parse(process.env.AURORA_TESTNET_ACCOUNTS || "[]"),
    },
    polygon: {
      url: process.env.POLYGON_URL || "",
      chainId: 137,
      accounts: JSON.parse(process.env.POLYGON_ACCOUNTS || "[]"),
    },
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      chainId: 80001,
      accounts: JSON.parse(process.env.MUMBAI_ACCOUNTS || "[]"),
    },
  },
  mocha: {
    timeout: 3600000, // one hour
  },
  etherscan: {
    apiKey: {
      // ethereum
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      ropsten: process.env.ETHERSCAN_API_KEY || "",
      rinkeby: process.env.ETHERSCAN_API_KEY || "",
      goerli:  process.env.ETHERSCAN_API_KEY || "",
      kovan:   process.env.ETHERSCAN_API_KEY || "",
      // polygon
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",

    }
  },
};

export default config;
