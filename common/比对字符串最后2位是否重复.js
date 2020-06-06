let str = 'welcome//'
let arr = str.split('')
let lastStr = arr[arr.length - 1]
let lastSecondStr = arr[arr.length - 2]
if (lastStr === lastSecondStr && lastStr === '/') {
  arr.pop()
  str = arr.join('')
}