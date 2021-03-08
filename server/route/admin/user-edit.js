// 引入用户集合的构造函数
const { User, encrypt, validateUser } = require('../../model/user')

module.exports = async (req, res, next) => {
  try {
    await validateUser(req.body)
  } catch (e) {
    return res.redirect(`http://localhost:8080/admin/users?message=验证失败`);
  }
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    // 重定向回用户添加页面
    return res.redirect(`http://localhost:8080/admin/users?message=邮箱地址已经被占用`);
  }
  // 对密码进行加密处理
  req.body.password = encrypt(req.body.password, 'ABGHNJHGSHUYG12')
  // 将用户信息添加到数据库中
  await User.create(req.body)
  // 将页面重定向到用户列表页面
  res.status('201').send({meta: { status: 201 }, message: '添加成功'})
}
