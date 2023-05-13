#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const addProduct = require('../../../ports/addProduct')
const getProducts = require('../../../ports/getProducts')
const productRepo = require('../../secondary/fileSystemDataRepo/productRepo')

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
