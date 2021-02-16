const express = require('express')

const home = express.Router()

home.get('/', require('./home/homepage'))
home.get('/main-article', require('./home/main-article'))
home.get('/articles', require('./home/article-detail'))
home.post('/subscribe', require('./home/subscribe'))
home.get('/collections', require('./home/collection'))
home.get('/collection-detail', require('./home/collection-detail'))

//将路由对象做为模块成员进行导出
module.exports = home
