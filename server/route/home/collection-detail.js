const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let id = req.query['0']
  const collection = await Article.find({ _id: id })
  res
    .send({
      meta: { status: 200 },
      data: { content: collection , message: '获取文章成功' }
    }) 
}