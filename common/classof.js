function classOf(o) {
  if (o === null) return 'Null'
  if (o === undefined) return 'undefined'
  return Object.prototype.toString.call(o).slice(8, -1)
}

var a = 'de1'
// console.log(a.toString())
console.log(classOf(a))

console.log(classOf(null))
console.log(classOf(1))
console.log(classOf(''))
console.log(classOf(false))
console.log(classOf({}))
console.log(classOf([]))
console.log(classOf(/./))
console.log(classOf(new Date()))
function f() {}
console.log(classOf(new f()))
