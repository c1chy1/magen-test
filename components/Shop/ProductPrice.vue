<template>

    <h2 class="text-base py-4">{{ price }} $</h2>

</template>

<script setup lang="ts">
 defineProps<{
  price: number;
  currency: string;

}>();


</script>
