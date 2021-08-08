// Texte à passer dans l'algo pour en sortir le nombre de voyelle
let text = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`

// Correction //

// Mise en Majuscule de tous les caractères de "text"
text = text.toLowerCase()
console.log(text)           // Affichage du résultat

// Déclaration des Variabless qui serviront pour les voyelles
let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

// Boucle for qui passera tous les caractères de "text" pour identifier les voyelles
// et incrémenté le nombre présent dans les variables déclaré plus haut
for (let i = 0; i < text.length; ++i) {
  if (
    text[i] === 'e' ||
    text[i] === 'é' ||
    text[i] === 'è' ||
    text[i] === 'ê'
  ) {
    ++nbE
  } else if (text[i] === 'a') {
    ++nbA
  } else if (text[i] === 'i') {
    ++nbI
  } else if (text[i] === 'o') {
    ++nbO
  } else if (text[i] === 'u') {
    ++nbU
  } else if (text[i] === 'y') {
    ++nbY
  }
}

// Affichage du comptage des voyelles depuis leurs Variables
console.log(`nb E: ${nbE}`)
console.log(`nb A: ${nbA}`)
console.log(`nb I: ${nbI}`)
console.log(`nb O: ${nbO}`)
console.log(`nb U: ${nbU}`)
console.log(`nb Y: ${nbY}`)


//console.log(`Nombre totale de voyelles dans le texte: (${nbE} + ${nbA} + ${nbI} + ${nbO} + ${nbU} + ${nbY})`)

/*
// Variable de référence que l'on vas rechercher dans le texte
let voyelles = 'a, e, i, o, u'
//console.log(`Le texte précédent possède ${e}`)
let compteur = 0

// Comptage du nombre de voyelle "e" dans le texte
// Pas eu le temps d'optimiser le IF en jouant sur l'incrémentation de l'index Voyelles (INCOMPLET)
for (let i = 0; i < msg.length; ++i) {
  if ((msg[i] === voyelles[0].toLowerCase()) || (msg[i] === voyelles[0].toUpperCase()))
    voyelles[++i]
      ((msg[i] === voyelles[1].toLowerCase()) || (msg[i] === voyelles[1].toUpperCase())) &&
      ((msg[i] === voyelles[2].toLowerCase()) || (msg[i] === voyelles[2].toUpperCase())) &&
      ((msg[i] === voyelles[3].toLowerCase()) || (msg[i] === voyelles[3].toUpperCase())) &&
      ((msg[i] === voyelles[4].toLowerCase()) || (msg[i] === voyelles[4].toUpperCase()))
    ++compteur
}
console.log(`Le texte précédent possède ${compteur} voyelle${compteur > 1 ? 's' : ''} comprenant "a, e, i, o, u" majuscules et minuscules confondues`)
*/
