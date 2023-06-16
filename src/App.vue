<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IProduct, IProductItem } from '@/interface/Product'
import type { IFilterItem } from '@/interface/filter'
import { EFilter } from '@/enum/filter'
import ProductItem from './components/ProductItem.vue'
import { getProducts } from './services/API/Product'
import Pagination from './components/Pagination.vue'
import { sorting } from '@/utility/Sorting'

const products = ref<IProduct>()
const currentPage = ref<number>(1)

const paginationPageChangeHandler = async () => {
  const nextLimit = products.value?.limit as number
  let initSkipValue: number = currentPage.value * nextLimit
  const skipValue = initSkipValue - nextLimit
  const response = await getProducts({ limit: nextLimit, skip: skipValue })
  products.value = response
}

const priceOption = ref<IFilterItem[]>([
  { label: 'Ascending', value: 1 },
  { label: 'Descending', value: 2 }
])
const ratingOption = ref<IFilterItem[]>([
  { label: 'Ascending', value: 1 },
  { label: 'Descending', value: 2 }
])

const priceOptionSelectOption = (selectedOption: IFilterItem) => {
  let filterValue: IProductItem[]
  if (selectedOption.value === EFilter.ASC) {
    filterValue = sorting({
      column: 'price',
      type: 'asc',
      products: products.value?.products as IProductItem[]
    })
  } else {
    filterValue = sorting({
      column: 'price',
      type: 'dsc',
      products: products.value?.products as IProductItem[]
    })
  }
  products.value!.products = filterValue
}
const ratingOptionSelectOption = (selectedOption: IFilterItem) => {
  let filterValue: IProductItem[]
  if (selectedOption.value === EFilter.ASC) {
    filterValue = sorting({
      column: 'rating',
      type: 'asc',
      products: products.value?.products as IProductItem[]
    })
  } else {
    filterValue = sorting({
      column: 'rating',
      type: 'dsc',
      products: products.value?.products as IProductItem[]
    })
  }
  products.value!.products = filterValue
}
onMounted(async () => {
  const response = await getProducts()
  products.value = response
})
</script>

<template>
  <section class="mt-16">
    <div class="container mx-auto px-3 sm:px-0">
      <div class="md:flex md:gap-5 md:justify-end md:space-y-0 space-y-4 mb-8">
        <div class="flex items-center gap-4">
          <p>Price</p>
          <v-select
            class="w-full md:w-[12rem]"
            placeholder="Filter"
            :options="priceOption"
            @option:selected="priceOptionSelectOption"
          />
        </div>
        <div class="flex items-center gap-4">
          <p>Rating</p>
          <v-select
            class="w-full md:w-[12rem]"
            placeholder="Filter"
            :options="ratingOption"
            @option:selected="ratingOptionSelectOption"
          />
        </div>
      </div>
      <div class="overflow-x-scroll lg:overflow-hidden pb-3">
        <ul class="border border-gray-700 w-[976px] lg:w-full">
          <li class="grid grid-cols-5">
            <p class="text-xl text-gray-800 font-bold border-r border-gray-700 px-3 py-1">SI</p>
            <p class="text-xl text-gray-800 font-bold border-r border-gray-700 px-3 py-1">Name</p>
            <p class="text-xl text-gray-800 font-bold border-r border-gray-700 px-3 py-1">Rating</p>
            <p class="text-xl text-gray-800 font-bold border-r border-gray-700 px-3 py-1">Price</p>
            <p class="text-xl text-gray-800 font-bold px-3 py-1 text-center">Action</p>
          </li>

          <li
            v-for="product in products?.products"
            :key="product.id"
            class="border-t border-gray-700"
          >
            <ProductItem :product="product" />
          </li>
        </ul>
      </div>
      <div class="text-center">
        <Pagination
          :totalItems="(products?.total as number)"
          :itemsPerPage="(products?.limit as number)"
          :maxPagesShown="(products?.limit as number)"
          @click="paginationPageChangeHandler"
          v-model="currentPage"
        />
      </div>
    </div>
  </section>
</template>
