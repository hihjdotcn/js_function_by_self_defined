// XMLHttpRequest
function ajax (url, successCallback, failedCallback) {
  // 1. 创建XMLHttpRequest对象
  var xmlHttp
  if(window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest()
  } else if(window.ActiveXObject) {
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  // 2.发送请求
  if(xmlHttp != null) {
    xmlHttp.open('GET', url, true)
    xmlHttp.send(null)
  } else {
    alert('Your browser does not support XMLHTTP.')
  }
  // 3.服务器响应
  xmlHttp.onreadystatechange = function () {
    // 加载完成
    if (xmlHttp.readyState==4) {
      // 请求成功
      if(xmlHttp.status == 200) {
        let obj = JSON.parse(xmlHttp.responseText)
        successCallback && successCallback(obj)
      } else if (xmlHttp.status == 404){
        failedCallback && failedCallback('当前请求 未找到！')
      } else{
        console.log('problem fetch data')
      }
    }
  }
}

// Promise 封装
function getPromise(url) {
  return new Promise((resolve, reject) => {
    ajax(url, successRes => {
      resolve(successRes)
    }, failedRes =>{
      reject(failedRes)
    })
  }).catch(err => {
    console.log(err)
  })
}