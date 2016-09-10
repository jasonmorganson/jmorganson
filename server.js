const Koa = require('koa')
const serve = require('koa-static')
const server = new Koa()

server.use(serve('./build'))
server.use(serve('./files'))

server.listen(80)

