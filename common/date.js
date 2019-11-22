var date = new Date()
console.log(date.toLocaleString().replace(/AM/, '上午'))
console.log(date.toLocaleDateString())
console.log(date.getDate())
console.log(new Date('2019/03/21'))
Object.prototype = {
  // count: '0',
  addZero() {
    // if (this.length < 3) {
    // 	this += this.count
    return this
    // }
  }
}
