const fs = require('fs')
const path = require('path')

module.exports = async (req, res, next) => {
  // img_stream = ''
  //   file_obj = request.get_data(as_text=True)
  //   print (file_obj)
  //   if file_obj is None:
  //       # 表示没有发送文件
  //       return "未上传文件"
  //   # filename = secure_filename(file_obj.filename)
  //   file_path = os.path.join(ESRpath, file_obj)
  //   os.remove(file_path)
  let url = req.body.url
  let filename = req.body.filepath
  console.log('sdsf')
  fs.unlinkSync(path.join('./', url, '/', filename))
  res.
    send({
      meta: { status: 200 },
      data: { message: '删除照片成功' }
    })
  console.log('sssss')
}