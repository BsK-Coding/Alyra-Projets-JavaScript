// Algorithme Décompte de 101 à 1 => Décompte Impair

let n = 101

console.log(`Valeur de sortie`, n)                              // Affichage de la valeur 101
do {
  --n
  for (let i = n; i % 2 !== 1; --i) {
    --n
    console.log(`Valeur de sortie`, n)                          // Affichage de chacunes des valeurs Impair de "n" de 99 à 1 => (boucle for --i) + (do-while --i) == --2i
    while (i === 2) {
      console.log('Fin du décomptage Impair')                   // Fin de boucle Triple
      break
    }
  }
} while (n > 1)


/*
Boucle 1 décrémente de 1 condition fermeture de boucle =1
Boucle 2 décrémente de 1
Boucle 3 Affichage de Fin de l'algorithme
*/
