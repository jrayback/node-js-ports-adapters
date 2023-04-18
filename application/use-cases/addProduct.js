const Product = require('../../domain/product')
const productRepo = require('../../adapters/secondary/inMemoryDataRepo/productRepo')

module.exports = (title) => {
  const product = new Product(title)
  console.log('Adding product [' + product.title + ']')
  productRepo.save(product)
}
