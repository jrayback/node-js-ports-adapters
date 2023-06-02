import yargs, { Argv } from 'yargs'
import YargsPromise from 'yargs-promise'

import { addProduct } from '../../../ports/primary/addProduct'
import { getProducts } from '../../../ports/primary/getProducts'
import { FileSystemProductRepository as productRepo } from '../../secondary/productRepository/fileSystemProductRepository'

interface AddProductArgs extends Argv {
  title: string
}

const parser = new YargsPromise(yargs)

parser
  .command('add-product [title]', 'Add a product', (yargs: Argv) => {
    return yargs
      .positional('title', {
        describe: 'Title of new product',
        default: ''
      })
  }, (argv: AddProductArgs) => {
    addProduct(productRepo, argv.title)
    console.log('added ' + argv.title)
  })
  .command('get-products', 'Get all products', () => {}, (argv: Argv) => {
    console.log('getting products...')
    getProducts(productRepo, (products) => {
      console.log(products)
    })
  }).parse()
