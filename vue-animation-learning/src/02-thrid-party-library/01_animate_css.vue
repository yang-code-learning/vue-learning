<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
    <transition enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__flipInY">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
  /* 下面两条如上加了动画class就没必要了 */
  /* .zly-enter-active {
    animation: bounceInUp 0.5s ease-in
  }
  .zly-leave-active {
    animation: bounceInUp 0.5s ease-in reverse
  } */
  .animate__flipInY {
    animation-direction: reverse;
  }
</style>