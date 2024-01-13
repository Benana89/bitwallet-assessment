<template>
  <div>
    <h3>Question 3:</h3>
    <p>
      Optimize the rendering performance of a list component with thousands of
      data items using virtual scrolling.
    </p>
    <h3>Answer:</h3>
    <p>
      Implemented virtual scrolling using
      <a href="https://vueuse.org/core/useVirtualList/">useVirtualList</a> from
      VueUse
    </p>

    <listComponent></listComponent>
  </div>
</template>

<script setup lang="ts">
import listComponent from "../components/ListComponent.vue";
</script>

<style scoped></style>
