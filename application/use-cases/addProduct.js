const Product = require('../../domain/product')

module.exports = (repo, title) => {
  const product = new Product(title)
  repo.save(product)
}
