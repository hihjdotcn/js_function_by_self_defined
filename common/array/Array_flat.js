const arr = [1,2,[3,4,[5,6,[7,8]]]]

// 扁平化数组
console.log(arr.flat().flat().flat()) // 返回被拍平的数组 [1,2,3,4,5,6,7,8]
console.log(arr.flat(3)) // 返回被拍平的数组 [1,2,3,4,5,6,7,8]
console.log(arr.flat(Infinity)) // 返回被拍平的数组 [1,2,3,4,5,6,7,8]

const arr1 = [1,2,3,4,5]
const res = arr1.map(x => x + 1)  // 返回 [2,3,4,5,6]
const res = arr1.map(x => [x + 1]).flat() // 返回 [2,3,4,5,6]
const res = arr.flatMap(x => [x + 1]) // 返回 [2,3,4,5,6]
