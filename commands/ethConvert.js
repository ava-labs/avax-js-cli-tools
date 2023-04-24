let prompt = require('prompt');
const {logEthAddr, logAvaxKey, logAvaxAddr} = require("../functions/loggingHelpers");
const {ethKeyToAddr, ethKeyToAvax} = require("../functions/helpers");


prompt.message = "";
prompt.delimiter = "";
prompt.colors = false;


const ethKey = {
    description: "Enter your ethereum private key (HEX):",
    message: 'Please provide a valid eth privateKey',
}

const convertEthKeytoAvax = () =>
    prompt.get({properties: {ethKey}}, (err, result) => {
        try {
            let {ethKey} = result

            let ethAddr = ethKeyToAddr(ethKey)

            console.log('\n---------------------------\n');
            logEthAddr(ethAddr)

            let {avaxAddr, avaxPrivKey} = ethKeyToAvax(ethKey)

            logAvaxKey(avaxPrivKey)
            logAvaxAddr(avaxAddr)

            console.log("\n");
        } catch (e) {
            let msg = e.message || "Failed conversion."
            console.log(msg);
        }
    });

module.exports = {convertEthKeytoAvax}
