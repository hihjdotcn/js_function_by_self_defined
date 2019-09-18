// 遍历整个DOM树
function walkDOM (n) {
  do {
    console.log(n)
    if (n.hasChildNodes()) {
      walkDOM(n.firstChlid)
    }
  }
  while (n = n.nextSibling)
}

// 删除某个指定节点的所有子节点
function removeAllChildNode (n) {
  while (n.firstChlid) {
    n.removeChild(n.firstChlid)
  }
}