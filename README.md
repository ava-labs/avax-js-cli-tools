# AVAX JS CLI Tool

### To install the cli tool globally
1) `git clone https://github.com/ava-labs/avax-js-cli-tools.git`
2) `cd avax-js-cli-tools/`
3) `npm install`
3) `npm i g`

### To generate a Mnemonic Phrase
If you are in need of a mnemonic phrase, type the following command in your terminal:

`avax-cli generate-mnemonic`

### To generate External and Internal HD Addresses:
To generate your deterministic AVAX addresses, type the following command in your terminal:

`avax-cli generate-addresses`

* In the first prompt, enter how many external addresses you want to generate. 
* In the second prompt, enter how many internal addresses you want to generate. 
* In the third prompt, specify if you wish to provide a mnemonic (if not, one will be generated for you)
* (If you wish to provide a mnemonic) In the forth prompt, paste your mnemonic phrase.

### To convert an Ethereum Key to an Avalanche Key and Address
Given an ethereum private key, it will display the corresponding avalanche address and private key.

`avax-cli convert-eth-key`
