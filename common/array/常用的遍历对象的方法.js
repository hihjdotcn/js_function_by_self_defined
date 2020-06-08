let arr = ['bob','jack','nil']
arr.forEach((index, value) => {
  console.log(index,value)
})

for(let i=0;i<arr.length; i++) {
  console.log(arr[i],i)
}

for(let index in arr) {
  console.log(arr[index], index)
}

arr.map((item,index) => {
  console.log(item, index)
})

for(let item of arr) {
  console.log(item)
}

for(let item of arr.keys()) {
  console.log(item)
}

for(let item of arr.values()) {
  console.log(item)
}

for(let item of arr.entries()) {
  console.log(item)
}