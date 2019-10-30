var o = {}
Object.defineProperty(o, 'x', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true
})
console.log(o.x)
console.log(Object.keys(o))
o.x = 5
console.log(o.x)
Object.defineProperty(o, 'x', { writable: true })
o.x = 2
Object.defineProperty(o, 'x', { value: 6 })
Object.defineProperty(o, 'x', {
  get: function() {
    return 22
  }
})
console.log(Object.getOwnPropertyNames(o))
console.log(o.x)
