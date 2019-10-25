const {Builder, By, Key, until} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const path = require('chromedriver').path

console.log('Options', Options)
console.log('path', path)
const url = 'https://manga.bilibili.com/mc25717/272407?from=manga_detail'
async function example() {
  const driver = new Builder().forBrowser('chrome').build()
  try {
    await driver.get(url)
    for (let i = 0; i < 20; i++) {
      await driver.findElement(By.css('.secondary-image')).click()
    }
  } finally {
    // driver.quit()
  }
}

example()