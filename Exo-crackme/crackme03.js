/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = '@12!1234567891'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {     // => Condition password = 14 caractères / 1 er caractère = @ / 4 ieme caractère = ! 
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)