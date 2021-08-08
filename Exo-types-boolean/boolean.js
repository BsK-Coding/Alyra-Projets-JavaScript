let res1 = (true && false) || (false && true)
let res2 = 10 > 11 && 11 > 10
let res3 = (true || false) && true
let res4 = (!true && !false) || (!false && !false)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
let res6 = (!(20 >= 20) && 7 === 7) || true
let res7 = '1' === 1 && '2' == 2 && '3' === 3
let res8 = !res7
let res9 = !res8
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)

// Affichage du résultat des Variables
console.log(`Résultat de la Variable res1 = ${res1}`)
console.log(`Résultat de la Variable res2 = ${res2}`)
console.log(`Résultat de la Variable res3 = ${res3}`)
console.log(`Résultat de la Variable res4 = ${res4}`)
console.log(`Résultat de la Variable res5 = ${res5}`)
console.log(`Résultat de la Variable res6 = ${res6}`)
console.log(`Résultat de la Variable res7 = ${res7}`)
console.log(`Résultat de la Variable res8 = ${res8}`)
console.log(`Résultat de la Variable res9 = ${res9}`)
console.log(`Résultat de la Variable res10 = ${res10}`)
