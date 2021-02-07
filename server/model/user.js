const mongoose = require('mongoose')

const CryptoJS = require('crypto-js')

const Joi = require('joi')

const encrypt = function (word, keyStr) {
  keyStr = keyStr ? keyStr : 'ABGHNJHGSHUYG12'
  let key = CryptoJS.enc.Utf8.parse(keyStr)
  let srcs = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

const decrypt = function (word, keyStr) {
  keyStr = keyStr ? keyStr : 'ABGHNJHGSHUYG12'
  let key = CryptoJS.enc.Utf8.parse(keyStr)
  let decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  role: {
    // admin 超级管理员
    // normal 普通用户
    type: String,
    required: true
  },
  // 0启用
  state: {
    default: 0,
    type: Number
  }
})

// 创建集合
const User = mongoose.model('User', userSchema)

// async function createUser () {
// 	const salt = await bcrypt.genSalt(10);
// 	const pass = await bcrypt.hash('123456', salt);
// 	const user = await User.create({
// 		username: 'iteheima',
// 		email: 'itheima@itcast.cn',
// 		password: pass,
// 		role: 'admin',
// 		state: 0
// 	});
// }

// createUser();

// 验证用户信息
const validateUser = user => {
  // 定义对象的验证规则
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(12)
      .required()
      .error(new Error('用户名不符合验证规则')),
    email: Joi.string()
      .email()
      .required()
      .error(new Error('邮箱格式不符合要求')),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,15}$/)
      .required()
      .error(new Error('密码格式不符合要求')),
    mobile: Joi.string()
      .regex(
        /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      )
      .required()
      .error(new Error('电话号码格式不符合要求')),
    role: Joi.string()
      .valid('normal', 'admin')
      .required()
      .error(new Error('角色值非法')),
    state: Joi.number()
      .valid(0, 1)
      .required()
      .error(new Error('状态值非法'))
  })
  // 实施验证
  return schema.validate(user)
}

// const pass = encrypt('erictao', 'ABGHNJHGSHUYG12')
// User.create({
//   username: 'eric.tao',
//   email: 'taozhongxiao@199.com',
//   password: 'passpass',
//   mobile: '18201720582',
//   role: 'admin',
//   state: 0
// })

// const pass = encrypt('tzx123456', 'ABGHNJHGSHUYG12')
// User.create({
//   username: 'tzx',
//   email: 'taozhongxiao1996@gmail.com',
//   password: pass,
//   role: 'admin',
//   state: 0
// })
module.exports = {
  User,
  encrypt,
  validateUser
}
