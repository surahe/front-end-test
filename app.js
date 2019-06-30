var koa = require('koa')
var app = new koa()

app.use(async ctx => {
  ctx.body = {
    data: 'hello world'
  }
})

app.listen(4000)

module.exports = app
