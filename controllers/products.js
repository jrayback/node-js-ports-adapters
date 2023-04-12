const path = require('path')

const getRandomImageUrl = require('../util/imageHelpers')
const rootDir = require('../util/path')

const products = []

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'new-product.html'))
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
