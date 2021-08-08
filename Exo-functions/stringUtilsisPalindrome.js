/*
Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre
et qui retourne true si la string est un palindrome, sinon la fonction devra retourner false.
Vous devrez utiliser la fonction reverseStr pour effectuer cette vérification.
*/

const reverseStr = (mot) => {
  return mot.split("").reverse().join("")
}

const isPalindrome = (mot) => {
  for (let i = 0; i <= mot.length; i++)
    if (mot[i] === mot[mot.length - i - 1]) {           // Comparaison de l'index de la variable 'mot' avec celui mot.length (- 1) => Index de fin
      return true                                       // et décrémentation de l'index de mot.length (- i)
    }
    else {
      return false
    }
}

console.log(isPalindrome(reverseStr('kayak')))         // Notre "mot" sera écrit en Minuscule, autrement nous devrions utiliser un toLowerCase()
