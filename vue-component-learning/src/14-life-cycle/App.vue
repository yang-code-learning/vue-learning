<template>
  <div>
    <button @click="unmount">卸载（不显示）</button>
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script>
  import Home from './Home.vue'
  export default {
    components: {
      Home
    },
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      unmount() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>

</style>