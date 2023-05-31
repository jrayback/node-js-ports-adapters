import Product from '../product'

test('dummy Product test', () => {
  const product = Product('new product')
  expect(product.title).toBe('new product')
})
