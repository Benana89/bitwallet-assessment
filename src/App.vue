<template>
  <div>
    <ul>
      <li><button @click="goToView('')">Home</button></li>
      <li><button @click="goToView('one')">Question 1</button></li>
      <li><button @click="goToView('two')">Question 2</button></li>
      <li><button @click="goToView('three')">Question 3</button></li>
      <li><button @click="goToView('four')">Question 4</button></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goToView = (selectedPath: string) => {
  router.push({ path: "/" + selectedPath });
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
}
</style>
