<template>
  <div>
    <!-- <h2>{{info.name}} - {{info.age}}</h2> -->
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeAge">+</button>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue';

  export default {
    setup() {
      const info = reactive({name: '张三', age: 18});
      
      // 解构：这里不加refs相当于赋值，因此没有响应式效果
      // 1. toRefs: 将所有对象转换为响应式对象，建立链接
      // const { name, age } = toRefs(info);

      // 2. toRef：对其一做转换，注意只有一个对象不用加花括号
      let { name } = info;
      let age = toRef(info, 'age');
      
      const changeAge = () => {
        // info.age++;
        age.value++;
      };

      return {
        // info,
        name, 
        age,
        changeAge
      }
    },

    
  }
</script>

<style scoped>

</style>