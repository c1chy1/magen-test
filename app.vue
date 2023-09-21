<template>
  <LayoutNavigation/>
<main>
  <NuxtPage/>


  </main>

</template>
<script setup lang="ts">







import {useCategories} from "~/composables/useCategories";

const props = defineProps({
  categoryId: { type: String, required: false },
  categorySlug: { type: String, required: false },
});





/*const products = computed(() => {
  return (

      useCategories().state.products
  );
});

console.log(products)*/





</script>