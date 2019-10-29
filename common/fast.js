var start = (new Date()).getTime();

var arr = [1, 3, 4, 5, 7, 8, 182938, 747751, 416566546, 576716235]

var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     console.log(sum)
// }
arr.forEach(function (item) {
    sum += item
    console.log(sum)
})

var end = (new Date()).getTime()

console.log(end - start);