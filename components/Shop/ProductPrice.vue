<template>

    <h2 class="text-xs py-4">{{ price }} $</h2>

</template>

<script setup lang="ts">
 defineProps<{
  price: number;

}>();


</script>
