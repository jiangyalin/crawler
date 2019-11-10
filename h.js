const {Builder, By, Key, until} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const _path = require('chromedriver').path
const path = require('path')
const fs = require('fs')

console.log('Options', Options)
console.log('_path', _path)
// const url = 'http://192.168.40.252/prd/T%E4%BA%91%E5%86%9C%E5%95%86%E7%89%88/T%E4%BA%91%E5%86%9C%E5%95%86%E7%89%88_v1.0_Bubbles/#g=1&p=%E7%94%B5%E5%95%86%E4%BA%A4%E6%98%93%E5%B7%A5%E5%85%B7%EF%BC%88done%EF%BC%89'
const url2 = 'http://ddmmcc.com/comic/1833738/'
const url = 'http://ddmmcc.com/app/v.aspx?t=http://ddmmcc.com/vols/22019_153068/'
async function example() {
    const driver = new Builder().forBrowser('chrome').build()
    const list = []
    try {
        await driver.get('http://www.baidu.com')
        await driver.sleep(5000)
        console.log('bbb')
        await driver.get(url)
        let a = 10000
        for (var j = 0; j < 1000; j++) {
            const text = await driver.findElement(By.css('.dv_pageindex')).getText()
            const size = Number(text.split(' ')[2])
            for (let i = 0; i < size; i++) {
                const src = await driver.findElement(By.css('.dv_img img')).getAttribute('src')
                list.push({
                    href: src,
                    name: a++
                })
                console.log('src', src)
                const js = 'document.querySelector(\'.cViewPChange1.cNext\').click()'
                if (i < size - 1) {
                    driver.executeScript(js)
                }
                await driver.sleep(200)
            }
            const js = 'document.querySelector(\'.cViewPChange1.cNextVol\').click()'
            driver.executeScript(js)
            await driver.sleep(1000)
        }
        fs.writeFileSync('./files/bookInfo.json', JSON.stringify({
            tips: '章节',
            node: list
        }))
        console.log('ccc')

    } finally {
        console.log('ddd')
        fs.writeFileSync('./files/bookInfo.json', JSON.stringify({
            tips: '章节',
            node: list
        }))
        // driver.quit()
    }
}

example()