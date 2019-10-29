function callback(e) {
  // prep work
  e = evt || window.event
  var target = e.target || e.srcElement
  //actual callback work
  console.log(target.nodeName)

  // 防止默认行为
  if (e.preventDefault) {
    e.preventDefault() // modern browsers
  } else {
    e.returnValue = true // old IE
  }

  // 阻断事件传播
  if (e.stopPropagation) {
    e.stopPropagation() // modern browsers
  } else {
    e.cancelBubble = true // old IE
  }
}

// start listening for click events
function addEvent(el) {
  if (document.addEventListener) { // modern browsers
    el.addEventListener('click', callback, false)
  } else if (document.attachEvent) { // old IE
    el.attachEvent('onclick', callback)
  } else {
    el.onclick = callback
  }
}