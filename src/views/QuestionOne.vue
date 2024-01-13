<template>
  <div>
    <h3>Question 1:</h3>
    <p>
      Implement a custom React or Vue Hook that logs a message on component
      mount and unmount.
    </p>
    <h3>Answer:</h3>
    <p>
      Implemented composable function, it will trigger console log when
      onMounted and Unmounted.
    </p>
    <mountAndUnMountLogger></mountAndUnMountLogger>
  </div>
</template>

<script setup lang="ts">
import mountAndUnMountLogger from "../components/MountAndUnmountLogger.vue";
</script>

<style scoped></style>
