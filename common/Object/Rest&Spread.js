const obj1 = {
  name: 'bob',
  age: 34,
  book: {
    bookName: 'es6'
  }
}

const obj2 = {
  gender: 'male',
  age: 99
}

// 克隆 合并对象
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)
obj1.age = 18
// 浅拷贝 （第二层 是引用对象）
obj1.book.bookName = 'women'
console.log(obj3)

const obj6 = {
  name: 'mike',
  age: 36,
  eat: 'fish',
  gender: 'female'
}
// 剩余元素， 放在所有参数的最后 
const { name, age, ...rest } = obj6
console.log(name)
console.log(age)
console.log(rest)
