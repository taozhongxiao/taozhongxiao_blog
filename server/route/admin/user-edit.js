// const Joi = require('joi')

// 引入用户集合的构造函数
const { User, encrypt, validateUser } = require('../../model/user')

module.exports = async (req, res, next) => {
  console.log('sdsd')
  try {
    await validateUser(req.body)
  } catch (e) {
    // 验证没有通过
    // e.message
    // 重定向回用户添加页面
    return res.redirect(`http://localhost:8080/admin/users?message=验证失败`);
    // JSON.stringify() 将对象数据类型转换为字符串数据类型
    // return next(
    //   JSON.stringify({ path: '/admin/users', message: e.message })
    // )
  }
  // 根据邮箱地址查询用户是否存在
  let user = await User.findOne({ email: req.body.email })
  // 如果用户已经存在 邮箱地址已经被别人占用
  if (user) {
    // 重定向回用户添加页面
    return res.redirect(`http://localhost:8080/admin/users?message=邮箱地址已经被占用`);
    // return next(
    //   JSON.stringify({
    //     path: '/admin/users',
    //     message: '邮箱地址已经被占用'
    //   })
    // )
  }
  // 对密码进行加密处理
  req.body.password = encrypt(req.body.password, 'ABGHNJHGSHUYG12')
  // 将用户信息添加到数据库中
  await User.create(req.body)
  // 将页面重定向到用户列表页面
  res.status('201').send({meta: { status: 201 }, message: '添加成功'})
  console.log('final')
}
