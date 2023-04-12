const getRandomImageUrl = require('../util/imageHelpers')

const products = []

exports.getAddProduct = (req, res, next) => {
  res.render('new-product')
}

exports.postAddProduct = (req, res, next) => {
  const product = {
    title: req.body.title,
    image: {
      url: getRandomImageUrl()
    }
  }
  products.push(product)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  res.render('shop', { products })
}
