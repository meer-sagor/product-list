<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IProduct } from '@/interface/Product'
import ProductItem from './components/ProductItem.vue'
import { getProducts } from './services/API/Product'
import Pagination from './components/Pagination.vue'

const products = ref<IProduct>()
onMounted(async () => {
  const response = await getProducts()
  products.value = response
})

const currentPage = ref(1)

const onClickHandler = async (page: number) => {
  const nextLimit = products.value?.limit as number
  let initSkipValue: number = page * nextLimit
  const skipValue = initSkipValue - nextLimit
  const response = await getProducts({ limit: nextLimit, skip: skipValue })
  products.value = response
}
</script>

<template>
  <section class="mt-16">
    <div class="container mx-auto px-3 sm:px-0">
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
          :totalItems="products?.total"
          :itemsPerPage="products?.limit"
          :maxPagesShown="products?.limit"
          @click="onClickHandler"
          v-model="currentPage"
        />
      </div>
    </div>
  </section>
</template>
