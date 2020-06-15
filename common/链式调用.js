// 在函数的返回中 写入一个对象，add 方法相当于是对象的属性，我们可以通过 baseNum().add() 来使用add方法
function baseNum (min, max) {
  let newMin = min * 2
  let newMax = max * 2
  return {
    add: (a, b) => {
      console.log(newMin)
      console.log(newMax)
      let minmax = newMin + newMax
      return minmax + a + b
    }
  }
}
console.log(baseNum(3,4).add(3,7))

// 链式调用原理
// 在对象上的方法最后 加上return this
// 把对象在返回回来，对象就继续调用方法了，所以就可以链式操作了。
var obj = {}
let newStr = ''
obj.a = function () {
  console.log('a')
  newStr += 'a'
  console.log(this)
  return this
}
obj.b = function () {
  console.log('b')
  newStr += 'b'
  console.log(this)
  return this
}
obj.b().a()
console.log(newStr)

// 以上方式换种写法
var obj = {
  objname: 'i am obj',
  a: function(name,age) {
    // 引用this来拿到obj对象上的属性objname
    this.objname = 'i am ' + name
    dosomething(this.objname, age)
    return this
  },
  b: function() {
    console.log(age)
    return this
  }
}

// 执行操作的函数
function dosomething (name, age) {
  let msg = `我的名字叫${name},年龄是${age}`
  console.log(msg)
  return this
}

console.log(obj.a('bob',22))


// 使用构造函数来实现链式调用
var Person = function (name) {
  this.name= name
  this.say = function () {
    console.log('say:' + this.name)
    return this
  }
  this.dosomething = function () {
    console.log('dosomething: ' + this.name)
    return this
  }
}

let men = new Person('men')
// 实现链式调用
men.say().dosomething()