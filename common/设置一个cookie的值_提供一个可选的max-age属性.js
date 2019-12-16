//以名/值的形式存储cookie
//同时采用encodeURIComponent()函数进行编码，来转义分号、逗号和空白符
//如果daysToLive是一个数字,设置max-age属性为该数值表示cookie直到指定的天数
//到了才会过期。如果daysToLive是0就表示删除cookie
function setcookie (name, value, daysToLive) {
  var cookie = name + '=' + encodeURIComponent(value)
  if (typeof daysToLive === 'number')
    cookie += ';max-age=' + daysToLive * 60 * 60 * 24
  document.cookie = cookie
}
