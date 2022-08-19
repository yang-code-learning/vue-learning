<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="subNum">删除数字</button>
    
    <transition-group tag="p" name="siri">
      <span v-for="item in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        numCounter: 10,
      }
    },
    methods: {
      addNum() {
        // this.numbers.push(this.numCounter++);
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
      },
      subNum() {
        this.numbers.splice(this.randomIndex(), 1);
      },
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length);
      }
    }
  }
</script>

<style scoped>
  .item {
    margin-right: 10px;
    display: inline-block;
  }
  .siri-enter-from, .siri-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }

  .siri-enter-active, .siri-leave-active {
    transition: all 1s;
  }
</style>