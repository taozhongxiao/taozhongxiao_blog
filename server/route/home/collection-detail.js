const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let id = req.query['0']
  console.log(id)
  const collection = await Article.find({ _id: id })
    // .writeHead(200, { 'content-type': 'text/html' })
  res
    .send({
      meta: { status: 200 },
      data: { content: collection , message: '获取文章成功' }
    }) 
}