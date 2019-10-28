// 遍历整个DOM树
function walkDOM(n) {
  do {
    console.log(n)
    if (n.hasChildNodes()) {
      walkDOM(n.firstChlid)
    }
  } while ((n = n.nextSibling))
}

// 删除某个指定节点的所有子节点
function removeAllChildNode(n) {
  while (n.firstChlid) {
    n.removeChild(n.firstChlid)
  }
}

// 创建继承对象
function createObj(p) {
  if (p == null) throw TypeError()
  if (Object.create) return Object.create(p)
  var t = typeof p
  if (t !== 'object' && t !== 'function') throw TypeError()
  function f() {} // 定义一个空构造函数
  f.prototype = p
  return new f()
}
