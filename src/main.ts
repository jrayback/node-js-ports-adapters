import { ProductFactory } from './domain/product'

const product = ProductFactory('A Great New Product')

console.log(product.title)
