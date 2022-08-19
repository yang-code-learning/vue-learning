<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model.number="num">
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
  export default {
    // emits: ["add", "sub", "addN"], // 数组写法
    // 数组写法，用于参数验证
    emits: {
      add: null, // 不需要验证
      sub: null,
      addN: (payload) => {
        console.log(payload);
        // 验证部分
        if (payload > 10) {
          return true;
        }
        return false;
      }
    },
    data() {
      return {
        num: 1
      }
    },
    methods: {
       // 注册触发事件
      // 意思就是给父级组件一个add事件，@add这样，感觉就是就是给click附加一个add外壳
      // 方法具体实现还是在父级组件的methods里面实现的
      increment() {
        // console.log("+1");
        this.$emit("add");
      },
      decrement() {
        // console.log("-1");
        this.$emit("sub");
      },
      incrementN() {
        // console.log("+n");
        this.$emit("addN", this.num); // 绑定方法和发射参数
      }
    }
  }
</script>

<style scoped>

</style>