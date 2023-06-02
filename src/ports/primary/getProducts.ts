import { Product } from '../../domain/product'
import { ProductRepository } from '../secondary/productRepository'

export const getProducts = (repo: ProductRepository, callback: (products: Product[]) => void): void => {
  repo.getProducts(callback)
}
