<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { IProductItem } from '@/interface/Product'
import ProductDetails from './ProductDetails.vue'
import { getProductsItem } from '@/services/API/Product'
type Props = {
  product: IProductItem
}
const props = defineProps<Props>()
const { product } = toRefs(props)
const selectedProductDetailsToggle = ref<boolean>(false)
const productItem = ref<IProductItem>()

const productDetailsShowHandler = (id: number) => {
  if (selectedProductDetailsToggle.value) {
    selectedProductDetailsToggle.value = !selectedProductDetailsToggle.value
  } else {
    getProductsItem(id).then((response) => {
      productItem.value = response
      selectedProductDetailsToggle.value = !selectedProductDetailsToggle.value
    })
  }
}
</script>

<template>
  <div>
    <div :class="`${selectedProductDetailsToggle && 'border-b'} border-gray-700 grid grid-cols-5`">
      <p class="text-lg text-gray-800 border-r border-gray-700 px-3 py-1">{{ product.id }}</p>
      <p class="text-lg text-gray-800 border-r border-gray-700 px-3 py-1">{{ product.title }}</p>
      <p class="text-lg text-gray-800 border-r border-gray-700 px-3 py-1">{{ product.rating }}</p>
      <p class="text-lg text-gray-800 border-r border-gray-700 px-3 py-1">{{ product.price }}</p>
      <div class="h-20 flex justify-center items-center px-3 py-1">
        <button
          @click="productDetailsShowHandler(product.id)"
          :class="`${
            selectedProductDetailsToggle ? 'bg-orange-400' : 'bg-green-600'
          } text-white rounded-md shadow-sm px-4 py-1.5 text-md hover:scale-110 font-bold duration-300`"
        >
          <span v-if="selectedProductDetailsToggle">Close</span>
          <span v-else>Show</span>
        </button>
      </div>
    </div>

    <div v-if="selectedProductDetailsToggle">
      <ProductDetails :product="(productItem as IProductItem)" />
    </div>
  </div>
</template>
