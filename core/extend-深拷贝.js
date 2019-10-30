Object.defineProperty(Object.prototype, 'extend', {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function(o) {
    var names = Object.getOwnPropertyNames(o)
    for (var i = 0; i < names.length; i++) {
      // 如果属性已经存在，则跳过
      if (names[i] in this) continue
      // 获得o中的属性的描述符
      var desc = Object.getOwnPropertyDescriptor(o, names[i])
      Object.defineProperty(this, names[i], desc)
    }
  }
})

var x = {
  a: {
    l: [123, 23, 34, 55],
    m: 2
  },
  b: 2
}
var y = {}
y.extend(x)
console.log(y)
y.b = 99
console.log(x)
console.log(y)
