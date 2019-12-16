//发出一个HTTP GET请求以获得指定URL的内容
//当响应成功到达，验证它是否是纯文本
//如果是，把它传递给指定回调函数
function getText(url, callback) {
  var request = new XMLHttpRequest() //创建新请求
  request.open('GET', url) //指定待获取的URL
  request.onreadystatechange = function() {
    //定义事件处理程序
    //如果请求完成，则它是成功的
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader('Content-Type')
      if (type.match(/^text/))
        //确保响应是文本
        callback(request.responseText) //把它传递给回调函数
    }
  }
  request.send(null) //立即发送请求
}
