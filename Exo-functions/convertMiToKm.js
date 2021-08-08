/*
Ecrire une fonction convertMiToKm qui fait la conversion d'une distance exprimée en Milles, en Kilomètres.
1 Mille est à égal à 1.60934 Kilomètres.
*/

const convertMiToKm = (milles, km) => {
  return milles * km
}

const km = 1.60934
console.log(convertMiToKm(5, km))