<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>
    <button @click="stepIncrement">incre from stepson</button>
  </div>
</template>

<script>
  import { inject } from 'vue';
  export default {
    setup() {
      const name = inject("name"); // 第二个参数可以是默认值
      const counter = inject("counter");

      const stepIncrement = () => counter.value++;

      return {
        name,
        counter,
        stepIncrement,
      }
    }
  }
</script>

<style scoped>

</style>