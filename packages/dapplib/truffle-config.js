require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rebel random coconut hunt lonely equal genre'; 
let testAccounts = [
"0x920d079bbb141cee93f74ab5e9746a08846f232b4e7075349318509cc3194aea",
"0x297920ff38220769fd3f6f9013866669c20c530a35659d32a656e2cf27d0a7a9",
"0xf125898ee95317897897398c1dd9c3942a310aeb0a1fe976dd480bfa16c26e32",
"0x8d2c799818687ce750fdbf2aaac08cc0afe331b3b2d2b052252f161cb9cb6999",
"0x5ed79bb858110b541901ee858397094313dc98eb0942d844eb84046ed246f89d",
"0x9cb7ef2d83511609899875b66e821b40af7e9198811e4321f83cefd845479ce1",
"0xcff85877a65a53abe048ed96f3aa0d638b6d4a60f0e8e043f419fe894ee96e50",
"0x32d379a356d05e72142cfec7c056de879ec22a952b8c40ee743ca1b895b51367",
"0xe87ad39610497ade80b7584fd6d4316449ae50f43330dc458d7c16ae22dda7fa",
"0x9fe0520ed1101031efc38553f819e0657b17ec16576a0083484deccd0b90fee0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


