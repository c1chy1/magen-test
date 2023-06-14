
<template>
  <div class="w-full mx-auto my-auto text-center px-6">
    <h1 class=" py-4">Categories</h1>

    <div >
      <select
          class="w-1/3  bg-gray-200 border-2 border-black dark:outline-0 rounded-lg px-4 py-2 text-xs lg:text-sm appearance-none"

          @change="test()"
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

          v-for="{name , uid} in categories"
          :key="uid"
          :id="uid"
          :data-index="uid"

      >


        {{uid}}
        {{category}}
        {{name}}
      </div>
    </div>
    <div class="flex">
      <article
          v-if="category"
          v-for="(product , uid) in productsArray"
          :key="uid"
          :id="uid"
          :data-index="uid"

      >

        <img class="w-48" :src="product.image.url">
        {{uid}}
        {{category}}

        <p class="text-xs"> {{product.name}}</p>

      </article>


    </div>
<button @click="showProducts">show</button>

  </div>
</template>

<script setup lang="ts">
import {useCategories} from "~/composables/useCategories";
import {useProduct} from '@/stores/product'
import {useProducts} from "~/composables/useProducts";
import {
  FilterEqualTypeInput
} from '@/types/types'
import {products} from "~/apollo/queries/products";



const category = ref('')


const {uid, categories, fetchCategories ,formattedCategories  } = useCategories()
await fetchCategories()



const test = ref([])


function showProducts() {



  console.log(test.value)

}




const state = reactive({

  eq : 'Mw=='
})


/*category.value = 'MTU='*/

const products2 = ref([])

const FilterEqualTypeInput: FilterEqualTypeInput
    =   {
  in: ['1'],
  eq: category.value};



/*
function test() {


  FilterEqualTypeInput.eq = category.value


}
*/


/*
const {result, error} = useQuery(products,{

  filter: {

    category_uid : FilterEqualTypeInput

  },

});

const productsArray =  result.value?.products.items

products2.value = productsArray
*/



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