var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Visit my blog at http://www.example.com/~david";
var result = text.match(url)
console.log(result[0])
console.log(result[1])
console.log(result[2])
console.log(result[3])
console.log(result.index) 