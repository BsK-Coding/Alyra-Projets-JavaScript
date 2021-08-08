/*
Ecrire une fonction forEachqui devra effectuer la même opération que la méthode
.forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
La fonction forEach devra appliquer une fonction passée en paramètre à chacun des éléments d'un tableau passé en paramètre aussi à la fonction forEach
*/

const forEach = (tab) => {
  for (const elem of tab) {
    return tab
  }
}

const tab = ['a', 'b', 'c']
console.log(forEach(tab))