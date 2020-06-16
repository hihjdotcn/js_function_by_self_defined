// 该Promise.allSettled()方法返回一个在所有给定的promise已被决议或被拒绝后决议的promise，
// 并带有一个对象数组，每个对象表示对应的promise结果。
Promise.allSettled([
  Promise.resolve({
    code: 200,
    data: [1,2,3]
  }),
  Promise.resolve({
    code: 200,
    data: []
  }),
  Promise.reject({
    code: 200,
    data: [7,8,9]
  }),
]).then(res => {
  console.log(res)
  const data = res.filter(item => item.status === 'fulfilled')
  console.log(data)
  console.log('成功')
}).catch(err => {
  console.log(err)
  console.log('失败')
})

// 永远都是成功的返回，返回一个当前promise处理结果的数组