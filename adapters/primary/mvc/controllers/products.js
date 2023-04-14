const Product = require('../../../../domain/product')
const productRepo = require('../../../secondary/inMemoryDataRepo/productRepo')

exports.getAddProduct = (req, res, next) => {
  res.render('new-product')
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  productRepo.save(product)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  const products = productRepo.getAll()
  res.render('shop', { products })
}
