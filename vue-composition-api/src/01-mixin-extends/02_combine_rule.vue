<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">app button</button>
  </div>
</template>

<script>
  export default {
    mixins: [demoMixin],
    data() {
      return {
        // message相同，使用这里的
        message: "你好，世界"
      }
    },
    methods: {
      
    },
    created() {
      // created相同，都有
      console.log("app created");
    }
  }
</script>

<style>

</style>
