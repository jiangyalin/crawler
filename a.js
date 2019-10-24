var test = function () {
  var g = this
  this.a = 'k'
  console.log('g', g.a)
}

test()