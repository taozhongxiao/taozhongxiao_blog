const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  console.log(req.body)
  if (req.body._id) {
  // const { cate, username, title, digest, content, mainImg, class, date } = req.body
    await Article.updateOne({ _id: req.body._id }, req.body, { upsert: true })
  } else {
    await Article.create(req.body)
  }
  res.status(200).send({meta: { status: 200 }, message: '发布文章成功'})
}