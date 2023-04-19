#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const addProduct = require('../../../application/use-cases/addProduct')
const getProducts = require('../../../application/use-cases/getProducts')

yargs(hideBin(process.argv))
  .command('add-product [title]', 'Add a product', (yargs) => {
    return yargs
      .positional('title', {
        describe: 'Title of new product',
        default: ''
      })
  }, (argv) => {
    addProduct(argv.title) // use dependency injection or similar here to pass in the right type of repo to use (e.g., fileBased)
  })
  .command('get-products', 'Get all products', () => {}, (argv) => {
    const producxts = getProducts()
    console.log(producxts)
  })
  .parse()
