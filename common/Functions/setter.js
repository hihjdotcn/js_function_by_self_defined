const language = {
  set current(name) {
    this.log.push(name)
  },
  log: []
}

language.current = 'EN'
language.current = 'CN'

console.log(language.log)