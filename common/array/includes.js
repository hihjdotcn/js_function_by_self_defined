// const arr = ['es6', 'es7','es8']
// console.log(arr.includes('es5'))
// console.log(arr.includes('es9'))
// console.log(arr.includes('es6',1))
// console.log(arr.includes('es8',-1))

// console.log(arr.indexOf('es7'))
// console.log(arr.indexOf('es7') > -1)

const arr = ['es6', ['es7','es8'], 'es9',2, NaN]
console.log(arr.includes(['es7','es8']))
console.log(arr.indexOf(['es7','es8']))
console.log(arr.includes(NaN))
console.log(arr.indexOf(NaN))
console.log(arr.includes(2))
console.log(arr.includes('2'))
console.log(arr.indexOf('1'))