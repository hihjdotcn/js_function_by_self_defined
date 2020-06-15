const obj = {
  name: 'imooc',
  course: 'es'
}
const entries = Object.entries(obj)
console.log(entries)

// ES10
const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)

// map -> 对象
const map = new Map()
map.set('name', 'imooc')
map.set('course', 'es')
console.log(map)
const map2obj = Object.fromEntries(map)
console.log(map2obj)

// 使用场景
const course = {
  math: 80,
  englist: 86,
  chinese: 99
}
const res = Object.entries(course).filter(([key, value]) => value > 90)
console.log(res)
console.log(Object.fromEntries(res))