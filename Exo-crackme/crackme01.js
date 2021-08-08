/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = 'password1234'

const crackme1 = (password) => {
  if (password === 'password1234') {    // => Le password ce trouve sur cette ligne
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme1(password)
