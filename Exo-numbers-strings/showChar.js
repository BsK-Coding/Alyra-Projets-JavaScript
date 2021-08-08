let msg = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`

// Message d'introduction parlant de l'auteur du livre, et donnant le nombre de caractères du texte
console.log(`Ce texte de ${msg.length} caractères est tiré du chapitre 1 du Livre "Salammbô" écrit par l'auteur Gustave Flaubert en 1862`);

for (let i = 0; i < msg.length; ++i) {
  console.log(`Le caractère ${msg[i]} est à l'index ${i}`)
}