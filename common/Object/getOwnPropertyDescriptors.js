// const obj = {
//   name: 'imooc',
//   web: 'hihj.cn',
//   course: 'es'
// }

// const desc = Object.getOwnPropertyDescriptors(obj)
// // 不带s的 getOwnPropertyDescriptor用法
// const desc = Object.getOwnPropertyDescriptor(obj, 'web')
// console.log(desc)

// value 值
// writable 能否修改
// enumerable 可枚举
// configurable 改属性能否被delete删除掉

let newObj = {}
Object.defineProperty(newObj,'name', {
  value: 'hihj',
  writable: true
})

console.log(newObj)
newObj.name = 'lisi'
console.log(newObj)