<template>
  <div v-bind="containerProps" style="height: 500px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="height: 80px">
        <div>Index: {{ item.data.index }}</div>
        <div>Content: {{ item.data.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getItems from "../api/getItems.js";
import { ref } from "vue";
import { useVirtualList } from "@vueuse/core";

const posts = ref(getItems(100));

const { list, containerProps, wrapperProps } = useVirtualList(posts, {
  itemHeight: 80,
});
</script>

<style scoped></style>
