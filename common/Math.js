let arr = [23, 4, 5, 67, 8, 998]

// 返回最大值
console.log(Math.max(1, 20))
// 返回最小值
console.log(Math.min(1, 20))
// 返回一个数的任意次根
console.log(Math.pow(2, 3))
// 返回一个数的平方根
console.log(Math.sqrt(2))
// 返回数的绝对值
console.log(Math.abs(-1.39))
// 向下取整
console.log(Math.floor(4.6))
// 四舍五入
console.log(Math.round(4.1))
// 向上取整
console.log(Math.ceil(4.1))
// 获取范围内的随机数
function randomNumber(min, max) {
  let target = min + Math.round(Math.random() * (max - min))
  return target
}
console.log(randomNumber(2, 9))
