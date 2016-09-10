const Koa = require('koa')
const serve = require('koa-static')
const server = new Koa()

let port = process.env.PORT || 80

server.use(serve('./build'))
server.use(serve('./files'))

server.listen(port)

