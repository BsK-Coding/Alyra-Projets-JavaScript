/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

/* Méthode 1 - Algorithme uniquement avec un seul IF */

let password = '1a2b!AZEAZEAAA'
if (password[0] === '1') + (password[1] === 'a') + (password[2] === '2') + (password[3] === 'b') + (password[4] === '!') && (password.length > 13) ? console.log('OK') : console.log('BAD')

/* Méthode 2 - Algorithme uniquement avec un IF Else */
let password = '1a2b!AZEAZEAAA'
const crackme6 = (password) => {

  if (password[0] === '1' && password[1] === 'a' && password[2] === '2' && password[3] === 'b' && password[4] === '!' && password.length > 13) {
    console.log('OK')
  }
  else {
    console.log('BAD')
  }
}
crackme6(password)

/* Méthode 3 - Algorithme avec des IF Else Imbriqués */
// On pourrait utiliser l'élément "password.startsWith('1a2b!')" pour optimiser le code

let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'
const crackme6 = (password) => {
  if (password[0] === '1') {
    if (password[1] === 'a') {
      if (password[2] === '2') {
        if (password[3] === 'b') {
          if (password[4] === '!' && password.length > 13) {
            // => les conditions IF nous donnes les 5 premiers caractères
            // il ne manque plus qu'à rajouter des caractères jusqu'à dépasser 13 caractères (password.length > 13)
            console.log('OK')
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme6(password)


