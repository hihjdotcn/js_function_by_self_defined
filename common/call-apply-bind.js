function f(a, b) {
  return a + b
}

var o = function() {}

console.log(f.call(o, 3, 2))
console.log(f.apply(o, [3, 2]))

// apply可将参数以数组的形式传入
var array_of_numbers = [6, 2, 3, 1, 7, 5]
var biggest = Math.max.apply(null, array_of_numbers)
console.log(biggest)
console.log(Math.max(...array_of_numbers))
console.log(array_of_numbers.sort((a, b) => a > b))
console.log(array_of_numbers.sort((a, b) => a < b))

// bind
function f(y) {
  return this.x + y
}
var o = { x: 1 }
var g = f.bind(o)
console.log(g(3))
console.log(f(3))
