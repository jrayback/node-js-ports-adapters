const addProduct = require('../../../../application/use-cases/addProduct')
const getProducts = require('../../../../application/use-cases/getProducts')

exports.getAddProduct = (req, res, next) => {
  res.render('new-product')
}

exports.postAddProduct = (req, res, next) => {
  addProduct(req.body.title) // use dependency injection or similar here to pass in the right type of repo to use (e.g., inMemory)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  const products = getProducts()
  res.render('shop', { products })
}
