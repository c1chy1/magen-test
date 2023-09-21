<template>

  <div>
    <select class="border-2 border-black" v-model="selectedCategory">
      <option v-for="category in categories" :key="category.uid" :value="category">
        {{ category.name}}
      </option>
    </select>
    <ShopProduct :products="products"/>
  </div>
</template>

<script  setup lang="ts">
import {useCategories} from "~/composables/useCategories";
import {CategoryFilterInput, ProductInterface, Product} from "~/types/types";
const categories = computed(() => {
  return useCategories().products.value
})

let selectedCategory = ref()

useNuxtApp().hook('apollo:error', (error) => {
  console.error(error)
})

let products = ref([] as Array<Product> )


onMounted(()=> {
  selectedCategory.value =  categories.value.map(
      category => ({
        uid: category.uid ,
        name: category.name,
        products: []
      }))
})

const CategoryFilterInput : CategoryFilterInput = {

  category_uid : {

    in: selectedCategory.value

  }

}
watch(selectedCategory,
    value => {
      selectedCategory.value = value
      products = selectedCategory.value?.products

    }
)
await useCategories().fetchByCategories(CategoryFilterInput)


</script>
<style scoped>

</style>