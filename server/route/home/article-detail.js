const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let id = req.query['0']
  console.log(id)
  const article = await Article.find({ $and: [{ _id: id }, { class: 'article' }] })
    // .writeHead(200, { 'content-type': 'text/html' })
  res
    .send({
      meta: { status: 200 },
      data: { content: article , message: '获取文章成功' }
    }) 
}