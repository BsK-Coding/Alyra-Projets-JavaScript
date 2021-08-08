// texte à analyser par le script
let text = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript"

// Variable pour le mot à rechercher dans le texte
let js = 'Javascript'
let splitText = text.split(' ')
let count = 0

// Vérification du découpage du texte entre chaques espaces
// console.log(`${splitText}`)

// Script de recherche
for (let i = 0; i < splitText.length; ++i) {
  if (splitText[i] === js)
    ++count
}
console.log(`Le texte précédent contient ${count} fois le mot ${js}`)
