const prompt = require("prompt");
const {validateMnemonic, cleanMnemonic} = require("../../functions/helpers");

const numExtAddrs = {
    description: 'How many external addresses do you want to generate?',
    type: 'integer',
    required: true,
    message: 'Input must be a valid integer'
}

const numIntAddrs = {
    description: 'How many internal addresses do you want to generate?',
    type: 'integer',
    required: true,
    message: 'Input must be a valid integer'
}

const isMnemonicProvided = {
    description: 'Do you want to provide a mnemonic phrase? (Y or N) (if not, one will be generated for you)',
    before: isY,
    conform: isYorN,
    message: 'Input must be Y or N'
}

const mnemonic = {
    description: "Enter your mnemonic phrase (*note*, your mnemonic will be masked to protect your privacy):\n",
    hidden: true,
    replace: '*',
    message: 'Your mnemonic is invalid. Please provide a valid 24 word mnemonic generated from a BIP-39 mnemonic generation tool',
    ask: function () {
        return prompt.history('isMnemonicProvided').value;
    },
    conform: validateMnemonic,
    before: cleanMnemonic
}

function isYorN(v) {
    return (v === 'Y' || v === 'y' || v === 'N' || v === 'n')
}

function isY(value) {
    return (value === 'Y' || value === 'y');
}

const addressGenSchema = {properties: {numExtAddrs, numIntAddrs, isMnemonicProvided, mnemonic}}

module.exports = {addressGenSchema}
