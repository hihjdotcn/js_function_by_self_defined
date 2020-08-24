// 方法1
function deepCopy(obj1, obj2) {
  for (var name in obj1) {
    if (typeof obj1[name] === 'object') {
      obj2[name] = obj1[name].constructor === Array ? [] : {}
      // 递归时改变当前参数位置,
      // 举例：当前name为child时，copy中的参数被替换为 (obj1.child, obj2.child)
      deepCopy(obj1[name], obj2[name])
    } else {
      obj2[name] = obj1[name]
    }
  }
  return obj2
}

// 方法2
function deepCopy(obj) {
  debugger
  let result = {}
  let keys = Object.keys(obj),
    key = null,
    temp = null
  console.log(keys)
  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    temp = obj[key]
    if (temp && typeof temp === 'object') {
      result[key] = deepCopy(temp)
    } else {
      result[key] = temp
    }
  }
  return result
}

// 方法3 序列化反序列化
var o = { x: 1, y: { z: [false, null, ''] } }
var s = JSON.stringify(o)
var p = JSON.parse(s)

// 方法4 defineProperty设置Object原型方法
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

// 方法4
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj;
  // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
