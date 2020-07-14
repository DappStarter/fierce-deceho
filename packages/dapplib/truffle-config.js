require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rate night hole half kangaroo army gas'; 
let testAccounts = [
"0xd9bc0d9efc71c31681ecf472170d3c10b62528fbed422f25d6821e351d91a6b3",
"0x74daf78f494aa51bd4deaf68e662a9e55e0950de7827dcd41ae7d6af9b82409c",
"0x51765a9322147f33bee1e1deeea9df22132fabac9ca098c56ff9e3bdc0528f7f",
"0x12d15c0742a40fcd1de72c85b581efa3aaf9bf22552d6b221646270a397c8458",
"0xe8e3654e6dc54662eef5ad4cdc7a4d8e48386474b7df005313fa927450def885",
"0x948a15cb90aa3af22f49a69c866d6325d990e934a9e5cd6617bce42b494b4a84",
"0x5f278119dbf09d617293a6bfdc04391a78288a0fe65c637ae820a2328d5167e1",
"0x0d10fdf63eb9755a138b14c95fb723f64fae6c1be2f2b1301bbdc4180b1e810b",
"0xfe88b69afd361b6edb0fe32c6bd81e1b31ca84743f524129d0709e09f7e91af8",
"0xd0a7311a593a1c8777ed5dbaf356d4215a98f2931124701b72cfa1de58dda45a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
