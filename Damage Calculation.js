function attack(damage) {
  // Code disini
  damage -= 2
  return damage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code disini
  res = numberOfAttacks*attack(damagePerAttack)
  return res
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
