//发起同步的HTTP GET请求以获得指定URL的内容
//返回响应文本，或如果请求不成功或响应不是文本就报错
function getTextSync(url) {
  var request = new XMLHttpRequest() //创建新请求
  request.open('GET', url, false) //传递false实现同步
  request.send(null) //立即发送请求
  //如果请求不是200 OK，就报错
  if (request.status !== 200) throw new Error(request.statusText) //如果类型错误，就报错
  var type = request.getResponseHeader('Content-Type')
  if (!type.match(/^text/))
    throw new Error('Expected textual response;got:' + type)
  return request.responseText
}
