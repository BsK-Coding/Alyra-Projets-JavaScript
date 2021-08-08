// Code corrigé
let list = "'Alice', 'Bob', 'Charlie', 'Craig', 'Eve'"    // 'Eva' => 'Eve'
list = list.toUpperCase()                                 // list[i].toLowerCase() => list.toUpperCase()
// console.log(`la liste${list}`)                         // Console de vérification de sortie en Majuscule
for (let i = 0; i <= list.length; ++i) {                  // let j => let i / j <= (=> i)
  switch (list[i]) {
    case 'ALICE':                                           // Indentation des cases et console.log et 'c' de case en minuscule & valeur Entre guillement
    case 'BOB':
    case 'CHARLIE':
    case 'CRAIG':
    case 'EVE':
  }
}
console.log('Alice want to exchange with Bob')
console.log('Bob want to exchange with Alice')
console.log('Charlie is a generic third participant')
console.log('Craig is a password cracker')
console.log('Eve is an eavesdropper')
//console.log(`${list[i]}`)


/* CORRECTION Méthode 2
let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']
for (let j = 0; j < list.length; ++i) {
  list[i] = list[i].toLowerCase()
  switch (list[i]) {
    case 'alice':
      console.log('Bob want to exchange with Alice')
      break
    case 'bob':
      console.log('Alice want to exchange with Bob')
      break
    case 'charlie':
      console.log('Charlie is a generic third participant')
      break
    case 'craig':
      console.log('Craig is a password cracker')
      break
    case 'eve':
      console.log('Eve is an eavesdropper')
      break
  }
}
*/

/*
Résultat à obtenir

Alice want to exchange with Bob
Bob want to exchange with Alice
Charlie is a generic third participant
Craig is a password cracker
Eve is an eavesdropper
*/

/* Code à corriger
let list = "'Alice', 'Bob', 'Charlie', 'Craig', 'Eva'"
for (let j = 0; j <= list.length; ++i) {
  list[i] = list[i].toLowerCase()
  switch (list[i]) {
    Case ALICE:
    console.log('Bob want to exchange with Alice')
  Case BOB:
  consol.log('Alice want to exchange with Bob')
  Case CHARLIE:
  console.log('Charlie is a generic third participant')
  Case CRAIG:
  console.log('Craig is a password cracker')
  Case EVE:
  console.log('Eve is an eavesdropper')
}
}*/