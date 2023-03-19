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
  },
  // set the path to compile the contracts
  paths: {
    artifacts: '../client/src/artifacts',
    cache: '../client/src/cache',
  }
};
