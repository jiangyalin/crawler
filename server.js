const fs = require("fs");
const path = require('path');
const Crawler = require("crawler");

let crawler = new Crawler({
  encoding: null,
  maxConnections : 10,
  callback : function (error, res, done) {
    if(error){
      console.log(error);
    }else{
      fs.createWriteStream(res.options.filename).write(res.body);
    }
    done();
  }
});

crawler.queue([{
  uri: 'https://www.3344hq.com/tupianqu/katong/272532.html',
  jQuery: true,

  callback: function (error, res, done) {
    if(error){
      console.log(error);
    }else{
      let $ = res.$;
      let imgs = [];
      const imgsLength = $(".main").find(".news").find("[type='image']").length;
      const title = $('.main').find('.tit1').text();
      for (let i = 0; i < imgsLength; i++) {
        const index = 100 + i;
        let src = $(".main").find(".news").find("[type='image']")[i].attribs.src;
        src = 'https' + src.substring(4);
        let img = {
          title: title,
          fileName: '' + index,
          url: src
        };
        imgs.push(img);
      }
      const myPath = path.resolve('./files') + '\\' + title;

      console.log(imgs);
      let arr = [];
      // 纪录图片资源信息
      imgs.forEach(function (data, index) {
        let node = {
          uri: data.url,
          jQuery: true,

          callback: function (error, res, done) {
            if(error){
              console.log('err', error);
            }else{
              // 生成图片文件
              fs.writeFile('./files/' + title + '/' + data.fileName + '.jpg', res.body, function(err) {
                if (err) {
                  throw err;
                }
                console.log('Saved.' + data.fileName);
              });
            }
            done();
          }
        };
        arr.push(node);
      });
      console.log('arr',arr);

      // 创建文件夹
      fs.exists(myPath, function(exists){
        if (exists) {
          console.log('文件夹存在');
          crawler.queue(arr); // 请求资源
        } else {
          fs.mkdir(myPath, function(err){
            if (err) {
              console.error(err);
            }
            console.log('创建目录成功');
            crawler.queue(arr); // 请求资源
          });
        }
      });
    }
    done();
  }
}]);