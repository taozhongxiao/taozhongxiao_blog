const multer = require('multer')
const fs = require('fs')

module.exports = async (req, res, next) => {
  let date = new Date()
  let year = date.getFullYear()
  let month = (date.getMonth() + 1).toString().padStart(2, '0')
  let day = date.getDate()
  let dir = 'uploads/img/' + year + month + day
  // let files = req.files
  // let file = files[0]
  // let fileInfo = {}
  // // let path = 'public/image/' + Date.now().toString() + '_' + file.originalname
  // // fs.renameSync('./public/image/' + file.filename, path)
  // //获取文件基本信息
  // fileInfo.type = file.mimetype
  // fileInfo.name = file.originalname
  // fileInfo.size = file.size
  // fileInfo.path = path
  // res.json({
  //   code: 200,
  //   msg: 'OK',
  //   data: fileInfo
  // })
  console.log('上传已收到')
  res.send(dir)
}