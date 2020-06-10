var Person = function (name) {
  // 私有属性，该属性new出来的对象是无法获取到的。
  var prx = 'other'
  // 实例属性
  this.name = name
  // 私有方法，不能被new出来的对象调用
  var prxMethod = function () {
    console.log('in prx')
  }
  // 实例方法
  this.say = function () {
    return `hi,my name is ${this.name} !`
  }
}

// 原型方法 即公共方法
// new实例共享该方法
Person.prototype.eat =  function() {
  return this.name + ' is eating'
}
// 静态方法
Person.staticMethod = function () {
  console.log('this is static method')
}

let men = new Person('men')

console.log(men) // 私有属性获取不到
console.log(men.prx) // 私有属性获取不到
console.log(men.name) // 返回 men
// console.log(men.prxMethod()) // 私有方法获取不到
console.log(men.say()) // 私有方法获取不到
men.say = function () {
  return this.name + '不是我的名字！'
}
console.log(men.say())

console.log(men.eat())
// console.log(men.staticMethod()) // new实例不能操作构造函数的静态方法

// 原型上的方法也可以在new实例中被修改
men.eat = function () {
  return '重新改写eat方法'
}

console.log(men.eat())
