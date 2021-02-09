const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let pagesize = req.query.pagesize
  let mainArticles = await Article.find({ featured: true })
    .limit(pagesize * 1)
  // 渲染用户列表模块
  // 将页面重定向到用户列表页面
  res
    .send({
      meta: { status: 200 },
      data: { mainArticles, message: '获取主文章成功' }
    })
}