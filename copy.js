// 浅拷贝
function extendCopy(p) {
  var c = {}
  for (var i in p) {
    c[i] = p[i]
  }
  c.uber = p
  return c
}

// 深拷贝
function deepCopy(p, c) {
  c = c || {}
  for (var i in p) {
    if (p.hasOwnProperty(i)) {
      if (typeof p[i] === 'object') {
        c[i] = Array.isArray(p[i]) ? [] : {}
        deepCopy(p[i], c[i])
      } else {
        c[i] = p[i]
      }
    }
  }
  return c
}

var parent = {
  numbers: [1, 2, 3],
  letters: ['a', 'b', 'c'],
  obj: {
    prop:1
  },
  bool: true
}

var mydeep = deepCopy(parent)
var myshallow = extendCopy(parent)
mydeep.numbers.push(4, 5, 6)

console.log(mydeep.numbers)
console.log(parent.numbers.push(10))
console.log(myshallow.numbers)
console.log(parent.numbers)
console.log(mydeep.numbers)