const { Article } = require('../../model/article')

module.exports = async (req, res, next) => {
  let time = req.query.time
  let cate = req.query.cate
  let collections
  if (time && cate) {
    collections = await Article.find({
      $and: [
        { date: { $gte: new Date(time, 1, 1), $lt: new Date(time, 12, 31) } },
        { cate: cate },
        { class: 'collection' }
      ]
    })
    res.send({
      meta: { status: 200 },
      data: { collections, message: '获取主文章成功' }
    })
  } else if (time) {
    collections = await Article.find({
      $and: [
        { date: { $gte: new Date(time, 1, 1), $lt: new Date(time, 12, 31) } },
        { class: 'collection' }
      ]
    })
    res.send({
      meta: { status: 200 },
      data: { collections, message: '获取主文章成功' }
    })
  } else if (cate) {
    collections = await Article.find({
      $and: [
        { cate: cate },
        { class: 'collection' }
      ]
    })
    res.send({
      meta: { status: 200 },
      data: { collections, message: '获取主文章成功' }
    })
  } else {
    collections = await Article.find({ class: 'collection' })
    res.send({
      meta: { status: 200 },
      data: { collections, message: '获取主文章成功' }
    })
  }
}
