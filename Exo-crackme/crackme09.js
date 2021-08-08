/*
Vous devez assigner la bonne string à la variable password ci dessous
Et obtenir le message 'GOOD' en éxecutant le programme
*/

let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {       // Pour entrer dans la boucle Password doit contenir 'Just' en Début et 'Password' en Fin
    let tmp1 = password.slice(4).slice(0, -8)                               // Password "JustASimplePassword" Pour Lire les commandes à la suite on commence par la fin [slice(0, -8) "Juste#ASimple"] [slice(4) "ASimple"]
    tmp1 = tmp1.split('').reverse().join('')                                // Inversion de la valeur contenu dans "tmp1" = #ASimple
    if (Number.isNaN(Number(tmp1))) {                                       // Cette condition ne permet d'accéder à la condition IF de validation de Password que si "tmp1" est en Ascii
      tmp1 += String.fromCharCode(35)                                       // Cette command permet la conversion des caractères Ascii en Char
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {                        // tmp1 = elpmiSA#
        console.log('GOOD')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)