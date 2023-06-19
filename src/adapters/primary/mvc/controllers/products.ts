import { Request, Response } from 'express'

import { addProduct } from '../../../../ports/primary/addProduct'
import { getProducts } from '../../../../ports/primary/getProducts'
import { InMemoryProductRepository as productRepo } from '../../../../adapters/secondary/productRepository/inMemoryProductRepository'

export const getAddProduct = (req: Request, res: Response): void => {
  res.render('add-product', {
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

export const getAllProducts = (req: Request, res: Response): void => {
  getProducts(productRepo, (products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  })
}
