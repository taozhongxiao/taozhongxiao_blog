const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let id = req.query['0']
  const article = await Article.find({ $and: [{ _id: id }, { class: 'article' }] })
  res
    .send({
      meta: { status: 200 },
      data: { content: article , message: '获取文章成功' }
    }) 
}