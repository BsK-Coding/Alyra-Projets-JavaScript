/*
Ecrire une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step.
L'exécution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un intervale de step
*/

/* Code à transformer en Function */
let min = 0
let max = 20
let step = 2
for (let i = min; 1 <= max; i += step) {
  console.log(i)
}

/* Synthaxe de la Function */
const count = (min, max, step) => {
  for (let i = min; 1 <= max; i += step) {
    console.log(i)
  }
}
count(0, 20, 2)

/* Function */
const count = (nbrMin, nbrMax, nbrStep) => {
  for (nbrMin; nbrMin <= nbrMax; nbrMin += nbrStep) {
    console.log(nbrMin)
  }
}

let counter = count(0, 100, 10)




