var p = Object.create({ a: 1 })

var o = Object.create(p)

console.log(p.isPrototypeOf(o))
console.log(Object.prototype.isPrototypeOf(o))
