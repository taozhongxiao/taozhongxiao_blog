const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let id = req.query.aid
  const Articles = await Article.find({ _id: id })
  res
    .send({
      meta: { status: 200 },
      data: { Articles, message: '获取文章信息成功' }
    })
}