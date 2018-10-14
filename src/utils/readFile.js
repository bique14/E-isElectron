const fs = require('fs-extra')
const path = require('path')

// const filePath = path.resolve(__dirname, '../Components/code/Read.js')
// const code = fs.readFileSync(filePath).toString()

// console.log(code)

var http = require('http')
var port = 3003
var serverUrl = 'localhost'

var server = http.createServer(function (req, res) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  const filePath = path.resolve(__dirname, '../Components/code/Test.js')
  const code = fs.readFileSync(filePath).toString()
  res.end(code)
})

console.log('Listening at ' + serverUrl + ':' + port)
server.listen(port, serverUrl)