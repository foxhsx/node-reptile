## 说明
用到的工具

- superagent
  - SuperAgent 是一个轻量的Ajax API
- turndown
 - 用来将 HTML 转为 Markdown
- fs
 - 用来将转换好的数据导出到本地

我们要爬一些数据的时候，是需要用户认证的，所以需要我们手动去设置 Header，这里需要将爬取网站的认证逻辑做下分析，一般是三种：
- cookie
- token
- cookie + token

当然也不排除有其他认证方式，多在请求头中研究一下即可。

示例中的方法里，解构出了 `content` 就直接用 `turndown` 转换了，这里是因为我本人在爬数据的时候，碰到的刚好是返回来的一串模板字符串，如果是其他的数据类型，可能需要使用其他方法或者工具，这里只供参考。
