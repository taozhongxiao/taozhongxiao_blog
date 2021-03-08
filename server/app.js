const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors') 
// const fs = require('fs')
// const https = require('https')

// const options = {
  
// }

app.use(bodyParser.json({ limit:'100mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit:'100mb' }))
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use(cors({  
  origin:['http://localhost:8080'],
  methods:['GET','POST','PUT','DELETE'],
  alloweHeaders:['Content-Type', 'Authorization']
}))

require('./model/connect')

const home = require('./route/home')
const admin = require('./route/admin')

// 为路由匹配请求路径
app.use('/', home)
app.use('/admin', admin)

app.listen(8888)
console.log('服务器启动成功')
