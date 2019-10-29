// 往数组原型添加新的方法
Array.prototype.inArray = function(needle) {
  for (var i = 0, len = this.length; i < len; i++) {
    if (this[i] === needle) {
      return true
    }
  }
  return false
}

var colors = ['red', 'blue', 'yellow']
console.log(colors.inArray('red'))

// 反转字符串(方法1)
String.prototype.strReveser = function() {
  var _this = this
  var strArr = this.split('')
  var newStr = []
  for (var i = 0,len = strArr.length; i < len; i++) {
    newStr.unshift(_this[i])
  }
  return newStr.join('')
}

var myStr = 'hello'
console.log(myStr.strReveser())

// 反转字符串(方法2)  apply和call只是改变了方法（函数）的指定对象  
String.prototype.reverse = function() {
  return Array.prototype.reverse.call(this.split('')).join('')
}
var yourStr = 'hello22'
console.log(yourStr.reverse())
