const { Cate } = require('../../model/cate')

module.exports = async (req, res, next) => {
  const cates = await Cate.find({})
  res.
    send({
      meta: { status: 200 },
      data: { cates, message: '分类获取成功' }
    })
}