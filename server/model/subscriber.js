const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fisrtname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

const Subscriber = mongoose.model('Subscriber', userSchema)

// Cate.create({
//   class: 'collection',
//   cate: 'photography'
// })
module.exports = {
  Subscriber
}
