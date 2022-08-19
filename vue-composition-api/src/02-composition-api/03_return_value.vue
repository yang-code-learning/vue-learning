<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <!-- 只有展示，没有响应式 -->
    <button @click="increment">{{count}}</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
        default: '傻逼，骑蕻隅'
      }
    },
    // 返回值作用
    setup() {
      let count = 100;

      const increment = () => {
        console.log("increment activated");
        count++;
      }

      return {
        title: '骑蕻隅，臭傻逼',
        count,
        increment
      }
    }
  }
</script>

<style scoped>

</style>