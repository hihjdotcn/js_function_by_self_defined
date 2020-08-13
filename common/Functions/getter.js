const mObj = {
  count: null,
  hasChanged: false,
  get countDown() {
    if(this.hasChanged === true) {
      this.hasChanged = false
      this.count--
      return this.count
    }
  },
  set countDown(currentSecond) {
    if(currentSecond === 0) {
      this.hasChanged = true
    }
  }
}

mObj.count = 33
mObj.countDown = 0
console.log(mObj.countDown)