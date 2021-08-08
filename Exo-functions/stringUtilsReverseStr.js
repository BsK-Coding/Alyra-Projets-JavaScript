/*
Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé.
Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH'
*/

const reverseStr = (mot) => {
  return mot.split("").reverse().join("")
}

console.log(reverseStr('Hello'))