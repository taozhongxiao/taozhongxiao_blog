const { Subscriber } = require('../../model/subscriber')

module.exports = async (req, res, next) => {
  await Subscriber.create(req.body)
  // 将页面重定向到用户列表页面
  res
    .send({
      meta: { status: 200 },
      data: { message: '订阅成功' }
    })
}