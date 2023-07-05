require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // npx hardhat run scripts/deploy.js --network scrollAlpha
    "scrollAlpha": {
      url: "https://alpha-rpc.scroll.io/l2",
      accounts: [process.env.PRIVATEKEY],
      chainId: 534353
    },
    // npx hardhat run scripts/deploy.js --network bsctestnet
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATEKEY],
      chainId: 97,
    },
    // npx hardhat run scripts/deploy.js --network mumbai
    "mumbai": {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [process.env.PRIVATEKEY],
    },
    // npx hardhat run scripts/deploy.js --network hackathonsilo
    hackathonsilo: {
      url: "http://hackathon.aurora.dev",
      accounts: [process.env.PRIVATEKEY],
      chainId: 1313161558,
    },
  },
  // set the path to compile the contracts
  paths: {
    artifacts: '../client/src/artifacts',
    cache: '../client/src/cache',
  }
};
