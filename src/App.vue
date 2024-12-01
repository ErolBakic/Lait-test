<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import FooterComponent from './components/Footer.vue';
</script>

<template>
  <div class="body">
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
  .body{
    background-color: $primary;
  }
</style>
