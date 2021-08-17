const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }, 
    "inf_VSDemo-infura_rinkeby": {
      network_id: 4,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/lucas/Desktop/sol/InfuraMnemonic.env', 'utf-8'), "https://rinkeby.infura.io/v3/407361635e1a4c4fbaefb9990e9df43b")
    }
  },
  compilers: {
    solc: {
      version: "0.7.0"
    }
  }
};
