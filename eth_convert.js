// Given an ethereum private key, convert it to avalanche priavte key and display address
var Web3 = require('web3');
const Buffer = require('buffer/').Buffer;
const Avalanche = require('avalanche');

let hrp = Avalanche.getPreferredHRP(1);
let keychain = new Avalanche.AVMKeyChain(hrp,'X');


var web3 = new Web3(Web3.givenProvider);

let prompt = require('prompt');


console.log("\n");
console.log("Enter your ethereum private key (HEX):")
prompt.get(['eth_key'], (err, result) => {
    try{
        let key = result.eth_key;

        // Strip the 0x if exists
        if(key.substr(0,2) === '0x'){
            key = key.substr(2);
        }


        let account = web3.eth.accounts.privateKeyToAccount(key);
        let address = account.address;

        let pkBuffer = new Buffer(key, 'hex');

        console.log('\n---------------------------\n');

        console.log("ETH Address:\t",address)
        let addr = keychain.importKey(pkBuffer);
        let avaxKey = keychain.getKey(addr);

        let avaxPk = avaxKey.getPrivateKeyString();
        let avaxAddr = avaxKey.getAddressString();


        console.log("AVAX Key:\t",avaxPk);
        console.log("AVAX Address:\t",avaxAddr);
        console.log("\n");
    }catch (e) {
        let msg = e.message || "Failed conversion."
        console.log(msg);
    }
});
