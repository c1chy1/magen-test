

<template>


  <div class="w-full grid grid-cols-3 px-12">



<!--    <article class="py-6" v-for="product in products" :key="product.id">
      <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">


&lt;!&ndash;
          <ShopProductTitle text-size="big" :title="product.title" text-direction="center"/>
&ndash;&gt;

          </div>

    </article>-->
  </div>
</template>
<script setup lang="ts">

import type {Product, FilterEqualTypeInput , ProductAttributeFilterInput} from "@/types/types";
import ProductName from "@/components/Shop/ProductName.vue";
import ProductImage from "@/components/Shop/ProductImage.vue";
import ProductPrice from "@/components/Shop/ProductPrice.vue";
import AddToCart from "@/components/Shop/AddToCart.vue";
import LoadingSpinner from "@/components/Shop/LoadingSpinner.vue";
import ProductDescription from "@/components/Shop/ProductDescription.vue";
import {categories} from "~/apollo/queries/categories";
import {products} from "@/apollo/queries/products";

/*const props = defineProps<{
  products: []
}>();*/


const FilterEqualTypeInput: FilterEqualTypeInput
    =   {
  in: ['1'],
  eq: 'Mw=='};

const filter = {category_uid : FilterEqualTypeInput}

console.log(filter + "filter")
console.log(FilterEqualTypeInput + "FilterEqualTypeInput")
console.log(FilterEqualTypeInput)

const variables = {filter}

const { data } = await useAsyncQuery(products , variables)


console.log(data.value)

/*const test = ref([])


test.value = data.value?.categories.items[0].children.map((i: any) => ({
  name : i.name,
  uid : i.uid

}))*/


</script>
