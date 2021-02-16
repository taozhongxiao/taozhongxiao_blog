const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let page = req.query.pagenum
  let pagesize = req.query.pagesize
  let count = await Article.countDocuments({})
  // 总页数
  let total = Math.ceil(count / pagesize)
  // 页码对应的数据查询开始位置
  let start = (page - 1) * pagesize
  // 将用户信息从数据库中查询出来
  let Articles = await Article.find({})
    .limit(pagesize * 1)
    .skip(start)
    .sort([['date', 1]])
  // 渲染用户列表模块
  // 将页面重定向到用户列表页面
  res
    .send({
      meta: { status: 200 },
      data: { Articles, total, count, message: '获取文章信息成功' }
    })
}