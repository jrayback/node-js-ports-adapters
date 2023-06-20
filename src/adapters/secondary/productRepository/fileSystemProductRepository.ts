import fs from 'fs'
import path from 'path'
import { Product } from '../../../domain/product'
import { ProductRepository } from '../../../ports/secondary/productRepository'

const filePath = path.resolve(__dirname, '../../../../../data/fileData.json')
console.log(filePath)

export const FileSystemProductRepository: ProductRepository = {
  save: (product: Product) => {
    fs.readFile(filePath, (err, fileContent) => {
      if (err != null) {
        console.log(err)
      } else {
        const products = fileContent.length !== 0 ? JSON.parse(fileContent.toString()) : []
        products.push(product)
        const newFileContent = JSON.stringify(products)
        fs.writeFile(filePath, newFileContent, (err) => {
          if (err != null) {
            console.log(err)
          }
        })
      }
    })
  },
  getProducts: (callback: (products: Product[]) => void) => {
    fs.readFile(filePath, (err, fileContent) => {
      if (err != null) {
        console.log(err)
        const p: Product[] = []
        callback(p)
      } else {
        callback(JSON.parse(fileContent.toString()))
      }
    })
  }
}
