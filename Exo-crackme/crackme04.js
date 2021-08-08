/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = `zzzzzzzzzzu`

const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)                // => Etape 1: le caractère tapé sera convertie en valeur Décimal (charCodeAt) et (tmp1 +=) Additionne à chaque boucle for dans tmp1
  }
  if (tmp1 === 1337) {                            // => Etape 2: Le password entrée devra être égale à 1337, afin de valider la condition
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)