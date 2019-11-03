function f(x, y, z) {
    if (arguments.length < 2) {
        console.log('参数个数不足！')
        console.log(arguments[0] * 7)
    } else {
        console.log('参数已满！')
    }
}

f(3)
