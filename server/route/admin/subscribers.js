const { Subscriber } = require('../../model/subscriber')

module.exports = async (req, res, next) => {
  let page = req.query.pagenum
  let pagesize = req.query.pagesize
  let count = await Subscriber.countDocuments({})
  // 总页数
  let total = Math.ceil(count / pagesize)
  // 页码对应的数据查询开始位置
  let start = (page - 1) * pagesize
  // 将用户信息从数据库中查询出来
  let Subscribers = await Subscriber.find({})
    .limit(pagesize * 1)
    .skip(start)
    .sort([['date', 1]])
  // 渲染用户列表模块
  // 将页面重定向到用户列表页面
  res
    .send({
      meta: { status: 200 },
      data: { Subscribers, total, count, message: '获取订阅者信息成功' }
    })
}