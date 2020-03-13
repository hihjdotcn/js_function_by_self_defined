let data =
  '<div><img src="www.com.cn"/><span><img src="www.yahoo.com.cn"/></span></div>'

let reg = /<img src=[\'\"]?([^\'\"]*)[\'\"]?/gi

console.log(data.match(reg))
