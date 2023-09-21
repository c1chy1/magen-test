<template>
  <div class=" grid grid-cols-3 gap-5 px-12 ">
    <article
        class="py-6   bg-white shadow-lg rounded-lg overflow-hidden "
        v-for="product in products" :key="product.uid">

      <div class="flex text-center">

        <div class="w-1/2">
          <ShopProductTitle text-size="big" :title="product.name" text-direction="center"/>
          <ShopProductPrice
              :price="product.price_range.maximum_price.regular_price.value"
              :currency="product.price_range.maximum_price.regular_price.currency"
          />
        </div>
        <div class="w-1/2">
          <ShopProductImage
              :url="product.image.url"
          />
        </div>
      </div>
    </article>
  </div>
</template>


<script setup lang="ts">

import {Product} from '@/types/types'


defineProps<{
  products: Product[]
}>();

</script>
<style scoped>

</style>