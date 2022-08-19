<template>
  <div>
    <button @click="btnClick">transfer</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus.js'

  export default {
    methods: {
      btnClick() {
        console.log("点击二儿子");
        emitter.emit('evt', {from: '二儿子', to: '大孙子'}); // evt为推送的事件名
      }
    }
  }
</script>

<style scoped>

</style>