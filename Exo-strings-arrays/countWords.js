// Texte à traiter dans le script
let sonnet = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends - moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
  Et la treille où le pampre à la rose s'allie.

Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?
  Mon front est rouge encor du baiser de la reine;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`

// Variables pour traité le sonnet
let splitSonnet = sonnet.split(' ')

// Affichage du résultats
console.log(`Le texte contient ${splitSonnet.length} mots`)

// J'étais partie sur une suppression des ponctuations par replace "", 
// mais vu que je me suis retrouvé bloqué j'ai fais un break et été au plus court
