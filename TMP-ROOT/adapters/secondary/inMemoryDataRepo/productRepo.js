const products = []

exports.save = (p) => {
  products.push(p)
}

exports.getAll = (callback) => {
  callback(products)
}
