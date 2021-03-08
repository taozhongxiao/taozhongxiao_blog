const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  await Article.remove({ _id: req.query.id });
  res.
    send({
      meta: { status: 200 },
      data: { emessage: '删除文章成功' }
    })
}