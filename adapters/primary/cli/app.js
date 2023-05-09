#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const addProduct = require('../../../application/use-cases/addProduct')
const getProducts = require('../../../application/use-cases/getProducts')
const productRepo = require('../../secondary/fileSystemDataRepo/productRepo')

// I'm pretty sure the problem is somewhere down here ... there's some sort of callback synchronization issue happening I think.
yargs(hideBin(process.argv))
  .command('add-product [title]', 'Add a product', (yargs) => {
    return yargs
      .positional('title', {
        describe: 'Title of new product',
        default: ''
      })
  }, (argv) => {
    addProduct(productRepo, argv.title)
    console.log('added ' + argv.title)
  })
  .command('get-products', 'Get all products', () => {}, (argv) => {
    console.log('getting products...')
    getProducts(productRepo, (products) => {
      console.log(products)
    })
  })
  .parse()
