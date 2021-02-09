const { Cate } = require('../../model/cate')

module.exports = async (req, res, next) => {
  await Cate.remove({ cate: req.body.cate, class: req.body.class })
  const cates = await Cate.find({})
  res.
    send({
      meta: { status: 200 },
      data: { cates, message: '删除成功' }
    })
}