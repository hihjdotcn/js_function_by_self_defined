var obj = {
  a: 1,
  b: 2
}
obj.c = 3

// console.log(Object.esExtensible(obj))

// 将obj转为不可扩展
console.log(Object.preventExtensions(obj))

obj.d = 4

console.log(obj)
