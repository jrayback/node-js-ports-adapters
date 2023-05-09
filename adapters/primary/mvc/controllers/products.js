const addProduct = require('../../../../application/use-cases/addProduct')
const getProducts = require('../../../../application/use-cases/getProducts')
const productRepo = require('../../../secondary/inMemoryDataRepo/productRepo')

exports.getAddProduct = (req, res, next) => {
  res.render('new-product')
}

exports.postAddProduct = (req, res, next) => {
  addProduct(productRepo, req.body.title)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  getProducts(productRepo, (products) => {
    res.render('shop', { products })
  })
}
