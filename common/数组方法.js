var stack = []
var a = stack.push(1, 2, 3)
console.log(a)
console.log(stack)
stack.pop()
console.log(stack)
stack.push([4, 5])
console.log(stack)
stack.pop()
console.log(stack)
stack.unshift(5, 6, 7)
console.log(stack)
stack.shift()
console.log(stack.toString())
console.log(stack)

// 遍历
stack.forEach((item, index, stackSource) => {
    stackSource[index] = item * 2
});

console.log(stack)

var newArr = []
stack.forEach((item, index) => {
    newArr[index] = item * 2
});
console.log(newArr)

// 遍历
newArr = stack.map(item => {
    return item / 2
})
console.log(newArr)
console.log(stack)

// 过滤
var a = [55, 33, 22, 5, , , , 6, 4, 3, 1]
var smallvalues = a.filter(x => {
    return x < 10
})
console.log(smallvalues)
console.log(a)
var everyother = a.filter((x, i) => {
    return i % 2 == 0
})
console.log(everyother)
console.log(2 % 2)

// 数组判定
// 全部满足返回true
var b = a.every((x) => {
    return x < 100
})
console.log(b)

// 只要有一个满足就返回true
var s = a.some((x) => {
    return x < 2
})
console.log(s)

// reduce 减少 ，第一个参数是函数，第二个参数是初始值
var source = [1, 2, 3, 4, 5]
var sum = source.reduce((x, y) => {
    return x + y
}, 9)
var sumRight = source.reduceRight((x, y) => {
    return x + y
}, 9)

var product = source.reduce((x, y) => {
    return x + '' + y
})

var productRight = source.reduceRight((x, y) => {
    return x + '' + y
})

console.log(sum, sumRight, product, productRight)

// 并集
var merged = source.reduce()

