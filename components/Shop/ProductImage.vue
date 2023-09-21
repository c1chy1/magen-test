<template>



    <img :src="url" class=" h-full" :alt="alt">



</template>

<script setup lang="ts">
 defineProps<{
  url: string;
  alt?:string
}>();


</script>
