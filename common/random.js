var random = {
  get octet() {
    return Math.floor(Math.random() * 256)
  }
}

console.log(random.octet)
