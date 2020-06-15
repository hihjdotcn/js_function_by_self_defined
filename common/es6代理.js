// ES5
let obj = {}
let newVal = ''
Object.defineProperty(obj, 'name', {
  get () {
    return newVal
  },
  set (val) {
    newVal = `当前的值是：${val}`
  }
})
obj.name = 'es'
console.log(obj.name)

//ES6 中的 proxy
let obj2 = {}
let p = new Proxy(obj2, {})
p.name = 'imooc'
console.log(obj2.name)
for (let key in obj2) {
  console.log(key)
}


let arr = [7, 8, 9]
arr = new Proxy(arr, {
  get (target, prop) {
    console.log(target, prop)
    return prop in target ? target[prop] : 'error'
  }
})
console.log(arr[1])

// has
let range = {
  start: 1,
  end: 6
}

range = new Proxy(range, {
  has (target, prop) {
    return prop >= target.start && prop <= target.end
  }
})
console.log(12 in range)