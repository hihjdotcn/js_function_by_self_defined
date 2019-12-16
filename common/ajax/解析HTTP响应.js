//发起HTTP GET响应以获取指定URL的内容
//当响应到达时，把它以解析后的XML Document对象、解析后的JSON对象
//或字符串形式传递给回调函数
function get(url, callback) {
  var request = new XMLHttpRequest() //创建新请求
  request.open('GET', url) //指定待获取的URL
  request.onreadystatechange = function() {
    //定义事件监听器
    //如果请求完成且成功
    if (request.readyState === 4 && request.status === 200) {
      //获得响应的类型
      var type = request.getResponseHeader('Content-Type') //检查类型，这样我们不能在将来得到HTML文档
      if (type.indexOf('xml') !== -1 && request.responseXML)
        callback(request.responseXML)
      //Document对象响应
      else if (type === 'application/json')
        callback(JSON.parse(request.responseText))
      //JSON响应
      else callback(request.responseText) //字符串响应
    }
  }
  request.send(null) //立即发送请求
}
