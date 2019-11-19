const obj = [
  {
    name: 'a',
    url: 'http://www.hihj.cn'
  },
  {
    name: 'b',
    url: 'http://www.ji.cn'
  },
  {
    name: 'c',
    url: 'http://www.g.cn'
  }
]

// function getUrl(name) {
//   let o = ''
//   obj.map(item => {
//     if (item.name === name) {
//       o = item.url
//     }
//   })
//   return o
// }

// console.log(getUrl('b'))

let newObj = obj.map(item => item)

console.log(newObj)
