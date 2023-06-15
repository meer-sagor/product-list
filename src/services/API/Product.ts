import type { IProduct, IProductQuery, IProductItem } from '@/interface/Product'
import axios from 'axios'
export const getProducts = async ({ limit, skip }: IProductQuery = { limit: 5 }) => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products`, {
      params: {
        limit,
        skip
      }
    })
    const response: IProduct = data
    return response
  } catch (error) {
    console.log('error')
  }
}

export const getProductsItem = async (id: number) => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
    const response: IProductItem = data
    return response
  } catch (error) {
    console.log('error')
  }
}
