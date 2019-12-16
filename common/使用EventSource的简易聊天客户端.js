window.onload = function() {
  //注意一些UI细节
  var nick = prompt('Enter your nickname') //获取用户昵称
  var input = document.getElementById('input') //找出input表单元素
  input.focus() //设置键盘焦点
  //通过EventSource注册新消息的通知
  var chat = new EventSource('/chat')
  chat.onmessage = function(event) {
    //当捕获一条消息时
    var msg = event.data //从事件对象中取得文本数据
    var node = document.createTextNode(msg) //把它放入一个文本节点
    var div = document.createElement('div') //创建一个＜div＞
    div.appendChild(node) //将文本节点插入div中
    document.body.insertBefore(div, input) //将div插入input之前
    input.scrollIntoView() //保证input元素可见
  }
  //使用XMLHttpRequest把用户的消息发送给服务器
  input.onchange = function() {
    //用户完成输入
    var msg = nick + ':' + input.value //组合用户名和用户输入的信息
    var xhr = new XMLHttpRequest() //创建新的XHR
    xhr.open('POST', '/chat') //发送到/chat
    xhr.setRequestHeader(
      'Content-Type', //指明为普通的UTF-8文本
      'text/plain;charset=UTF-8'
    )
    xhr.send(msg) //发送消息
    input.value = '' //准备下次输入
  }
}
