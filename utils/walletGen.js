const lightwallet = require('eth-lightwallet')
const password = Math.random().toString()
const seedPhrase = lightwallet.keystore.generateRandomSeed()
const vaultParams = { password, seedPhrase, hdPathString: "m/0'/0'/0'" }
lightwallet.keystore.createVault(vaultParams, (err, ks) => {
    ks.keyFromPassword(password, (err, derivedKey) => {
    ks.generateNewAddress(derivedKey, 1)
    const address = ks.getAddresses()[0]
    console.log('public address:', address)
    console.log('private key:', ks.exportPrivateKey(address, derivedKey))
  })
})