import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from 'dotenv'
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const { API_URL, PRIVATE_KEY, TEST_API_URL, TEST_PRIVATE_KEY  } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: TEST_API_URL,
      accounts: [`0x${TEST_PRIVATE_KEY}`]
    },
    mainnet: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};

export default config;
