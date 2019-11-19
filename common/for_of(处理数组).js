const obj = [
  {
    name: 'a',
    url: 'http://www.hihj.cn'
  },
  {
    name: 'b',
    url: 'http://www.ji.cn'
  },
  {
    name: 'c',
    url: 'http://www.g.cn'
  }
]

for (const element of obj) {
	// console.log(element.name)
	if (element.name === 'b') {
		console.log(element.url)
	}
}
