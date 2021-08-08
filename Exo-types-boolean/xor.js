// Algo Décisionel en OU Exclusif
let isRainy = true
let isWindy = true

if ((isRainy && !isWindy) || (!isRainy && isWindy)) {
  console.log('Mettez votre manteau')
} else {
  console.log("Nous n'avez pas besoin de manteau today")
}
