const str = 'imooc'
console.log(str.padStart(8,'x'))
console.log(str.padEnd(8,'y'))
console.log(str)
// 第二位不填，默认用空格填空
console.log(str.padStart(8))

// 使用场景，日期格式
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = (now.getDate()).toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`)

// 手机号或身份证号加密
const phone = '13688743721'
console.log(phone.slice(0, 3) + phone.slice(-2).padStart(phone.length - 3, '*'))