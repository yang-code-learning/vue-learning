<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <button @click="increment">{{state.count}}</button>
  </div>
</template>

<script>
  import { reactive } from 'vue';

  export default {
    props: {
      message: {
        type: String,
        required: true,
        default: '傻逼，骑蕻隅'
      }
    },
    setup() {
      const state = reactive({
        count: 100
      });

      const increment = () => {
        console.log("increment activated");
        state.count++;
      }

      return {
        title: '骑蕻隅，臭傻逼',
        state,
        increment
      }
    }
  }
</script>

<style scoped>

</style>