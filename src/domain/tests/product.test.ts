import { ProductFactory } from '../product'

test('dummy Product test', () => {
  const product = ProductFactory('new product')
  expect(product.title).toBe('new product')
})
