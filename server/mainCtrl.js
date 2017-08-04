const app = require('./server')
,db = app.get('db')

module.exports = {

  getAllBlogs: (req, res) => {
    req.app.get('db').getAllBlogs().then( (err, response) => {
      (!err) ? res.send(response) : res.send(err)
    })
  },

  postBlogText: (req, res) => {
    req.app.get('db').postBlogText().then( (err, response) => {
      (!err) ? req.send(response) : res.send(err)
    })
  }

}
