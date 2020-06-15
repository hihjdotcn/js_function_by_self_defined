// // 具名组 匹配
// const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-03-05')
// console.log(date)
// console.log(date[1])
// console.log(date[2])
// console.log(date[3])

//es9 写法
const date = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2020-03-05')
console.log(date)
// 解构赋值
const { year, month, day } = date.groups
console.log(year, month, day)
