const productRepo = require('../../adapters/secondary/inMemoryDataRepo/productRepo')

module.exports = () => {
  return productRepo.getAll()
}
