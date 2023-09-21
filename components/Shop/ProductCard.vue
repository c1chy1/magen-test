<template>

  <h1 class="text-center py-4">PRODUCTS</h1>
  <div class="grid-cols-10 grid  ">


    <article class="flex flex-col justify-evenly text-center" :id="product.name" v-for="(product , index) in products">
      <ShopProductTitle :title="product.name"/>
      <ShopProductImage :url="product.image.url"
                        :alt="product.name"/>
<ProductPrice :price="product.price_range.maximum_price.final_price.value"></ProductPrice>
    </article>
  </div>
</template>


<script setup lang="ts">
import ProductPrice from "~/components/Shop/ProductPrice.vue";


const {products, fetchProducts} = useProducts()

await fetchProducts()


/*defineProps<{
  uid: string
}>()*/
</script>

