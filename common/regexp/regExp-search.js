let str = "javascript"

let strlength = str.search(/script/i)

let arr = str.split('')
console.log(arr.splice(strlength, 5).join(''))
