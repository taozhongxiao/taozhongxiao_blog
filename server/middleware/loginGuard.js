// const guard = (req, res, next) => {
//   if ( req.url != '/login' && !req.session.username) {
//     res.redirect(302, 'http://localhost:8080/admin/login')
//   } else {
//     // 将请求放行
//     next()
//   }
// }

// module.exports = guard