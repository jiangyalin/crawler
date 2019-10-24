const {Builder, By, Key, until} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const path = require('chromedriver').path

console.log('Options', Options)
console.log('path', path)
function example() {
  let driver = new Builder().forBrowser('chrome').build();
  driver.get('http://www.github.com');
  // console.log('By', By.cla)
  driver.findElement(By.name('bodyd'))
  // console.log('findElement', driver.findElement(By.id('start-of-content')).getId())
  // try {
  //   driver.get('http://www.github.com');
  //   driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
  //   driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  // } finally {
  //   driver.quit();
  // }
}
example()