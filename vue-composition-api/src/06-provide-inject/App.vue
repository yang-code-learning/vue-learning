<template>
  <div>
    <son></son>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { provide, ref, readonly } from 'vue';
  import Son from './Son.vue';

  export default {
    components: {
      Son,
    },
    
    setup() {
      const name = ref("傻逼骑蕻隅");
      let counter = ref(100);
      
      provide("name", readonly(name)); // key and value
      provide("counter", readonly(counter));

      const increment = () => counter.value++;

      return {
        increment,
      }
    }
  }
</script>

<style scoped>

</style>