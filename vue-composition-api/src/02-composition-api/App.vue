<template>
  <div>
    <p>因为是composition api 针对组件 要显示效果修改Home.vue</p>
    <home message="hhh" id="aaa" class="bbb"></home>
  </div>
</template>

<script>
  import Home from './pages/Home.vue';

  export default {
    components: {
        Home,
    },
    
  }
</script>

<style scoped>

</style>