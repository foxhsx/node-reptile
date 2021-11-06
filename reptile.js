const superagent = require('superagent');
const TurndownService = require('turndown');
const fs = require('fs');

const turndownService = new TurndownService()
// 需要爬取的接口
let reptileUrl = '';
// cookie 和 token 
const cookie = '';
const authorization = ''
const Header = {
  authorization,
  cookie,
  "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36",
}

// 获取某个接口的返回值
function getData(reptileUrl, Header) {
  try {
    const { body } = await superagent.get(reptileUrl).set(Header);
    const { content } = body
    const markdown = turndownService.turndown(content);
    const title = 'demo' + new Date()
    fs.writeFile(`./notes/${title}.md`, markdown, function (err) {
      if(err) throw err;
      console.log(title + 'down')
    })
  } catch(e) {}
}

getData(reptileUrl, Header)
