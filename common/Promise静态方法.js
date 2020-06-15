// let p1 = Promise.resolve('success')
// console.log(p1)
// p1.then(res => {
//   console.log(res)
// })

// let p2 = Promise.reject('失败')
// console.log(p2)
// // p2.then(res => {
// //   console.log(res)
// // })
// p2.catch(err => {
//   console.log(err)
// })

// function foo(flag) {
//   if (flag) {
//     return new Promise( (resolve,reject) => {
//       resolve('success')
//     })
//   } else {
//     return Promise.reject('fail')
//   }
// }

// foo(false).then(res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

// let p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log(1)
//     resolve('1成功')
//   },2000)
// })
// let p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log(2)
//     resolve('2成功')
//   },1000)
// })
// let p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log(3)
//     reject('3失败')
//   },3000)
// })

// // 所有完成，才返回成功，有一个失败，就进入失败的结果
// Promise.all([p1,p2,p3]).then(res => {
//   console.log(res)
//   console.log('全部完成')
// },err => {
//   console.log(err)
// })

// // 只返回最先执行完返回的结果
// Promise.race([p1,p2,p3]).then(res => {
//   console.log(res)
//   console.log('全部完成')
// },err => {
//   console.log(err)
// Promise})

// // Promise.all 实际应用场景
// let img = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg']
// let promiseArr = []
// img.forEach((value, index) => {
//   promiseArr.push(new Promise((resolve,reject) => {
//     resolve(index)
//   }))
// });

// Promise.all(promiseArr).then(res => {
//   console.log(res)
// })


// Promise.race 加载图片超时
function getImg () {
  return new Promise((resolve, reject) => {
    // new Image() 是浏览器的构造函数，在node中不能通过
    let img = new Image()
    // var img = document.createElement("img")
    img.src = 'https://www.imooc.com/static/img/index/logo.png'
    img.onload = function () {
      resolve(img)
    }
  })

}

function timeout () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('图片请求超时。')
    }, 2000)
  })
}

Promise.race([getImg(), timeout()]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})