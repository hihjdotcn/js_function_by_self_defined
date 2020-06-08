// ================= es5中创建静态属性和静态方法 ======================
function People (name,age) {
  this.name = name
  this.age = age
  People.currentCount++
}

// 静态属性
People.currentCount = 0
// 静态方法
People.getAge = function () {
  return 'pop'
}

// 实例方法
People.prototype.speak= function (msg) {
  return `${this.name}说：${msg}`
}

let men = new People('men', 89)
console.log(men.speak('我来了'))

console.log(People.currentCount)
console.log(People.getAge())
// console.log(men.getAge())


// ================= es6中创建静态属性和静态方法 ======================
class Animal {
  constructor(age, name='动物') {
    this.name = name
    this.age = age
  }
  run () {
    return `${this.name}跑的很快`
  }
  static eat (something) {
    return `动物喜欢吃${something}`
  }
}

// 静态属性
Animal.skill = '爬行'
// 静态方法
console.log(Animal.eat('肉'))

let cat = new Animal(19, '猫')
console.log(cat.run())
console.log(Animal.skill)
console.log(cat.skill)
console.log(cat.eat())
