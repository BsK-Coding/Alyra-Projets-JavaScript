/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = '4321drowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {     // => "password" est split puis inversé (.reverse) puis reconcaténé (.join), pour réssoudre le password on peut partie de la fin et revenir dans les commandes
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme5(password)