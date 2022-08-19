<template>
  <div>
    <home></home>
    <button @click="btnClick">name add</button>
  </div>
</template>

<script>
  import { computed } from '@vue/reactivity';
  import Home from './Home.vue'

  export default {
    components: {
      Home
    },
    // 传递给子孙组件的数据，不推荐
    // provide: {
    //   name: 'Vue',
    //   age: 18
    // },

    // 传递模块内数据，写成函数
    provide() {
      return {
        name: 'Vue',
        age: 18,
        // length: this.name.length // 改变时不会同步模块内数据，本质传值
        length: computed(() => this.name.length) // 改成响应式，接受端要写上value
      }
    },
    data() {
      return {
        name: ["abc", "nlp"]
      }
    },
    methods: {
      btnClick() {
        this.name.push("def");
        console.log(this.name);
      }
    }
  }
</script>

<style scoped>

</style>