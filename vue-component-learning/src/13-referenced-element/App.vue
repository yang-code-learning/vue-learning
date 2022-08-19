<template>
  <div>
    <h2 ref="title">主页内容</h2>
    <nav-bar ref="navBar"></nav-bar>
    <button @click="btnClick">点击</button>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },
    methods: {
      btnClick() {
        console.log(this.$refs.title.innerText);
        console.log(this.$refs.navBar); // Proxy
        this.$refs.navBar.sayHello();
      }
    }
  }
</script>

<style scoped>

</style>