var express = require('express')
var path = require('path')
var history = require('connect-history-api-fallback')
var app = express()
app.use(history({
    verbose: true
  }))
app.use('/', express.static(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
