const str = '     imooc    '

// 正则 去除前面空格
console.log(str.replace(/^\s+/g, ''))
console.log(str.replace(/\s+$/g, ''))

// 去除前面空格
console.log(str.trimStart())
console.log(str.trimLeft())

// 去除后面空格
console.log(str.trimEnd())
console.log(str.trimRight())

console.log(str.trim())
