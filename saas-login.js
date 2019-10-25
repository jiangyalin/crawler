const {Builder, By, Key, until} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const path = require('chromedriver').path

console.log('Options', Options)
console.log('path', path)
const url = 'http://localhost:8080'
async function example() {
  const driver = new Builder().forBrowser('chrome').build()
  try {
    await driver.get(url)
    // const name = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(1) .el-input__inner')).sendKeys('yfbcsniya3')
    // const pwd = await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(2) .el-input__inner')).sendKeys('zhendao123@123')
    const btn = await driver.findElement(By.css('#app #app_child_frame .left_sidebar .left_sidebar_btn')).click()
    await driver.findElement(By.css('#app #app_child_frame .left_sidebar .left_sidebar_dialog .frame #tab-web')).click()
    await driver.findElement(By.css('#app #app_child_frame .left_sidebar .left_sidebar_dialog .frame .el-tabs__content #pane-web #pages_manege div:nth-of-type(2)')).click()
    await driver.navigate().to("http://localhost:8080")
    await driver.get(url)
    // driver.switchTo().defaultContent();

//     切换到某个frame：
//
// driver.switchTo().frame("leftFrame");
//
//     从一个frame切换到另一个frame：
//
// driver.switchTo().frame("mainFrame");
//
//     切换到某个window：
//
// driver.switchTo().window("windowName")
    // driver.switchTo().window('windowName')
    // driver.switchTo().frame('frameName')
    // const save = await driver
    // console.log('btn', save)


    // await driver.get(url2)
  } finally {
    // driver.quit()
  }
}

example()