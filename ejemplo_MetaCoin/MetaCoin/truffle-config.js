var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "caution club combine giant noble orphan drive great jungle runway cruise lady";
module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/9219cac45a6b4008ab2cd424c6abc2b1")
      },
      network_id: 4
    }   
  }
};
