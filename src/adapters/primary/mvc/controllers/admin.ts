import { Request, Response } from 'express'

import { addProduct } from '../../../../ports/primary/addProduct'
import { getProducts as getAllProducts } from '../../../../ports/primary/getProducts'
import { InMemoryProductRepository as productRepo } from '../../../secondary/productRepository/inMemoryProductRepository'

export const getAddProduct = (req: Request, res: Response): void => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

export const postAddProduct = (req: Request, res: Response): void => {
  addProduct(productRepo, req.body.title)
  res.redirect('/')
}

export const getProducts = (req: Request, res: Response): void => {
  getAllProducts(productRepo, (products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
}
