<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="ul" name="siri" :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
      <li v-for="(item, index) in showNames" :key="item" class="item" :data-index="index">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        names: ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"],
        keyword: "",
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1);
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.height = 0;
        // el.style.translateX = 100;
      },
      enter(el, done) {
        gsap.to(el, {
          opacity: 1,
          height: "1.5em",
          delay: el.dataset.index * 0.5,
          translateX: 0,
          onComplete: done,
        })
      },
      leave(el, done) {
        gsap.to(el, {
          opacity: 0,
          height: 0,
          translateX: 110,
          delay: el.dataset.index * 0.5,
          onComplete: done,
        })

      }
    }
  }
</script>

<style scoped>
  .siri-enter-from, .siri-leave-to {
    opacity: 0;
  }
  .siri-enter-active, .siri-leave-active {
    transition: all 0.5s;
  }
</style>