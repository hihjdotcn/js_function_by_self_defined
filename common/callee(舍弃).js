// callee 指代当前正在执行的函数

// 实用场景 ： 递归调用
var factorial = function (x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x - 1);
}
