import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "contracts",
  },
  typechain: {
    outDir: "libs/evm/src",
    target: "ethers-v6",
    alwaysGenerateOverloads: true,
  },
};

export default config;
