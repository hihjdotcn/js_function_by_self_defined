var rectangle = {
  width: 1.0,
  height: 2.0,
  name: undefined,
  get area() {
    return this.width * this.height
  },
  set nameValue(newName) {
    this.name = newName
  },
  get nameValue() {
    return "This object's name is " + this.name
  }
}

console.log(rectangle.area)
console.log((rectangle.name = 'leon'))
console.log(rectangle.nameValue)
