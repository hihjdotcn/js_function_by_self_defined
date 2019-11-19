// 检测一个对象是否是真正的函数对象
function isFunction(x) {
    return Object.prototype.toString.call(x) === "[object Function]"
}