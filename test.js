const {Builder, By, Key, until} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const path = require('chromedriver').path

console.log('Options', Options)
console.log('path', path)
// const url = 'http://192.168.40.252/prd/T%E4%BA%91%E5%86%9C%E5%95%86%E7%89%88/T%E4%BA%91%E5%86%9C%E5%95%86%E7%89%88_v1.0_Bubbles/#g=1&p=%E7%94%B5%E5%95%86%E4%BA%A4%E6%98%93%E5%B7%A5%E5%85%B7%EF%BC%88done%EF%BC%89'
const url = 'http://preconsole.71360.com/home/index'
async function example() {
  let driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get(url)
    // const a = await driver.findElement(By.id('app')).getText()
    // console.log('aa', a)
    const name = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(1) .el-input__inner')).sendKeys('yfbcsniya3')
    const pwd = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(2) .el-input__inner')).sendKeys('zhendao123@123')
    const btn = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(3) button')).click()
    console.log('btn', btn)
  } finally {
    // driver.quit()
  }
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