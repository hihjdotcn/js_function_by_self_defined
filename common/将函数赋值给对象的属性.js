var o = {
    insideValue: 5,
    square: function (x) {
        return x * x
    }
}

var y = o.square(2)
console.log(y)
console.log(o.insideValue)