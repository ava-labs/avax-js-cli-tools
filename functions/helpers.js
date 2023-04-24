const Utils = require("avalanche/dist/utils");
const AVM = require("avalanche/dist/apis/avm");
const bip39 = require("bip39");
const HDKey = require("hdkey");
const {Buffer} = require("buffer");
const Web3 = require("web3");
const AVAX_ACCOUNT_PATH = `m/44'/9000'/0'`;

let hrp = Utils.getPreferredHRP(1);
let keychain = new AVM.KeyChain(hrp, 'X');
const web3 = new Web3(Web3.givenProvider);

const generateAddresses = (chain) => (mnemonic, num) => {
    let hrp = Utils.getPreferredHRP(1);
    let keychain = new AVM.KeyChain(hrp, 'X');

    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const hdkey = HDKey.fromMasterSeed(seed)

    let keys = [];
    for (let i = 0; i < num; i++) {
        let derivationPath = `${AVAX_ACCOUNT_PATH}/${chain}/${i}`;
        let key = hdkey.derive(derivationPath)
        keys.push(key);
    }

    let addrs = keys.map((key) => {
        let privateKeyHEX = key.privateKey.toString('hex');
        let privateKeyBuffer = Buffer.from(privateKeyHEX, 'hex');
        let keypair = keychain.importKey(privateKeyBuffer);
        // console.log(privateKeyHEX);
        // console.log(keypair.getPublicKey().toString('hex'));
        return keypair.getAddressString();
    });

    return addrs;
}

const generateExternalAddresses = (mnemonic, num) => generateAddresses(0)(mnemonic, num)

const generateInternalAddresses = (mnemonic, num) => generateAddresses(1)(mnemonic, num)

const generateMnemonic = () => bip39.generateMnemonic(256);

const cleanMnemonic = (mnemonic) => mnemonic.trim().replace(/\s+/g, ' ').trim()

const validateMnemonic = (mnemonic) => bip39.validateMnemonic(cleanMnemonic(mnemonic));

const ethKeyToAddr = (ethPrivKey) => {

    // Strip the 0x if exists
    if (ethPrivKey.substr(0, 2) === '0x') {
        ethPrivKey = ethPrivKey.substr(2);
    }

    let {address} = web3.eth.accounts.privateKeyToAccount(ethPrivKey);
    return address
}

const ethKeyToAvax = (ethPrivKey) => {
    let pkBuffer = Buffer.from(ethPrivKey, 'hex');
    let avaxKey = keychain.importKey(pkBuffer);
    let avaxPrivKey = avaxKey.getPrivateKeyString();
    let avaxAddr = avaxKey.getAddressString();
    return {avaxAddr, avaxPrivKey}
}

module.exports = {
    generateInternalAddresses,
    generateExternalAddresses,
    generateMnemonic,
    validateMnemonic,
    cleanMnemonic,
    ethKeyToAddr,
    ethKeyToAvax
}
