let prompt = require('prompt');
const {addressGenSchema} = require("./promptFields");
const {generateMnemonic, generateExternalAddresses, generateInternalAddresses} = require("../../functions/helpers");
const {logMnemonic, logExternalAddresses, logInternalAddresses} = require("../../functions/loggingHelpers");

prompt.message = "";
prompt.delimiter = "";
prompt.colors = false;

const generateAddresses = () => {
    prompt.get(addressGenSchema, (err, result) => {
        try {
            let {isMnemonicProvided, mnemonic, numExtAddrs, numIntAddrs} = result

            let cleanMnemonic = isMnemonicProvided
                ? mnemonic
                : generateMnemonic()

            if (!isMnemonicProvided)
                logMnemonic(cleanMnemonic)

            if (numExtAddrs > 0) {
                let externalAddresses = generateExternalAddresses(cleanMnemonic, numExtAddrs);
                logExternalAddresses(externalAddresses)
            }

            if (numIntAddrs > 0) {
                let internalAddresses = generateInternalAddresses(cleanMnemonic, numIntAddrs);
                logInternalAddresses(internalAddresses)
            }
        } catch (e) {
            console.error(e);
        }
    })
}


module.exports = {generateAddresses}


