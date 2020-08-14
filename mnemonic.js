const bip39 = require('bip39');

let mnemonic = bip39.generateMnemonic(256);

console.log("\n")
console.log(mnemonic);
console.log("\n")
