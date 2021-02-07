const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 15
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
    type: String,
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
    default: 'normal',
    type: String,
    required: true
  }
})

// 创建集合
const Article = mongoose.model('Article', userSchema)

// Otherarticle.remove({
//     title: '中国的树是怎样被砍光的'
// }, function(error,doc){
//   console.log(doc)
// })

module.exports = {
  Article
}