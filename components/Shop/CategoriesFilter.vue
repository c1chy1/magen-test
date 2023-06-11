
<template>
  <div class="w-1/3 mx-auto my-auto">
    <h1 class="text-center py-4">Categories</h1>
  <select class="w-full  bg-gray-200 border-2 border-black dark:outline-0 rounded-lg px-4 py-2 text-xs lg:text-sm appearance-none"
          v-model="category">
    <option value="">None</option>

    <option
        v-for="{name , uid} in categories"
        :value="uid"
        :id="uid"
        :key="uid"
    >
      {{name}}
      {{ uid}}
    </option>
  </select>


<div

    v-for="{name , uid} in products"
    :key="uid"
    :id="uid"
    :data-index="uid"

>

  {{uid}}
{{category}}
  {{name}}
</div>





  </div>
</template>

<script setup lang="ts">
import {useCategories} from "~/composables/useCategories";

import {useProducts} from "~/composables/useProducts";
import {
  FilterEqualTypeInput
} from '@/types/types'
import {products} from "~/apollo/queries/products";



const category = ref('MzA=')



const { categories, fetchCategories ,formattedCategories  } = useCategories()
await fetchCategories()


console.log(categories)


/*category.value = 'MTU='*/


const FilterEqualTypeInput: FilterEqualTypeInput
    =   {
  in: ['1'],
  eq: category.value};


console.log(FilterEqualTypeInput)

const {result, error} = useQuery(products,{

  filter: {

    category_uid : FilterEqualTypeInput

  },

});




watch(FilterEqualTypeInput, async () => {

  console.log(FilterEqualTypeInput)

  await fetchCategories()

})

watch(category, async () => {

  console.log(FilterEqualTypeInput)


  await fetchCategories()

})


</script>
<style scoped>

</style>