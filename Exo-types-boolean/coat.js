// Algorithme Décisionnel en OU et AND
let isRainy = false
let isWindy = false
let isCold = false
let isHot = false

if (isRainy || isWindy || isCold && isHot) {
  console.log('Mettez votre manteau')
} else {
  console.log("Nous n'avez pas besoin de manteau today")
}
