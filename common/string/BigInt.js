const max = 2 ** 53
console.log(max)

console.log(Number.MAX_SAFE_INTEGER)

console.log(max === max + 1) // true

const bigInt = 9007199254740993n
console.log(bigInt)
console.log(typeof bigInt)  // bigInt

const bigInt2 = BigInt(9007199254740993n)
console.log(bigInt2)

const num = bigInt + bigInt2
console.log(typeof num)