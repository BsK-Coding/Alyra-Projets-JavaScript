/*
Ecrire une fonction typeOf qui prend comme paramètre une variable, et qui retourne une string qui sera le nom du type de cette variable passée en paramètre.
Vous devrez utiliser l'opérateur typeof pour cela
*/

const typeOf = (variable) => {
  return typeof variable            // Opérateur typeOf à retourner
}

let type = (typeOf(2))              // Déclaration d'une variable Hors Scope pour récupérer le résultat de la Function
console.log(type)     