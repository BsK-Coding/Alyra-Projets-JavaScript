/*
Ajouter au fichier précédent une fonction makeUnique qui prend comme paramètre une liste de nombre et retourne une nouvelle liste sans doublons,
classée par ordre croissant.
makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1])
//returns [1, 2, 3, 4, 5, 7]
*/

const makeUnique = (uniqueNb) => {
  return uniqueNb.filter((v, i, a) => a.indexOf(v) === i)     // Méthode filter permettant de ne sortir que des valeurs uniques
}

const uniqueNb = [1, 2, 1, 3, 2, 4, 5, 7, 5, 1]
console.log(makeUnique(uniqueNb))