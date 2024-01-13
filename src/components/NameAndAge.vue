<template>
  <div>
    <div>Name: {{ name }}</div>
    <div>Age: {{ age }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  age?: number;
}>();
</script>

<style scoped></style>
