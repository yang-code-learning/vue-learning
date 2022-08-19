<template>
  <div>
    <h2>{{basetitle}}</h2>
    <h2>{{content}}</h2>
  </div>
</template>

<script>
  import BasePage from './BasePage.vue'

  export default {
    extends: BasePage,
    data() {
      return  {
        content: "傻逼，骑蕻隅",
      }
    }
  }
</script>

<style scoped>

</style>