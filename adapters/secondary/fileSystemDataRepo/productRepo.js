const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.json')

exports.save = (product) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err && err.code !== 'ENOENT') {
      console.log(err)
    } else {
      const products = fileContent ?? false ? JSON.parse(fileContent) : []
      products.push(product)
      const newFileContent = JSON.stringify(products)
      fs.writeFile(filePath, newFileContent, (err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  })
}

exports.getAll = (callback) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      const p = []
      callback(p)
    } else {
      callback(JSON.parse(fileContent))
    }
  })
}
