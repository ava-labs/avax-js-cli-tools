const {generateMnemonic} = require("../functions/helpers.js");
const {logMnemonic} = require("../functions/loggingHelpers.js");


const generateAndLogMnemonic = () => {
    const mnemonic = generateMnemonic()
    logMnemonic(mnemonic)
}

module.exports = {generateAndLogMnemonic}
