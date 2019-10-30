var calculator = {
  operand1: 1,
  operand2: 2,
  add: function() {
    this.result = this.operand1 + this.operand2
  }
}
console.log(calculator.add())
console.log(calculator.result)
var b = {
  operand1: 3,
  operand2: 3
}
// 借用calculator的add方法，this由calculator转向了b
calculator.add.apply(b)
console.log(b.result)
