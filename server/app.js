const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors') 

app.use(bodyParser.json({ limit:'100mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit:'100mb' }))
app.use('/uploads', express.static(__dirname + '/uploads'))
// app.set('secret', '221jsfasfcfdsklfj1')

// app.use(session({ secret: 'taozhongxiao111' }))
app.use(cors({  
  origin:['http://localhost:8080'],
  methods:['GET','POST','PUT'],
  alloweHeaders:['Content-Type', 'Authorization']
}))

// app.use(cors())

require('./model/connect')

const home = require('./route/home')
const admin = require('./route/admin')

// 设置跨域和相应数据格式
// app.all('', function(req, res, next) {
//   // res.header('Access-Control-Allow-Origin', '');
//   // res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
//   // res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   res.setHeader("Access-Control-Allow-Origin", '*');
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
//   res.setHeader("Access-Control-Max-Age", "3600");
//   res.setHeader("Access-Control-Allow-Headers", "x-requested-with, Authorization, token, content-type"); //这里要加上content-type 
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });

// app.use('/admin', require('./middleware/loginGuard'))

// 为路由匹配请求路径
app.use('/', home)
app.use('/admin', admin)

// 错误处理中间件
// parse将字符串转为对象类型
// app.use((err, req, res, next) => {
//   const result = JSON.parse(err)
//   res.redirect(result.path + '?message=' + result.message)
// })

app.listen(8888)
console.log('服务器启动成功')
