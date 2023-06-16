import type { IProductItem } from '@/interface/Product'

type ISort = {
  products: IProductItem[]
  column: 'price' | 'rating'
  type: 'asc' | 'dsc'
}

export const sorting = ({ column, products, type }: ISort):IProductItem[] => {
  if (column === 'price') {
    if (type === 'asc') {
      const ascendingOrder = products.sort((a, b) => a.price - b.price)
      return ascendingOrder
    }
    const descendingOrder = products.sort((a, b) => b.price - a.price)
    return descendingOrder
  } else {
    if (type === 'asc') {
      const ascendingOrder = products.sort((a, b) => a.rating - b.rating)
      return ascendingOrder
    }
    const descendingOrder = products.sort((a, b) => b.rating - a.rating)
    return descendingOrder
  }
}
