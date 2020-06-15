// i(忽略大小写) m(多行匹配) g(全局匹配)

// y修饰符 粘连修饰符
const str = 'aaa_aa_a'
const reg1 = /a+/g
const reg2 = /a+/y

console.log(reg1.exec(str))
console.log(reg2.exec(str))

console.log(reg1.exec(str))
console.log(reg2.exec(str))

console.log(reg1.exec(str))
console.log(reg2.exec(str))

// u修饰符 unicode
const str2 = '\uD842\uDFB7' // 表示一个字符
console.log(/^\uD842/u.test(str2))