var arr = [1, 2, 3]
var b = arr.concat([5, 6, 7])
// var b = Array.prototype.concat.call(arr, [5, 6, 7])
console.log(b)


var c = {
	value: 5
}
// var d = Array.prototype.concat.call(c, 7,8)
var d = Array.prototype.concat.apply(c, [7])
console.log(d)
