// 开启手机模式
// await driver.sendDevToolsCommand('Emulation.setDeviceMetricsOverride', {
//     mobile: true,
//     width: 412,
//     height: 732,
//     deviceScaleFactor: 2.625,
// })

// 截图
// const fileName = path.join(__dirname, './save/aaa.jpg')
// fs.writeFileSync(fileName, await driver.takeScreenshot(), 'base64')

// 获取自定义属性
// await btn.getAttribute('type')

// 获取元素填写表单
// await driver.findElement(By.css('#app .login .login-container .el-form .el-form-item:nth-of-type(1) .el-input__inner')).sendKeys('yfbcsniya3')

// 无头浏览器
// const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build()