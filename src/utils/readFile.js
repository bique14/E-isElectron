const fs = require('fs-extra')
const path = require('path')

// var http = require('http')
// var port = 3003
// var serverUrl = 'localhost'

// var server = http.createServer(function (req, res) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   const filePath = path.resolve(__dirname, '../Components/code/Test.js')
//   const code = fs.readFileSync(filePath).toString()
//   res.end(code)
// })

// console.log('Listening at ' + serverUrl + ':' + port)
// server.listen(port, serverUrl)


var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const filePath = path.resolve(__dirname, '../Components/code/Test.js')
  const code = fs.readFileSync(filePath).toString()
  res.end(code)
})

app.post('/get-code', function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const r = req.body.pathToFile
  console.log('server[post] /get-code') 
  console.log(req.body, r) 

  const filePath = path.resolve(__dirname, `../Components/code/${r}`)
  const code = fs.readFileSync(filePath).toString()
  res.end(code)

})

app.listen(3003, function () {
  console.log('Example app listening on port 3003!')
})
