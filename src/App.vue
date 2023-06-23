<template>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts">
import  { RouterView } from "vue-router"
</script>

<style scoped>
  main{
    background-color: black;
    margin: 0;
    min-height: 100vh;
  }
</style>
