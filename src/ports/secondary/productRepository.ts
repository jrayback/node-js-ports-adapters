import { Product } from '../../domain/product'

export interface ProductRepository {
  save: (p: Product) => void
  getProducts: (callback: (products: Product[]) => void) => void
}
