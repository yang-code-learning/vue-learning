<template>
  <div>
    <button @click="toggle">显示/隐藏</button>
    <transition name="zly">
      <h2 v-if="isShow">臭傻逼，骑蕻㺄</h2>
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
  .zly-enter-from, .zly-leave-to {
    opacity: 0;
  }
  /* 这里可以删掉，因为默认就是1 */
  .zly-enter-to, .zly-leave-from {
    opacity: 1;
  }
  .zly-enter-active, .zly-leave-active {
    transition: opacity 2s ease;
  }
</style>