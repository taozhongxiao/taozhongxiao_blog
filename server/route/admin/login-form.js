const { User, encrypt } = require('../../model/user')

const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const { email, password } = req.body
  const encpassword = encrypt(password, 'ABGHNJHGSHUYG12')
  if (email.trim().length == 0 || password.trim().length == 0) {
    return res
      .status(400)
      .send({
        meta: { status: 400, message: '登录失败，请输入邮件或密码' },
        data: {}
      })
  }
  let user = await User.findOne({ email })
  if (user) {
    if (encpassword == user.password) {
      const token = jwt.sign({ id: user._id }, '221jsfasfcfdsklfj1')
      res
        .status(200)
        .send({
          meta: { status: 200, message: '登录成功' },
          data: { username: user.username, token: token }
        })
    } else {
      return res
        .status(400)
        .send({
          meta: { status: 400, message: '登录失败' },
          data: {}
        })
    }
  } else {
    return res
      .status(400)
      .send({
        meta: { status: 400, message: '登录失败' },
        data: {}
      })
  }
}
