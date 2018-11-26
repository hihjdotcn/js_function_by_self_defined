var tree = {}
tree.decorate = function () {
  alert('Make sure the tree won\'t fall')
}

tree.getDecorator = function(deco) {
  tree[deco].prototype = this
  return new tree[deco]
}

tree.RedBalls = function() {
  this.decorate = function() {
    this.RedBalls.prototype.decorate()
    alert('Put on some red balls')
  }
}

tree.BlueBalls = function() {
  this.decorate = function() {
    this.BlueBalls.prototype.decorate()
    alert('Add blue balls')
  }
}

tree.Angle = function() {
  this.decorate = function() {
    this.Angle.prototype.decorate()
    alert('Add angle on the top')
  }
}

tree = tree.getDecorator('RedBalls')
tree = tree.getDecorator('BlueBalls')
tree = tree.getDecorator('Angle')

tree.decorate()
