<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">app button</button>

     <h2>{{globalMsg}}</h2>
  </div>
</template>

<script>
  // 注意这里是导入里面的一个属性，因此要加花括号
  import { demoMixin } from './mixins/demoMixin.js'
  
  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: "你好，世界"
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
