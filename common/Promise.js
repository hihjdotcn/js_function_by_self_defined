// Promise共有三种状态， pending 、fulfilled 、 rejected, 该状态不可逆

// 请求地址
var requestUrl = 'http://musicapi.xiecheng.live/personalized'

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

// // callback hell
// httpRequest(requestUrl, function(res) {
//   console.log(res)
//   httpRequest('../files/json/a.json', res => {
//     console.log(res)
//     httpRequest('../files/json/b.json', res => {
//       console.log(res)
//       httpRequest('../files/json/c.json', res => {
//         console.log(res)
//       })
//     })
//   })
// })

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

// // 复杂的Promise链式调用
// new Promise ((resolve, reject) => {
//   httpRequest('../files/json/a.json', res => {
//     console.log(res)
//     resolve('前往b')
//   })
// }).then( res => {
//   console.log(res)
//   return new Promise((resolve, reject) => {
//     httpRequest('../files/json/b.json', res => {
//       console.log(res)
//       resolve('前往c')
//     })
//   })
// }).then( res => {
//   console.log(res)
//   return new Promise((resolve, reject) => {
//     httpRequest('../files/json/c.json', res => {
//       console.log(res)
//       resolve('流程完毕')
//     })
//   })
// }).then( res => {
//   console.log(res)
// })

// 简化后的Promise链式调用
getPromise('../files/json/aa.json')
  .then(res => {
    console.log(res)
    return getPromise('../files/json/b.json')
  }).then(res => {
    console.log(res)
    return getPromise('../files/json/c.json')
  }).then(res => {
    console.log(res)
  })
