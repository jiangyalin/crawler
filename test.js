const {Builder, By, Key, until} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const _path = require('chromedriver').path
const path = require('path')
const fs = require('fs')

console.log('Options', Options)
console.log('_path', _path)
const url = 'http://preconsole.71360.com/home/index'
async function example() {
  const driver = new Builder().forBrowser('chrome').build()
  try {
    await driver.get(url)
    const name = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(1) .el-input__inner')).sendKeys('yfbcsniya3')
    const pwd = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(2) .el-input__inner')).sendKeys('zhendao123@123')
    const btn = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(3) button')).getAttribute('type')
    const js = 'const demo = document.getElementById(\'app\')\n' +
      '    console.log(\'demo\', demo)\n' +
      '    return demo'

    const res = await driver.executeScript(js)

    console.log('res', res)

    console.log('btn', btn)
    const fileName = path.join(__dirname, './save/aaa.jpg')
    fs.writeFileSync(fileName, await driver.takeScreenshot(), 'base64')
  } finally {
    driver.quit()
  }
}

example()