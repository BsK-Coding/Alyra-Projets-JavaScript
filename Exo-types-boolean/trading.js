let BitcoinPrice = true   // Prix du cours
let BitCoinInit = false   // Prix de référence

if (BitCoinInit < BitcoinPrice) {
  console.log('Acheter du Bitcoin')
} else if (BitCoinInit > BitcoinPrice) {
  console.log('Vender vos Bitcoins')
} else {
  console.log('Ne rien Faire')
}
