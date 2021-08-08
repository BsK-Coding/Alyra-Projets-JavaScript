/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = 'a'

const crackme2 = (password) => {
  if (password.length === 1) {        // => L'information suivante nous dit qu'il suffit d'un caractère pour valider le password
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)