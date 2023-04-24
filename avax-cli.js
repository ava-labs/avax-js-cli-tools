#! /usr/bin/env node
const {logCliOptions} = require("./functions/loggingHelpers");
const {convertEthKeytoAvax} = require("./commands/ethConvert.js");
const {generateAddresses} = require("./commands/addressGeneration/addressGeneration.js");
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
