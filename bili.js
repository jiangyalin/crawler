const {Builder, By, Key, until} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path

console.log('Options', chrome.Options)
console.log('path', path)
const url = 'https://manga.bilibili.com/mc25717/272407?from=manga_detail'
async function example() {
  const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build() // 无头
  try {
    await driver.get(url)
    for (let i = 0; i < 20; i++) {
      await driver.findElement(By.css('.secondary-image')).click()
    }
  } finally {
    driver.quit()
  }
}

example()