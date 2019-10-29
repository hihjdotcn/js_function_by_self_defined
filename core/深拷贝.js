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
