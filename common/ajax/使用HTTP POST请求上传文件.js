whenReady(function() {
  //当文档准备就绪时运行
  var elts = document.getElementsByTagName('input') //所有的input元素
  for (var i = 0; i < elts.length; i++) {
    //遍历它们
    var input = elts[i]
    if (input.type !== 'file') continue //跳过所有非文件上传元素
    var url = input.getAttribute('data-uploadto') //获取上传URL
    if (!url) continue //跳过任何没有URL的元素
    input.addEventListener(
      'change',
      function() {
        //当用户选择文件时
        var file = this.files[0] //假设单个文件选择
        if (!file) return //如果没有文件，不做任何事情
        var xhr = new XMLHttpRequest() //创建新请求
        xhr.open('POST', url) //向这个URL发送POST请求
        xhr.send(file) //把文件作为主体发送
      },
      false
    )
  }
})
