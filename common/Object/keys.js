let myObj = {
  'name': 'hj',
  'age': 56,
  'gender': 'male'
}

let objArray = Object.keys(myObj)
console.log(objArray)
delete objArray[0]
objArray[0] = 'hello'
console.log(objArray[0])