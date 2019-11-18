function f(a, b) {
    return a + b
}

var o = function () { }

console.log(f.call(o, 3, 2))
console.log(f.apply(o, [3, 2]))

// apply可将参数以数组的形式传入
var array_of_numbers = [1, 2, 3, 4, 5, 7]
var biggest = Math.max.apply(null, array_of_numbers)
console.log(biggest)

// bind
function f(y) {
    return this.x + y
}
var o = { x: 1 }
var g = f.bind(o)
console.log(g(3))
console.log(f(3))
