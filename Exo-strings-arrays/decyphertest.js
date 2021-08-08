// Texte chiffré au format code Caesar (Chiffrement par décalage)
let text = "YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU"
let test = "YRMV"

// Message chiffré en Code Caesar tous les caractères à la suite subise un décalage d'un nombre non définit
// Nous partirons sur l'hypothèse que le décalage est identique pour tous les caractères
// Nous prendrons une Variable changer manuellement pour indiqué le nombre du décalage ou bien l'incorporé
// dans une boucle for pour l'incrémenter automatiquement

// je pars d'un tableau de l'alphabet en Majuscule suite au infos suivantes:
// - Message est en anglais
// - Toutes les lettres sont en majuscules
// - Il n'y a pas de ponctuation
// - Les espaces dans le message chiffré sont aussi des espaces dans le message non chiffré


// TEST Transforme le text en Ascii
let charTest = []
let ascii = []
let strCharTest = 0

for (let i = 0; i < test.length; ++i) {
  ascii = test.charCodeAt(i)
  charTest.push(ascii)
}
console.log(`Test en ASCII: ${charTest}`)

strCharTest = charTest
console.log(`Valeur de strChartest: ${strCharTest}`)

// TEST Décalage via boucle FOR
let decal = 0
console.log(typeof strCharTest)
for (let i = 0; i < strCharTest.length; ++i) {
  parseInt(strCharTest[i], 10)
  console.log(`Valeur de strChartest: ${strCharTest}`)
  // decal = strCharTest + 1
  strCharTest.push(decal)
}
console.log(`Test en ASCII: ${strCharTest}`)
/*

// Transforme le text en Ascii
let charText = []
let ascii = []

for (let i = 0; i < text.length; ++i) {
  ascii = text.charCodeAt(i)
  charText.push(ascii)
}
console.log(`Texte en ASCII: ${charText}`)

*/



// let charText = text.charCodeAt() => for(let i =0; i<charText.length; ++i)
// let decal = charText + 1


/*
// Variable contenant l'alphabet que l'on vas split, afin d'utiliser chacun des caractères
let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
let splitAlphabet = alphabet.split(" ")
//let splitText = text.split(" ")
let asciiText = ``
let ascii2 = ``
const index = 10
*/
/*
let caract1 = "Y"
let caract1 = "R"
let caract1 = "M"
let caract1 = "V"
*/
//acsiiText = text.charCodeAt(index)
//console.log(`mot: ${asciiText}`)
//console.log(`mot: ${text.charCodeAt()}`)
//console.log(`mot: ${alphabet.charCodeAt()}`)
// Vérification split
//console.log(`mot: ${splitAlphabet}`)
//console.log(`mot: ${splitText}`)

// Modification de l'alphabet en ASCII
// console.log(`The character code ${text.charCodeAt(index)} is equal to ${text.charAt(index)}`)

// Transformation "text" en Code ASCII
//const AsciiText = new Function(x)
/*
for (let i = 0; i < test.length; ++i) {
  asciiText = console.log(`mot: ${test.charCodeAt(i)}`)
  ascii2 = asciiText + 1

  //acsiiText = text.charCodeAt(i)
}
console.log(`mot: ${test.charAt(ascii2)}`)
//console.log(`mot: ${asciiText}`)
//console.log(`mot: ${text.charAt(ascii2)}`)
*/