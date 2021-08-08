// Texte à traiter dans le script
let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

// Variable pour enlever les espaces blancs et tout mettre en Minuscule
let trimStr = str.trim()
let lowerStr = trimStr.toLowerCase()

// Vérification
console.log(`Text Brut: ${str}`)
console.log(`Text sans espaces blancs : ${trimStr}`)
console.log(`Text final une fois Modifié : ${lowerStr}`)