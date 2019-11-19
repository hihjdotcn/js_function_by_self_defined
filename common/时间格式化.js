var d = new Date()

console.log(d)
console.log(d.toJSON())
console.log(d.toString())
console.log(d.toLocaleDateString())
console.log(d.toDateString())
console.log(d.toLocaleString())
//1970年1月1日0时0分0秒 到该日期对象所代表时间的毫秒数
console.log(d.valueOf())
console.log(new Date().toLocaleDateString().replace(/-/g, '*'))
