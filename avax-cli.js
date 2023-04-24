#! /usr/bin/env node
const {logCliOptions} = require("./functions/loggingHelpers");
const {convertEthKeytoAvax} = require("./commands/eth_convert.js");
const {generateAddresses} = require("./commands/address_gen/address_gen.js");
const {generateAndLogMnemonic} = require("./commands/mnemonic.js");

const cliCommandsOptions = {
    convertEthKey: 'convert-eth-key',
    generateAddresses: 'generate-addresses',
    generateMnemonic: 'generate-mnemonic'
}

const avaxCli = (command) => {
    switch (command) {
        case cliCommandsOptions.convertEthKey:
            convertEthKeytoAvax()
            break
        case cliCommandsOptions.generateAddresses:
            generateAddresses()
            break
        case cliCommandsOptions.generateMnemonic:
            generateAndLogMnemonic()
            break
        default:
            return logCliOptions()
    }
}

avaxCli(process.argv.slice(2)[0])
