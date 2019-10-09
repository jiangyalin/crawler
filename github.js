const page = require('webpage').create()
page.open('http://github.com/', () => {
  page.render('github.png')
  phantom.exit()
})
