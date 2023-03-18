require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  // set the path to compile the contracts
  paths: {
    artifacts: '../client/src/artifacts',
    cache: '../client/src/cache',
  }
};
