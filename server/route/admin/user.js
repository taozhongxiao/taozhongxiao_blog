const { User, encrypt, validateUser } = require('../../model/user')
// const { jwt } = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  // let token = req.headers.authorization
  // if (token) {
  //   jwt.verify(token, 'taoblogzhongxiao', { expiresIn: 60*60*24 }, (err, decoded) => {
  //     if (err) {
  //       switch (err.name) {
  //         case 'JsonWebTokenError':
  //           res.status(403).send({ code: -1, msg: '无效的token' })
  //           break
  //         case 'TokenExpiredError':
  //           res.status(403).send({ code: -1, msg: 'token过期' })
  //           break
  //       }
  //     }
  //   })
  // }
  let page = req.query.pagenum
  let pagesize = req.query.pagesize
  let count = await User.countDocuments({})
  // 总页数
  let total = Math.ceil(count / pagesize)
  // 页码对应的数据查询开始位置
  let start = (page - 1) * pagesize
  // 将用户信息从数据库中查询出来
  let users = await User.find({})
    .limit(pagesize * 1)
    .skip(start)
  // 渲染用户列表模块
  // 将页面重定向到用户列表页面
  res
    .send({
      meta: { status: 200 },
      data: { users, total, message: '获取用户信息成功' }
    })
  console.log('final')
}
