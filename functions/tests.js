const expect = require("chai").expect;
const {
    generateInternalAddresses,
    generateExternalAddresses,
    generateMnemonic,
    validateMnemonic,
    cleanMnemonic,
    ethKeyToAddr,
    ethKeyToAvax
} = require("./helpers");
const bip39 = require("bip39");

const mnemonic = "mandate time outside annual anxiety about earth define silent rude engine alien opera offer adapt ski either section normal spell insect wagon welcome belt"
const internalAddress = 'X-avax1yzwcl8aaa8p8cyfr70t40w2yhlgn2np6wdvjv7'
const externalAddress = 'X-avax1exyva0c5ktr0d0k3kaghxmqm2vpq2gpd2vcuav'
describe("Test Address Generation Functions", function () {

    describe("generateInternalAddresses()", function () {
        it("should generate 5 internal addresses for a given mnemonic", function () {
            const internalAddresses = generateInternalAddresses(mnemonic, 5);
            expect(internalAddresses).to.be.an('array');
            expect(internalAddresses).to.have.lengthOf(5);
            expect(internalAddresses[0]).to.equal(internalAddress);
        });
    });

    describe("generateExternalAddresses()", function () {
        it("should generate 5 external addresses for a given mnemonic", function () {
            const externalAddresses = generateExternalAddresses(mnemonic, 5);
            expect(externalAddresses).to.be.an('array');
            expect(externalAddresses).to.have.lengthOf(5);
            expect(externalAddresses[0]).to.equal(externalAddress)
        });
    });

    describe("generateMnemonic()", function () {
        it("should generate a 256-bit mnemonic", function () {
            const mnemonic = generateMnemonic();
            expect(mnemonic).to.be.a('string');
            expect(mnemonic.split(" ")).to.have.lengthOf(24);
            expect(bip39.validateMnemonic(mnemonic)).to.be.true;
        });
    });

    describe("validateMnemonic()", function () {
        it("should return true for a valid mnemonic", function () {
            const mnemonic = generateMnemonic();
            const isValid = validateMnemonic(mnemonic);
            expect(isValid).to.be.true;
        });

        it("should return false for an invalid mnemonic", function () {
            const mnemonic = "invalid mnemonic";
            const isValid = validateMnemonic(mnemonic);
            expect(isValid).to.be.false;
        });
    });

    describe("cleanMnemonic()", function () {
        it("should remove leading/trailing white spaces and multiple spaces", function () {
            const mnemonic = "  this is a  valid mnemonic    with   extra    spaces   ";
            const cleanedMnemonic = cleanMnemonic(mnemonic);
            expect(cleanedMnemonic).to.equal("this is a valid mnemonic with extra spaces");
        });
    });

    describe("ethKeyToAddr()", function () {
        it("should convert an Ethereum private key to an address", function () {
            const ethPrivKey = "27d70a8a4c7f68ff76c2ce7fa46d3b3e7b4f9b4b7f753cb946ad4a7b8828e8de";
            const expectedAddress = "0x81E765BD76f103785A04B2AfCF4813295ceA3914";
            const avaxAddr = ethKeyToAddr(ethPrivKey);
            expect(avaxAddr).to.equal(expectedAddress);
        });
        it("should convert an Ethereum private key with '0x' to an address", function () {
            const ethPrivKey = "0x27d70a8a4c7f68ff76c2ce7fa46d3b3e7b4f9b4b7f753cb946ad4a7b8828e8de";
            const expectedAddress = "0x81E765BD76f103785A04B2AfCF4813295ceA3914";
            const avaxAddr = ethKeyToAddr(ethPrivKey);
            expect(avaxAddr).to.equal(expectedAddress);
        });
    });

    describe('ethKeyToAvax()', function () {
        it('should convert an Ethereum private key to an Avalanche private key and address', function () {
            const ethPrivKey = '9fcd0a4d4fae0470f0f0121f66ec1d6bda24260d70cf3ce34dbf2d4e4f4d4f03';
            const expectedAvaxPrivKey = 'PrivateKey-2DNuEGnNo4h7XvuZ3xjWMcpXqCK2y8hyfH3QsCELT64mLxTq26';
            const expectedAvaxAddr = 'X-avax16p87x4hm5l7s775a0tz2fe3awf7hqs2dexefyu';
            const {avaxAddr, avaxPrivKey} = ethKeyToAvax(ethPrivKey);
            expect(avaxAddr).to.equal(expectedAvaxAddr);
            expect(avaxPrivKey).to.equal(expectedAvaxPrivKey);
        });
    });
})
