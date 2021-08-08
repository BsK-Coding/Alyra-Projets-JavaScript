/*
Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
biggest([99, 100, 101, 1]) // returns 101
*/

// Création d'une Variable tampon "max" qui servira de conteneur, car la boucle "for of"
// n'as pas d'index sur lequel se référer pour récupérer la valeur d'un élément
//  Initialisation de la variable "max" à la première valeur de notre tabNb avec l'index 0 (tabNb[0])

const biggest = (tabNb) => {
  let max = tabNb[0]
  for (const elem of tabNb) {
    if (max < elem) {
      max = elem                              // If elem > max alors on conserve la valeur de "elem" dans "max"
    }
  }
  return max
}

const tabNb = [99, 100, 101, 1]
console.log(biggest(tabNb))                 