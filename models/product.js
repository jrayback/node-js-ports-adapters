const getRandomImageUrl = require('../util/imageHelpers')

module.exports = class Product {
  constructor (t) {
    this.title = t
    this.image = {
      url: getRandomImageUrl()
    }
  }
}
