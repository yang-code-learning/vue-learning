<template>
  <h2>{{ title }}</h2>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        title: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>