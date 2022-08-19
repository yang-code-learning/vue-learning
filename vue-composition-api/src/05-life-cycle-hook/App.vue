<template>
  <div>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>
  import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

  export default {
    setup() {
      const counter = ref(0);
      const increment = () => counter.value++;
      
      onMounted(() => {
        console.log("app mounted");
      })
      onUpdated(() => {
        console.log("app updated1");
      })
      onUpdated(() => {
        console.log("app updated2");
      })
      onUnmounted(() => {
        console.log("app unmounted");
      })
      
      return {
        counter,
        increment,
      }
    }
  }
</script>

<style scoped>

</style>