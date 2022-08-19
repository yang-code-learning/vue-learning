<template>
  <div>
    <hello-world message="傻逼骑蕻隅" @increment="getCounter"></hello-world>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HelloWorld from './HelloWorld.vue'

  const counter = ref(0);
  const increment = () => counter.value++;

  const getCounter = (payload) => {
    console.log(payload);
  }
</script>

<style scoped>

</style>