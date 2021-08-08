/*
Ajouter au fichier précédent une fonction calc qui prend 3 paramètres:
un caractère parmi les 4 suivants: +, -, *, /. Ces caractères détermineront l'opération de calcul à effectuer.
un premier nombre
un deuxième nombre
En fonction du caractère passé en paramètre, l'opération de calcul correspondante devra être appliquée aux 2 autres paramètres,
et le résultat sera retourné Vous devrez absolument vous servir des 4 fonctions add, sub, mul et div écrites précédemment.
*/

const calculatrice = (operateur, nb1, nb2) => {
  switch (operateur) {              // Les instructions entre crochets sont optionnelles
    case '+':
      return nb1 + nb2              // Peu aussi s'écrire => console.log(calcAdd(nb1, nb2))
    case '-':
      return nb1 - nb2
    case '*':
      return nb1 * nb2
    case '/':
      return nb1 / nb2
    // le "break" n'est pas nécessaire lorsque un return est présent
    default:
      console.log(`vous n'avez pas entrer un opérateur valide`)
    // Affichage d'un msg, si jamais la valeur de l'opérateur ne fait pas partie des 4 "'+', '-', '*', '/'"

  }
}

const operateur = '*'
console.log(calculatrice(operateur, 3, 2))
// console.log(calculatrice(operateur, nb1, nb2))

/* Fonction Composant la calculatrice */

// const calcAdd = (nb1, nb2) => {
//   return nb1 + nb2
// }

// const calcSub = (nb1, nb2) => {
//   return nb1 - nb2
// }

// const calcMul = (nb1, nb2) => {
//   return nb1 * nb2
// }

// const calcDiv = (nb1, nb2) => {
//   return nb1 / nb2
// }