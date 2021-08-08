/* Algorithme de cryptage très Facile */

let password = ''

const crackme11 = (password) => {
  if (password.length === 7 && password[3] === 't' && password.startsWith('scy') && password.endsWith('ale')) {
    console.log('GOOD')
  }
  else {
    console.log('BAD')
  }
}
crackme11(password)