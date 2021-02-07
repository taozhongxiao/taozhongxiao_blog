const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true
  },
  cate: {
    type: String,
    required: true
  }
})

const Cate = mongoose.model('Cate', userSchema)

module.exports = {
  Cate
}
