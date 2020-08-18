

## Prerequisites

NodeJs v12.14.1

## Step 1: Installation

In a secure machine, type the following commands in your terminal:

`git clone https://github.com/ava-labs/AVAX-address-generator.git`

`cd AVAX-address-generator/`

`npm install`

## Step 2 (Optional): Generating a mnemonic phrase

If you are in need of a mnemonic phrase, type the following commands in your terminal:

`node mnemonic.js`

## Step 3: Deriving AVAX Addresses

Finally, to generate your AVAX addresses, type the following commands in your terminal:

`node address_gen.js`

In the first prompt, enter how many addresses you want to generate. In the second prompt, paste your mnemonic phrase.



## Ethereum Key to Avalanche Key
Given an ethereum private key, it will display the corresponding avalanche address and private key.
`node eth_convert.js`