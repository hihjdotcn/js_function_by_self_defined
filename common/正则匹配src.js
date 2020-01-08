let data =
  '<div><img src="www.com.cn"/><span><img src="www.yahoo.com.cn"/></span></div>'

let reg = /src=[\'\"]?([^\'\"]*)[\'\"]?/gi

console.log(data.match(reg))
