<template>
  <h3>Question 2:</h3>
  <p>
    Write a generic TypeScript component that accepts name and age props, and
    displays the passed name and age.
  </p>

  <h3>Answer:</h3>
  <p>Allow entering of name and age and display below</p>

  <div>Name:</div>
  <input type="text" v-model="name" />

  <div>Age:</div>
  <input type="number" v-model="age" />

  <p>
    <h3>Component:</h3>
    <nameAndAge :name="name" :age="age"></nameAndAge>
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import nameAndAge from "../components/NameAndAge.vue";

const name = ref("Ben");
const age = ref(34);
</script>

<style scoped></style>
