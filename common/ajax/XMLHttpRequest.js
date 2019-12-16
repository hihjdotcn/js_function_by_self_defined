var request = new XMLHttpRequest()

if (window.XMLHttpRequest === undefined) {
  window.XMLHttpRequest = function() {
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0')
    } catch (e1) {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0')
      } catch (e2) {
        throw new Error('XMLHttpRequest is not supported')
      }
    }
  }
}

// 请求方法
request.open('post', 'url', data)
// 设置content-type
request.setRequestHeader('Content-Type', 'text/plain')
// 最后一步，发送
request.send(null)
