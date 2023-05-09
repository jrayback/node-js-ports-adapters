module.exports = (repo, callback) => {
  repo.getAll((products) => {
    callback(products)
  })
}
