<template>
  <div>
    <h2>Nav Bar</h2>
    <button @click="getParentAndRoot">Get Parent And Root</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "message from nav bar"
      }
    },
    methods: {
      sayHello() {
        console.log(this.msg);
      },
      getParentAndRoot() {
        console.log(this.$parent);
      }
    }
  }
</script>

<style scoped>

</style>