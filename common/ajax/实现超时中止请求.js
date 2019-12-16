//发起HTTP GET请求获取指定URL的内容
//如果响应成功到达，传入responseText给回调函数
//如果响应在timeout毫秒内没有到达，中止这个请求
//浏览器可能在abort()后触发"readystatechange"
//如果是部分请求结果到达，甚至可能设置status属性
//所以需要设置一个标记，当部分且超时的响应到达时不会调用回调函数
//如果使用load事件就没有这个风险
function timedGetText(url, timeout, callback) {
  var request = new XMLHttpRequest() //创建新请求
  var timedout = false //是否超时
  //启动计时器，在timeout毫秒后将中止请求
  var timer = setTimeout(function() {
    //如果触发，启动一个计时器
    timedout = true //设置标记
    request.abort() //然后中止请求
  }, timeout) //中止请求之前的时长
  request.open('GET', url) //获取指定的URL
  request.onreadystatechange = function() {
    //定义事件处理程序
    if (request.readyState !== 4) return //忽略未完成的请求
    if (timedout) return //忽略中止请求
    clearTimeout(timer) //取消等待的超时
    if (request.status === 200)
      //如果请求成功
      callback(request.responseText) //把response传给回调函数
  }
  request.send(null) //立即发送请求
}
