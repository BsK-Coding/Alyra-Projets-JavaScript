/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = `V42V`

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  // => (slice -3, -1) retire les éléments hormis les caractères -2 et -3 du password de 4 caractères
  // du coup on peut mettre n'importe quelle caractères en position avant et après 42                                                               
  // split et join s'annule entre eux lorsqu'on les combines
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)


