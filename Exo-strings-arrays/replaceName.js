// Texte à traiter dans le script
let text = "Bonjour, je suis Sofiane."

// Variable pour le mot à rechercher dans le texte
let prenom = 'Sofiane'
let splitText = text.slice(17, 24)

// Vérification du "slice"
// console.log(`decoup.${splitText}`)

// Script de remplacement Sofiane par notre prenom
for (let i = 0; i < text.length; ++i) {
  if (splitText === prenom)
    prenom = text.replace("Sofiane", "John")
}
console.log(`${prenom}`)
