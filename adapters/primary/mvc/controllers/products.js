const addProduct = require('../../../../application/use-cases/addProduct')
const getProducts = require('../../../../application/use-cases/getProducts')
const productRepo = require('../../../secondary/inMemoryDataRepo/productRepo')

exports.getAddProduct = (req, res, next) => {
  res.render('new-product')
}

exports.postAddProduct = (req, res, next) => {
  addProduct(productRepo, req.body.title) // use dependency injection or similar here to pass in the right type of repo to use (e.g., inMemory)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  getProducts(productRepo, (products) => { // <---------------I think it's correct to inject the correct adapter here
    console.log('from mvc controller, products are: ' + products)
    res.render('shop', { products })
  })
}
