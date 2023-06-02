import { Product } from '../../../domain/product'
import { ProductRepository } from '../../../ports/secondary/productRepository'

const products: Product[] = []

export const InMemoryProductRepository: ProductRepository = {
  save: (p: Product): void => {
    products.push(p)
  },
  getProducts: (callback: (products: Product[]) => void): void => {
    callback(products)
  }
}
