//根据指定的URL发送一个JSONP请求
//然后把解析得到的响应数据传递给回调函数
//在URL中添加一个名为jsonp的查询参数，用于指定该请求的回调函数的名称
function getJSONP(url, callback) {
  //为本次请求创建一个唯一的回调函数名称
  var cbnum = 'cb' + getJSONP.counter++ //每次自增计数器
  var cbname = 'getJSONP.' + cbnum //作为JSONP函数的属性
  //将回调函数名称以表单编码的形式添加到URL的查询部分中
  //使用jsonp作为参数名，一些支持JSONP的服务
  //可能使用其他的参数名，比如callback
  if (url.indexOf('?') === -1)
    //URL没有查询部分
    url += '?jsonp=' + cbname
  //作为查询部分添加参数
  //否则
  else url += '&jsonp=' + cbname //作为新的参数添加它
  //创建script元素用于发送请求
  var script = document.createElement('script') //定义将被脚本执行的回调函数
  getJSONP[cbnum] = function(response) {
    try {
      callback(response) //处理响应数据
    } finally {
      //即使回调函数或响应抛出错误
      delete getJSONP[cbnum] //删除该函数
      script.parentNode.removeChild(script) //移除script元素
    }
  } //立即触发HTTP请求
  script.src = url //设置脚本的URL
  document.body.appendChild(script) //把它添加到文档中
}
getJSONP.counter = 0 //用于创建唯一回调函数名称的计数器
