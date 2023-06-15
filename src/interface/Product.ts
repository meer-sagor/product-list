export interface IProductItem {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: 'Apple'
  category: string
  thumbnail: string
  images: string[]
}

export interface IProduct {
  products: IProductItem[]
  total: number
  skip: number
  limit: number
}

export interface IProductQuery {
  skip?: number
  limit?: number
}
