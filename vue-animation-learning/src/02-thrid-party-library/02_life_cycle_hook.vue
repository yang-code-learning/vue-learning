<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="aferEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
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
      },
      // 钩子函数
      beforeEnter() {
        console.log('beforeEnter');
      },
      enter() {
        console.log('enter');
      },
      afterEnter() {
        console.log('afterEnter');
      },
      beforeLeave() {
        console.log('beforeLeave');
      },
      leave() {
        console.log('leave');
      },
      afterLeave() {
        console.log('afterLeave');
      }
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
</style>