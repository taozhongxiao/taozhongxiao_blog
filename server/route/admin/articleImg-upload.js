const multer = require('multer')
const fs = require('fs')

module.exports = async (req, res, next) => {
  let date = new Date()
  let year = date.getFullYear()
  let month = (date.getMonth() + 1).toString().padStart(2, '0')
  let day = date.getDate()
  let dir = 'uploads/img/' + year + month + day
  res.send(dir)
}
