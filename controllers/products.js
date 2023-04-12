const Product = require('../models/product')

const products = []

exports.getAddProduct = (req, res, next) => {
  res.render('new-product')
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  products.push(product)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  res.render('shop', { products })
}
