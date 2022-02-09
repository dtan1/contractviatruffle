# contractviatruffle

This repo shows the example of smart contrac development using the truffle framework.

## Truffle summary table :

| Topic | Questions | Answers |
|---|---|---|
|Definition | What is Truffle ? | framework : <br> - A popular framework for writing smart contract. <br> - support EVM compatible blockchain such as BSC and polygon. <br><br> 3 main features : <br> - compilation <br> - deployment <br> - testing <br><br> language support : <br> - solidity <br> - hyper
|Details | what are the key features ? | compilation : <br> - easy to switch solidity version by updating the configuration <br> deployment : <br> - comes with a local development blockchain called ganache <br> testing : <br> - use javascript framework called mocha under the hood.
| setup project | - `truffle init` <br><br> - what folders / files are created ?| create a boilerplate file/folder structure or directory layout : <br> `contracts` <br> - contains source code <br> `migration` <br> - scripts for staging deployment task <br> `test` <br> - testing contract <br> `truffle-config.js`
|smart contract <br> creation| `truffle create contract {filename}` <br><br> what default solidity file is provided ? | create a boilderplate file for smart contract inside the contracts folder <br><br> migration.sol (created duirng truffle init |
| compilation | `truffle compile` <br><br> what are the output ? | - build artifact (json file) is created in the build/contracts folder <br> - inside json file : <br> - `abi (application binary interface)`|
| test script creation | `truffle create test {testfile}` | create a boilderplate for test script |
|testing | `truffle test` <br><br> how does it work ? | use js framework mocha (IT block, assert ..) <br><br> test written in js : <br>  - first line : import contract articfact <br> - then create contract block <br> - define diff test (in IT block) inside each contract block |
| local node <br> ganache | `truffle develop` <br><br> what comes with ganache ? | - start local development blockchain node <br> - and attach truffle console to it <br><br> - 10 accounts (external), with 10 eth each |
| deployment | `truffle migrate` <br><br> how to deploy to public testnet ? | to deploy your smart contract <br><br> update truffle-config.js : <br> - note : install HDWalletProvider via npm first <br> - in HDWalletProvider, replace with one of the private keys from ganache <br> (allow to sign transaction for public testnet) <br> - in network key : define public testnet |
|interact with node client | `truffle console` | - interacting directly with smart contract
