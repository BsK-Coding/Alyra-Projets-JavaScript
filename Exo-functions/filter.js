/* Exemple à utiliser
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
*/

const filterFn = (tab) => {                 // function filter
  if (tab.length >= 6) {
    return true
  }
  else {
    return false
  }
}

const filter = (tab, fn) => {               // fn Paramètre temp de filter on aurait pu mettre n'importe quel "nom"
  let newTab = []
  for (let i = 0; i < tab.length; i++) {
    if (fn(tab[i])) {
      //console.log(filterFn(tab[i]))
      newTab.push(tab[i])
    }
  }
  return newTab
}

const tab = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
console.log(filter(tab, filterFn))
