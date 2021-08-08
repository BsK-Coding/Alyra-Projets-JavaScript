// Texte à traiter dans le script
let text = `In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.`

// Variable pour le mot à rechercher dans le texte
let prenom = 'Alice'
let splitText = text.split(' ')

// Vérification du découpage du texte entre chaques espaces
// console.log(`${splitText}`)

// Script de recherche
for (let i = 0; i < splitText.length; ++i) {
  if (splitText[i] === prenom)
    prenom = text.replace(/Alice/gi, "John")  // replace() n'affecte que la première valeur, mais nous pouvons utiliser l'indicateur "g" (global) pour attraper toutes les instances d'une valeur et l'indicateur "i" (insensible à la casse) pour ignorer la casse.
}                                               // ce qui nous donne pour le mot Alice, la commande "/Alice/gi"  
console.log(`${prenom}`)
