// Texte à passer dans l'algo pour en sortir le nombre de voyelle "e"
let msg = `Je suis le ténébreux, - le veuf, - l'inconsolé,
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

// Variable de référence que l'on vas rechercher dans le texte
let e = 'e'
let compteur = 0

// Comptage du nombre de voyelle "e" dans le texte
for (let i = 0; i < msg.length; ++i) {
  if ((msg[i] === e.toLowerCase()) || (msg[i] === e.toUpperCase()))
    ++compteur
}
console.log(`Le texte précédent possède ${compteur} voyelle${compteur > 1 ? 's' : ''} "e" majuscules et minuscules confondues`)
