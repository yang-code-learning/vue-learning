<template>
  <div>

  </div>
</template>

<script>
  import emitter from './utils/eventbus.js'

  export default {
    created() {
      emitter.on("evt", (data) => {
        console.log(data);
      });
      // 监听所有事件
      emitter.on("*", (type, info) => {
        console.log("* listener:", type, info);
      });

      // 取消监听
      // emitter.all.clear() // 全部取消
      // function onFoo() {}
      // emitter.on("foo", onFoo); // 添加监听
      // emitter.off("foo", onFoo); // 取消单个监听
    }
  }
</script>

<style scoped>

</style>