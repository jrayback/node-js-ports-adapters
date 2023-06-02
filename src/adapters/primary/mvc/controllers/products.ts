import { Request, Response } from 'express'

import { addProduct } from '../../../../ports/primary/addProduct'
import { getProducts } from '../../../../ports/primary/getProducts'
import { InMemoryProductRepository as productRepo } from '../../../../adapters/secondary/productRepository/inMemoryProductRepository'

export const getAddProduct = (req: Request, res: Response): void => {
  res.render('new-product')
}

export const postAddProduct = (req: Request, res: Response): void => {
  addProduct(productRepo, req.body.title)
  res.redirect('/')
}

export const getAllProducts = (req: Request, res: Response): void => {
  getProducts(productRepo, (products) => {
    res.render('shop', { products })
  })
}
