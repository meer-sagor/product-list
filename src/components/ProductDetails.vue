<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { IProductItem } from '@/interface/Product'
type Props = {
  product: IProductItem
}
const props = defineProps<Props>()
const { product } = toRefs(props)
</script>

<template>
  <div class="border-2 border-blue-200 rounded-3xl mt-3 mb-10 px-3 py-4 bg-gradient-to-b from-slate-50  to-gray-200">
    <p
      class="w-1/2 border-b border-dotted border-spacing-8 border-gray-500 pb-8 text-md text-gray-700 mx-auto text-center"
    >
      View Details
    </p>
    <article class="text-md text-gray-700 space-y-3 mb-8 mt-3">
      <p>Name: {{ product.title }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Rating: {{ product.rating }}</p>
      <p>Description: {{ product.description }}</p>
    </article>
  </div>
</template>
