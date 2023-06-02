import { ProductFactory } from '../../domain/product'
import { ProductRepository } from '../secondary/productRepository'

export const addProduct = (repo: ProductRepository, title: string): void => {
  const product = ProductFactory(title)
  repo.save(product)
}
