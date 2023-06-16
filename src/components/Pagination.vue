<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
type Props = {
  totalItems: number
  itemsPerPage: number
  maxPagesShown: number
}
const props = defineProps<Props>()
</script>

<template>
  <vue-awesome-paginate
    :total-items="props.totalItems"
    :items-per-page="props.itemsPerPage"
    :max-pages-shown="props.maxPagesShown"
  />
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 30px;
  width: 30px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #16a34a;
  border: 1px solid #16a34a;
  color: white;
}
.active-page:hover {
  background-color: #22c55e;
}

@media only screen and (min-width: 425px){
  .paginate-buttons {
  height: 40px;
  width: 40px;
}
}
</style>
