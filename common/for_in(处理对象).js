var baseUrl = 'http://223.11.3.4/api/'
var obj = {
  name: 'a',
  postUrl: 'login'
}

function getUrl(name) {
  for (let item in obj) {
    if (name === item) return baseUrl + obj[item]
  }
}

console.log(getUrl('name'))
