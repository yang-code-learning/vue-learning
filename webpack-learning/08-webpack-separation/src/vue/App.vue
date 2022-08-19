<template>
  <h2>Hello Vue!</h2>
  <h3>{{ title }}</h3>
  <hello-world></hello-world>
</template>

<script>
  import HelloWorld from './HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        title: 'Hello Vue!'
      }
    }
  }
</script>

<style>
  h2 {
    color: red;
  }
</style>