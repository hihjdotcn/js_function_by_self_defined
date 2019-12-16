function encodeFormData(data) {
  if (!data) return '' //一直返回字符串
  var pairs = [] //为了保存名=值对
  for (var name in data) {
    //为每个名字
    if (!data.hasOwnProperty(name)) continue //跳过继承属性
    if (typeof data[name] === 'function') continue //跳过方法
    var value = data[name].toString() //把值转换成字符串
    name = encodeURIComponent(name.replace('%20', '+')) //编码名字
    value = encodeURIComponent(value.replace('%20', '+')) //编码值
    pairs.push(name + '=' + value) //记住名=值对
  }
  return pairs.join('&') //返回使用"＆"连接的名/值对
}

// 使用表单编码数据发起一个HTTP POST请求
function postData(url, data, callback) {
  var request = new XMLHttpRequest()
  request.open('POST', url) //对指定URL发生POST请求
  request.onreadystatechange = function() {
    //简单的事件处理程序
    if (request.readyState === 4 && callback)
      //当响应完成
      callback(request) //调用回调函数
  }
  request.setRequestHeader(
    'Content-Type', //设置Content-Type
    'application/x-www-form-urlencoded'
  )
  request.send(encodeFormData(data)) //发送表单编码的数据
}

// 使用表单编码数据发起GET请求
function getData(url, data, callback) {
  var request = new XMLHttpRequest()
  request.open(
    'GET',
    url + //通过添加的编码数据获取指定的url
      '?' +
      encodeFormData(data)
  )
  request.onreadystatechange = function() {
    //简单事件处理程序
    if (request.readyState === 4 && callback) callback(request)
  }
  request.send(null) //发送请求
}
