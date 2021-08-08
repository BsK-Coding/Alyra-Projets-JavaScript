/*
Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true
si le nombre passé en paramètre est impair, sinon la fonction retournera false.
*/

/* Méthode 1 */
const isOdd = (number,) => {
  return number % 2 === 1;        // Retourne True Si la valeur de number est Impair le reste de Modulo de 2 sera de 1 ou supérieur lors de nombre Impair
}

const nombre = isOdd(2)
console.log(nombre)


/* Méthode 2 */
const isOdd = (nb,) => {
  if (nb % 2 !== 0) {
    return true
  }
  else {
    return false
  }
  // Peut s'exprimer ainsi => return nb % 2 !== 0 ? true : false;      
}

const nombre = isOdd(2)
console.log(nombre)

