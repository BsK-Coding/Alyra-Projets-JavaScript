/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = 'A'                                  // La ligne 12 nous donne une information et la ligne 9 complète l'infos

const crackme10 = (password) => {
  if (
    password
      .trim()
      .toLowerCase()                                // Transforme le caractère en Minuscule
      .split('')
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem))
      .map((elem) => elem.charCodeAt())     // aeiouy convertie en décimal (97,101,105,111,117,121) seul l'élément "a" nous intérressera pour la suite du code
      .reduce((a, b) => {                   // Il nous manque l'élément "a" en Décimal pour la function "reduce"
        return a + b
      }, 0) % 2 !== 0                       // => True si le résultat du Modulo différent de 0, donc un chiffre impair
  ) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme10(password)