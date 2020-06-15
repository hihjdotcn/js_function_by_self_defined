// dot 点
// . 匹配任意字符

const reg = /./
console.log(reg.test('bob'))
console.log(reg.test(5))
console.log(reg.test('\n'))
console.log(reg.test('\r'))
console.log(reg.test('\u{2028}'))

// s修饰符 开启dotAll模式
const reg2 = /./s
console.log(reg2.test('bob'))
console.log(reg2.test(5))
console.log(reg2.test('\n'))
console.log(reg2.test('\r'))
console.log(reg2.test('\u{2028}'))

//es5  g 全局匹配 i 忽略  m 跨行匹配
//es6  y 粘性的  u 匹配unicode
//es9  s 点匹配任意字符
