let prompt = require('prompt');
const HDKey = require('hdkey');
const bip39 = require('bip39');
const Buffer = require('buffer/').Buffer;
const AVM = require('avalanche/dist/apis/avm');
const Utils = require('avalanche/dist/utils')
const AVAX_ACCOUNT_PATH = `m/44'/9000'/0'`;


try{
    prompt.start();
    console.log();
    console.log("How many addresses do you want to generate?")
    prompt.get(['num_addr'], (err, result) => {
        let addrNum = parseInt(result.num_addr);
        // Entered invalid number
        if(!addrNum){
            console.error('Invalid number.')
            return;
        }
        console.log("\nEnter your mnemonic phrase (*note*, nothing will show up when typing as to protect your privacy):")
        prompt.get([{
            name: 'mnemonic',
            hidden: true
        }], (err, result) => {
            let mnemonic = result.mnemonic.trim();

            let words = mnemonic.split(' ').filter(word => {
                return !(word==='');
            });

            if(words.length !== 24){
                console.error('The mnemonic phrase is not valid. Please make sure it has 24 words.')
                return;
            }

            // console.log("\n\nYour chosen words for the mnemonic phrase are:\n")
            // console.log(words);

            let cleanMnemonic = words.join(' ');
            let addresses = generateAddresses(cleanMnemonic, addrNum);

            console.log('\n');
            console.log(addresses);
            console.log();
        });
    })
}catch(e){
    console.error(e);
}

// Example good mnemonic:
// mushroom crew fluid nephew movie roof guess gas intact actor off race guilt genuine solar move save quarter impact great stove print tourist damp

// Example bad mnemonic:
// carbon brass decorate avoid deny chaos rebuild slide write pupil pupil year account what cinnamon eight make life involve exotic start midnight sniff skin

function generateAddresses(mnemonicIn, num){
    let hrp = Utils.getPreferredHRP(1);
    let keychain = new AVM.AVMKeyChain(hrp,'X');

    let mnemonic = mnemonicIn.trim();

    if (bip39.validateMnemonic(mnemonic) == false) {
        console.log("\n\n[ERROR] Your mnemonic is invalid. Did you generate it manually? Use a proper BIP-39 mnemonic generation tool, such as the one in this repository.");
        process.exit();
    }

    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const hdkey = HDKey.fromMasterSeed(seed)

    let keys = [];
    for(let i=0; i<num; i++){
        let derivationPath = `${AVAX_ACCOUNT_PATH}/0/${i}`;
        let key = hdkey.derive(derivationPath)
        keys.push(key);
    }

    let addrs = keys.map((key) => {
        let privateKeyHEX = key.privateKey.toString('hex');
        let privateKeyBuffer = new Buffer(privateKeyHEX, 'hex');
        let keypair = keychain.importKey(privateKeyBuffer);
        return {"Address":keypair.getAddressString(),"PrivateKey":keypair.getPrivateKeyString()};
    });

    return addrs;
}
