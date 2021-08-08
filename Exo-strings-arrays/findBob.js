// Texte à traiter dans le script
let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

// Variables pour enlever les espaces blancs et tout mettre en Minuscule
let trimStr = str.trim()
let lowerStr = trimStr.toLowerCase()
// Variables qui vont permettrent la recherche du mot Bob (quelque soit sa casse)
let prenom = 'Bob'
let splitStr = lowerStr.split(" ")
let retour = ""

// Vérification
// console.log(`Text Brut: ${str}`)
// console.log(`Text sans espaces blancs : ${trimStr}`)
// console.log(`Text final une fois Modifié : ${lowerStr}`)

for (i = 0; i < splitStr.length; ++i) {
  if (splitStr[i] == "bob")
    ++retour
}
console.log(`Il y a ${retour} occurrence de ${prenom} présent peu importe la casse de ces caractères dans le texte`)
