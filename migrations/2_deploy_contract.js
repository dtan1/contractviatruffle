const SimpleBank = artifacts.require("SImpleBank");

module.exports = function (deployer) {
  deployer.deploy(SimpleBank);
};