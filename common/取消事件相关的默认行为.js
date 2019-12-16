function cancelHandler(event) {
  var event = event || window.event // 用于IE
  // 现在取消事件相关的默认行为
  if (event.preventDefault) event.preventDefault() // 标准技术
  if (event.returnValue) event.returnValue = false // 用于IE
  return false // 用于处理使用对象属性注册的处理程序
}
