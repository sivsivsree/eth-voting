require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 470000,
      from: '0x8c568806c9ca79bd183771f19373e4317dc23fcd'
    }
  }
}
