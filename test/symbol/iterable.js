// const va = require('va');
// var a = [1, 3, 7, 9]
// var it = a[Symbol.iterator]()

// // it.next().value;
// // it.next().value;
// // it.next().value;
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);


function* foo(x) {
	var y = x * (yield);
	return y;
}

var it = foo(6)

it.next()
var res = it.next(7)
console.log(res.value);
