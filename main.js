// 拉取资源
const fs = require('fs')
const path = require('path')
const Crawler = require('crawler')
const config = require('./config')

let crawler = new Crawler({
  encoding: null,
  rateLimit: 100000,
  maxConnections: 10,
  headers: {
    'Accept-Language': 'zh-CN,zh;q=0.9',
    Cookie: '_uuid=5F08EF93-4115-FA40-C18D-83A97F14467692912infoc; buvid3=D7E25953-0789-4120-99A7-292246B9C71A190964infoc; LIVE_BUVID=AUTO3515698207959543; sid=9jejgwb1; DedeUserID=4694517; DedeUserID__ckMd5=5ccb4ac918cd16d3; SESSDATA=9a913e58%2C1572412805%2Ce1885791; bili_jct=14acea1afec7b175b4f5432a46f2d2d4; bp_t_offset_4694517=304832537879987642; CURRENT_FNVAL=16; msource=pc_web; deviceFingerprint=a1e7c047753c27f31e9ce609b25b0a98; from=pc'
  },
  callback: (err, res, done) => {
    console.log('done', done)
    console.log('res', res.body)
    if (err) console.log(err)
    if (!err) fs.createWriteStream(res.options.filename).write(res.body)
    done()
  }
})

const urls = []
config.url.forEach(data => {
  urls.push({
    uri: data,
    jQuery: true,

    callback: function (err, res, done) {
      fs.writeFileSync('./files/index.html', res.body)
      console.log('res', res.body)
      // console.log('done', done)
      if (err) console.log(err)
      if (!err) {
        const $ = res.$
        const img = []
        const imgLength = $('.main').find('.news').find('[type="image"]').length
        const title = $('.main').find('.tit1').text()
        for (let i = 0; i < imgLength; i++) {
          const index = 100 + i
          let src = $('.main').find('.news').find('[type="image"]')[i].attribs.src
          src = 'https' + src.substring(4)
          let img = {
            title: title,
            fileName: '' + index,
            url: src
          }
          img.push(img)
        }
        console.log('title', title)
        const myPath = path.resolve('./files') + '\\' + title
        console.log(img)

        let arr = []
        // 纪录图片资源信息
        img.forEach(data => {
          arr.push({
            uri: data.url,
            jQuery: true,

            callback: (err, res, done) => {
              if (err) console.log('err', err)
              if (!err) {
                // 生成图片文件
                fs.writeFileSync('./files/' + title + '/' + data.fileName + '.jpg', res.body)
                console.log('Saved.' + data.fileName)
              }
              done()
            }
          })
        })
        console.log('arr', arr)

        // 创建文件夹
        fs.exists(myPath, exists => {
          // 不存在文件夹
          if (!exists) fs.mkdirSync(myPath)
          crawler.queue(arr) // 请求资源
        })
      }
      done()
    }
  })
})
crawler.queue(urls)