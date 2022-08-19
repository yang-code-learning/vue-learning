<template>
  <div>
    <nav-bar :name="slotname">
      <template #left>
        <a href="#">Left</a>
      </template>
      <template #center>
        <a href="#">Center</a>
      </template>
      <template #right>
        <a href="#">Right</a>
      </template>
      <template #[slotname]>
        <a href="#">hhh</a>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        slotname: "zly",
      }
    }
  }
</script>

<style scoped>

</style>