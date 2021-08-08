// Texte à passer au script
let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

// Command enlevant les espaces blancs
let trimStr = str.trim()

// Command transformant tous les caractères du texte en minuscules
let upperTrimStr = trimStr.toUpperCase()

// Command découpant le texte à chaque espaces
let splitUpperTrimStr = upperTrimStr.split(' ')

// exécute une fonction donnée sur chaque élément du tableau, afin de faire apparaître chacun des mots à la ligne
splitUpperTrimStr.forEach((elem) => console.log(`mot: ${elem}`))
