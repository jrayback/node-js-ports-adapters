#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const addProduct = require('../../../application/use-cases/addProduct')

yargs(hideBin(process.argv))
  .command('add-product [title]', 'Add a product', (yargs) => {
    return yargs
      .positional('title', {
        describe: 'Title of new product',
        default: ''
      })
  }, (argv) => {
    addProduct(argv.title)
  })
  .parse()
