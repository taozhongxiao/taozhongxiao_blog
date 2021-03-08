const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 25
  },
  digest: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 80
  },
  username: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  cate: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  mainImg: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  state: {
    // 1 显示
    default: 0,
    type: Number,
    required: true
  },
  featured: {
    // 非精选
    default: 0,
    type: Boolean,
    required: true
  }
})

// 创建集合
const Article = mongoose.model('Article', userSchema)

module.exports = {
  Article
}
