// // Generator 生成器
// function foo (){
//   for (let i=0;i <3; i++) {
//     console.log(i)
//   }
// }
// foo()

// function* foo() {
//   for (let i=0;i <3; i++) {
//     console.log(i)
//     yield i
//   }
// }

// let f = foo()
// console.log(f.next(3))
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

// function* gen(x) {
//   // 第一步，yield返回值为 5+1= 6；
//   let y = 2 * (yield(x + 1))
//   // 第二步 yield传的值是3，y= 2 x 3 = 6, yield的 返回值为 6/3 = 2
//   let z = yield(y/3)
//   // 第三步 yield传值为13，z=13, return 5+6+23 = 34
//   return x + y + z
// }
// let g = gen(5)
// console.log(g.next())
// console.log(g.next(3))
// console.log(g.next(23))

// // 找7
// function* count(x = 1) {
//   while (true) {
//     if(x % 7 === 0) {
//       yield x
//     }
//     x++
//   }
// }
// let n = count()
// console.log(n.next().value)
// console.log(n.next())
// console.log(n.next())
// console.log(n.next())

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

function request(url) {
  ajax(url, res => {
    https.next(res)
  })
}
function* gen() {
  let res1 =yield request('../files/json/a.json')
  console.log(res1)
  let res2 =yield request('../files/json/b.json')
  console.log(res2)
  let res3 =yield request('../files/json/c.json')
  console.log(res3)
}

let https = gen()
https.next()