const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const admin = express.Router()

let upload = multer({
	storage: multer.diskStorage({
		//设置文件存储位置
		destination: function(req, file, cb) {
			let date = new Date()
			let year = date.getFullYear()
			let month = (date.getMonth() + 1).toString().padStart(2, '0')
			let day = date.getDate()
			let dir = "uploads/img/" + year + month + day
			//判断目录是否存在，没有则创建
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, {
					recursive: true
				})
			}
			//dir就是上传文件存放的目录
			cb(null, dir)
		},
    // 设置文件名称
    //  + '-' + Date.now()
		filename: function(req, file, cb) {
      let fileName = file.originalname
      // + path.extname(file.originalname)
			//fileName就是上传文件的文件名
			cb(null, fileName)
		}
	})
})

admin.post('/login', require('./admin/login-form'))
// admin.get('/users', require('./admin/user-edit'))
admin.get('/users', require('./admin/user'))
admin.post('/articleimg-upload', upload.single('file'), require('./admin/articleImg-upload'))
admin.post('/article-upload', require('./admin/article-upload'))
admin.post('/articleimg-delete', require('./admin/articleImg-delete'))
admin.get('/articles', require('./admin/article-list'))

module.exports = admin
