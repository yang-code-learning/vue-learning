<template>
  <div class="app">
    <input type="number" step="100" v-model="count">
    
    <h2>当前计数：{{showCount}}</h2>
    <!-- 不用计算属性也行 -->
    <h2>当前计数：{{showNumber.toFixed(0)}}</h2>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        count: 0,
        showNumber: 0,
      }
    },
    computed: {
      showCount(){
        return this.showNumber.toFixed(0);
      }
    },
    watch: {
      count(newValue) {
        gsap.to(this, {
          duration: 1,
          showNumber: newValue,
        })
      }
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
</style>