// function makerIterator(arr) {
//   let nextIndex = 0
//   return {
//     next () {
//       return nextIndex < arr.length ? {
//         value: arr[nextIndex++],
//         done: false
//       } : {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }

// let it = makerIterator(['a','b', 'c'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let courses = {
  allCourse: {
    frontend: ['ES','miniApp','Vue'],
    backend: ['Java','Pathon','Spring'],
    webapp: ['Andriod', 'IOS']
  }
}

// 可迭代协议： Symbol.iterator
// 迭代器协议： return { next() {return {value, done}}}
// courses[Symbol.iterator] = function() {
//   let allCourse = this.allCourse
//   let keys = Reflect.ownKeys(allCourse)
//   let values = []
//   return {
//     next() {
//       if(!values.length){
//         if(keys.length) {
//           values = allCourse[keys[0]]
//           keys.shift()
//         }
//       }
//       console.log(values)
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// for(let c of courses) {
//   console.log(c)
// }


// 用generator 实现
courses[Symbol.iterator] = function* () {
  let allCourse = this.allCourse
  let keys = Reflect.ownKeys(allCourse)
  let Values = []
  while(1) {
    if(!Values.length) {
      if(keys.length) {
        Values = allCourse[keys[0]]
        keys.shift()
        yield Values.shift()
      } else {
        return false
      }
    } else {
      yield Values.shift()
    }
  }
}

for(let c of courses) {
  console.log(c)
}
