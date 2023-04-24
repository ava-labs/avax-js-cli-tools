const logMnemonic = (mnemonic) => {
    console.log("\n")
    console.log("Generated Mnemonic:", mnemonic);
    console.log("\n")
}

const logExternalAddresses = (externalAddresses) => {
    console.log('Generated External Addresses\n');
    logAddresses(externalAddresses)
}

const logInternalAddresses = (internalAddresses) => {
    console.log('Generated Internal Addresses\n');
    logAddresses(internalAddresses)
}

const logAddresses = (addresses) => {
    for (let i = 0; i < addresses.length; i++) {
        console.log(`${i}:\t${addresses[i]}`);
    }
    console.log('\n');
}

const logEthAddr = (ethAddr) => {
    console.log("ETH Address:\t", ethAddr)
}

const logAvaxAddr = (avaxAddr) => {
    console.log("AVAX Address:\t", avaxAddr);
}

const logAvaxKey = (avaxPrivKey) => {
    console.log("AVAX Key:\t", avaxPrivKey);
}

const cliCommands = {
    convertEthKey: 'convert-eth-key: Converts an ethereum private key to an avalanche private key and displays address',
    generateAddresses: 'generate-addresses: Generates Avalanche external and internal addresses',
    generateMnemonic: 'generate-mnemonic: Generates a new mnemonic'
}
const logCliOptions = () => {
    console.log('\nPlease provide a command from the below:\n')
    Object.values(cliCommands).forEach(command => console.log('-', command))
    console.log('\n')
}

module.exports = {
    logMnemonic,
    logInternalAddresses,
    logExternalAddresses,
    logEthAddr,
    logAvaxAddr,
    logAvaxKey,
    logCliOptions
}
