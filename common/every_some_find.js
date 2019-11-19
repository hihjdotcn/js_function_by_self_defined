const isBelowThreshold = currentValue => currentValue < 40

const array1 = [1, 30, 39, 29, 10, 13]

// every
console.log(array1.every(isBelowThreshold))

// some
const isBelowThreshold2 = currentValue => currentValue < 10
console.log(array1.some(isBelowThreshold2))

// find
const found = array1.find(element => element === 39)
console.log(found)
