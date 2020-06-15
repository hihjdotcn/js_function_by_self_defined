const foo = (a, b, c, d) => {
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}

const name = 'xiecheng'
const age = 34
foo`这是${name},他的年龄是${age}岁${age}`

console.log(String.fromCharCode(0x20BB7))
console.log(String.fromCodePoint(0x20BB7))

let arr = [1, 2, 3, 4]
console.log(arr.includes(1))

let str = 'iccom'
console.log(str.repeat(10))