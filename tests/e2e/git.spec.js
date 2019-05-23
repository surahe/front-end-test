const Rize = require('rize');
const rize = new Rize()

rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')  // 选择 input.header-search-input 元素
  .press('Enter')                        // 按 Enter 键
  .waitForNavigation()                   // 必须等待这次转向
  .assertSee('Node.js')                  // 页面是否包含指定文本
  // .saveScreenshot('', {path: 'docs/screenshot.png'})  // 保存截图（只能保存到根目录）
  .end()