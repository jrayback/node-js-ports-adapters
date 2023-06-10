import Money from 'js-money'
import { getRandomImageUrl, getRandomPrice, getRandomDescription } from './lib/productFunctions'

export interface Product {
  title: string
  imageUrl: string
  price: Money
  description: string
}

export function ProductFactory (title: string, imageUrl?: string, price?: Money, description?: string): Product {
  const u = imageUrl ??= getRandomImageUrl()
  const p = price ??= getRandomPrice()
  const d = description ??= getRandomDescription()
  return {
    title,
    imageUrl: u,
    price: p,
    description: d
  }
}
