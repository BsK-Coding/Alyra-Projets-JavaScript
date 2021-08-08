/* Pseudo code
let firstName = 'bob' || 'alice'
let gender = firstname == 'bob' ? 'male' : 'female'
console.log(`${gender}${gender == 'male' ? '' : 'e'})
*/

/* L'algofithme ne fonctionne que si l'on utilise 2 prénoms prédéfinit un mâle et l'autre femelle l'entré'e'dépendant de la variable firstname
Pour étendre l'algorithme plus vaste il faudrait une 3ième variable pour notre affichage du coup gender serait la variable qui déterminerait l'entré'e'
*/

let firstName = 'alice'
let gender = firstName == 'bob' ? 'male' : 'female'
console.log(`Bonjour ${firstName}, vous êtes entré${gender == 'male' ? '' : 'e'} sur le chan`)


/* Autre manière de l'écrire */
let firstName = 'alice'
let gender = 'male'

console.log(`Bonjour ${firstName}, vous êtes entré${gender === 'male' ? '' : 'e'} sur le chan`)
// ${gender == 'male' ? '' : 'e'} => (TERNAIRE) Déterminera si 'entré' prendr un 'e' ou pas