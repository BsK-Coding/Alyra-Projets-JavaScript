// Boucle Do-While - Algorithme d'affichage des éléments du Tableau "tab" ligne par ligne

let tab = ['a', 'b', 'c', 'd', 'e']
let i = 0                   // Initialisation de "i" à 0

do {
  console.log(tab[i])       // Console placé dans la boucle afin d'obtenir une sortie des valeurs par ligne & pour chaque valeur d'index "i"
  ++i                       // Incrémentation de i que l'on aurai pu également noté i = i + 1 
} while (i < tab.length)             // Boucle While de l'index 0 à 4 (a,b,c,d,e)
