// 使用POST方法发送multipart/form-data请求主体
function postFormData(url, data, callback) {
  if (typeof FormData === 'undefined')
    throw new Error('FormData is not implemented')
  var request = new XMLHttpRequest() //新HTTP请求
  request.open('POST', url) //对指定URL发送POST请求
  request.onreadystatechange = function() {
    //简单的事件处理程序
    if (request.readyState === 4 && callback)
      //当响应完成时
      callback(request) //调用回调函数
  }
  var formdata = new FormData()
  for (var name in data) {
    if (!data.hasOwnProperty(name)) continue //跳过继承的属性
    var value = data[name]
    if (typeof value === 'function') continue //跳过方法
    //每个属性变成请求的一个部分
    //这里允许File对象
    formdata.append(name, value) //作为一部分添加名/值对
  }
  //在multipart/form-data请求主体中发送名/值对
  //每对都是请求的一个部分，注意，当传入FormData对象时
  //send()会自动设置Content-Type头
  request.send(formdata)
}
