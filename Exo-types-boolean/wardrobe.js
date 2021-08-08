// Chaque boucle aura sa propre Variable contenant des vêtements selon la température
let isRainy = false
let temperature = 16
let clothes = ''
let clothesCold = ['Sous_vetements', 'chaussette', 'bottes', 'pantalon', 'sweater', 'coat', 'gants', 'bonnet']     // Vêtements à Température base
let clothesMedium = ['Sous_vetements', 'baskets', 'pantalon', 't-shirt']      // Vêtements Température ambiante
let clothesHot = ['Sous_vetements', 'tongue', 'short', 'lunette_solaire']     // Vêtements à Température élevé

if (isRainy) {
  clothes += `umbrella, impermeable` // Seuls accessoires en cas de pluie
}

if (temperature < 15) {
  clothes += `coat, ${clothesCold}`
} else if (temperature >= 15 && temperature <= 20) {
  clothes += `sweater, ${clothesMedium}, `
} else {
  clothes += `t-shirt, ${clothesHot}`  // 
}
console.log(`Je vous recommande de porter: ${clothes}`)