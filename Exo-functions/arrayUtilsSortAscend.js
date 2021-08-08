/*
Ajouter au fichier précédent une fonction sortAscend qui prend comme paramètre une liste de nombres
et retourne une nouvelle liste dont les nombres sont classés par ordre croissant.
sortAscend([99, 100, 101, 1]) 
// returns [1, 99, 100, 101]
*/

const sortAscend = (tabNb) => {
  for (const elem of tabNb) {                             // comparer les éléments de biggestNb => for of
    return tabNb.sort(function (a, b) { return a - b })   // Trier par ordre croissant avec la méthode .sort
  }
}

const tabNb = [99, 100, 101, 1]
console.log(sortAscend(tabNb))