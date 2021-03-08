const fs = require('fs')
const path = require('path')

module.exports = async (req, res, next) => {
  let url = req.body.url
  let filename = req.body.filepath
  fs.unlinkSync(path.join('./', url, '/', filename))
  res.
    send({
      meta: { status: 200 },
      data: { message: '删除照片成功' }
    })
}