<template>
  <div>
    HOME CONTENT: {{name}} + {{age}} + {{length}}
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "length"],
  }
</script>

<style scoped>

</style>