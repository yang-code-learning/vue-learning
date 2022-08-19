<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
    <transition name="zly" mode="out-in" appear>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition> 
  </div>
</template>

<script>
  import Home from './pages/Home.vue';
  import About from './pages/About.vue';

  export default {
    components: {
      Home,
      About
    },
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
  .app {
    width: 200px;
    margin: 0 auto;
  }
  .title {
    display: inline-block;
  }
  .zly-enter-from, .zly-leave-to {
    opacity: 0;
  }
  .zly-enter-active, .zly-leave-active {
    transition: opacity 1s ease;
  }
  .zly-enter-active {
    animation: bounce 1s ease;
  }
   .zly-leave-active {
    animation: bounce 1s ease reverse;
   }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>