import express from 'express'
import { getAddProduct, postAddProduct } from '../controllers/products'

const router = express.Router()

router.get('/new-product', getAddProduct)
router.post('/add-product', postAddProduct)

export default router
