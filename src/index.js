const port = 3000;
const http = require('http')
const app = require('./app')

var server = http.createServer(app)

server.listen(port)