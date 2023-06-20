import { Request, Response } from 'express'

import { getProducts as getAllProducts } from '../../../../ports/primary/getProducts'
import { InMemoryProductRepository as productRepo } from '../../../secondary/productRepository/inMemoryProductRepository'

export const getProducts = (req: Request, res: Response): void => {
  getAllProducts(productRepo, (products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
}

export const getIndex = (req: Request, res: Response): void => {
  getAllProducts(productRepo, (products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    })
  })
}

export const getCart = (req: Request, res: Response): void => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  })
}

export const getCheckout = (req: Request, res: Response): void => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}
