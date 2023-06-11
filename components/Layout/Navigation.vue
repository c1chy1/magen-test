

<template>

  <div class="w-full">
    <h1 class="text-center py-4">CATEGORIES</h1>
<nav  class="flex justify-evenly w-full">



    <div :id="index"  v-for="(category , index) in categories">
      <p  >{{category.name}}</p>
    </div>

</nav>
  </div>
</template>



<script setup lang="ts">
import {useCategories} from "~/composables/useCategories";
const { categories, fetchCategories } = useCategories()

await fetchCategories()

</script>



<style scoped>

</style>