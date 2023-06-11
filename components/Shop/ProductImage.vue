<template>



    <img :src="url" class="object-fill" :alt="alt">



</template>

<script setup lang="ts">
 defineProps<{
  url: string;
  alt:string
}>();


</script>
