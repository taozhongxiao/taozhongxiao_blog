const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  const id = req.query.id
  const featured = req.query.featured
  if (featured === 'true') {
    await Article.updateOne({ _id: id },{ $set: { featured: true } })
  } else {
    await Article.updateOne({ _id: id },{ $set: { featured: false } })
  }
  res
    .send({
      meta: { status: 200 },
      data: { message: '修改精选状态成功' }
    })
}