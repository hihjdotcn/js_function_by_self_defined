const shallowCopy = source => {
  let target = {}
  for (let prop in source) {
    // 只复制该对象的自有属性，如果继承属性也要复制，请去除if判断
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop]
    }
  }
  return target
}
