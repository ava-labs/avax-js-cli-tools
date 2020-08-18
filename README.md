
#Avax JS CLI Tools
A collection of scripts.

## Prerequisites

NodeJs v12.14.1

## Installation
1) `git clone https://github.com/ava-labs/avax-js-cli-tools.git`
2) `cd avax-js-cli-tools/`
3) `npm install`

## Generating a Mnemonic Phrase
If you are in need of a mnemonic phrase, type the following commands in your terminal:

`node mnemonic.js`

## Deriving HD Addresses fromt a mnemonic Phrase
To generate your deterministic AVAX addresses, type the following commands in your terminal:

`node address_gen.js`

In the first prompt, enter how many addresses you want to generate. In the second prompt, paste your mnemonic phrase.

## Ethereum Key to Avalanche Key
Given an ethereum private key, it will display the corresponding avalanche address and private key.
`node eth_convert.js`