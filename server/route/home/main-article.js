const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let pagesize = req.query.pagesize
  let page = req.query.pagenum
  let featured = req.query.featured
  let cate = req.query.cate
  let start = (page - 1) * pagesize
  let count, total, homeArticles
  if (cate) {
    count = await Article.countDocuments({ $and:[{ featured: featured }, {  cate: cate }, { class: 'article' }] })
    total = Math.ceil(count / pagesize)
    homeArticles = await Article.find({ $and:[{ featured: featured }, {  cate: cate }, { class: 'article' }] })
      .limit(pagesize * 1)
      .skip(start)
  } else {
    count = await Article.countDocuments({ $and:[{ featured: featured }, { class: 'article' }] })
    total = Math.ceil(count / pagesize)
    homeArticles = await Article.find({ $and:[{ featured: featured }, { class: 'article' }] })
      .limit(pagesize * 1)
      .skip(start)
      .sort({date: 'descending'})
  }
  // 渲染用户列表模块
  // 将页面重定向到用户列表页面
  res
    .send({
      meta: { status: 200 },
      data: { homeArticles, total, message: '获取主文章成功' }
    })
}