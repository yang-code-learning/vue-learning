<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
    </div>
    <transition @enter="enter"
                @leave="leave"
                :css="false">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition> 
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      enter(el, done) {
        console.log('enter');
        gsap.from(el, {
          scale: 0,
          x: 200,
          duration: 0.5,
          onComplete: done
        })
      },
      leave(el, done) {
        console.log('leave');
        gsap.to(el, {
          scale: 0,
          x: 200,
          duration: 0.5,
          onComplete: done
        });
      },
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
</style>