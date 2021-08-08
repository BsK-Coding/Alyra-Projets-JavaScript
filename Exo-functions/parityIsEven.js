/*
Ajouter au fichier précédent "parityIsOdd" une fonction isEven qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est pair, sinon la fonction retournera false.
la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité.
*/

/* Méthode 1 */
const isOdd = (number,) => {
  return number % 2 === 1;
  // Retourne True Si la valeur de number est Impair le reste de Modulo de 2 sera de 1 lors de nombre Impair
}

const isEven = (number,) => {
  return number % 2 !== 1;
  // Retourne True Si la valeur de number est Impair le reste de Modulo de 2 sera de 1 ou supérieur lors de nombre Impair
}

const nombre = isEven(isOdd(2))
console.log(nombre)


/* Méthode 2 optimisé */
const isOdd = (number,) => {
  return number % 2 === 1;
}

const isEven = (number,) => {
  return !isOdd(number)
}

console.log(isEven(isOdd(3)))