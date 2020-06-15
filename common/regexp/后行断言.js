//es5  先行断言 （先判断前面是否相等）
const str = 'javaScript'

console.log(str.match(/java(?=Script)/))

//es9 后行断言（先判断后面是否相等）
console.log(str.match(/(?<=java)Script/))

const str2 = 'java2Script'
// 前面不等的表达式
console.log(str2.match(/(?<!java)Script/))