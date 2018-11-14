// 防止默认行为
var all_links = document.getElementsByTagName('a')
for (var i = 0; i<all_links.length; i++) {
  all_links[i].addEventListener('click', function(e) {
    if (!confirm('Are you sure you want to follow this link?')){
      e.preventDefault()
    }
  }, false)
}