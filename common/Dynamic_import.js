function loadFile() {
  import('./ajax/XMLHttpRequest.js').then(mod => {
    mod.default('../../files/json/a.json', res => {
      console.log(res)
    })
  })
}

loadFile()