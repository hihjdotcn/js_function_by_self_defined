var xhr = new XMLHttpRequest()
xhr.onreadystatechange = myCallback
function myCallback (){
  if (xhr.readyState < 4) {
    return
  }
  if (xhr.status !== 200) {
    alert('Error')
    return
  }
  alert(xhr.responseText)
}
xhr.open('GET', 'somefile.txt', true)
xhr.send('')

// 摆脱对全局对象的依赖，将回调函数封装到一个闭包中去。
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = (function(myxhr) {
  return function () {
    myCallback(myxhr)
  }
})(xhr)
xhr.open('GET', 'somefile.txt', true)
xhr.send('')