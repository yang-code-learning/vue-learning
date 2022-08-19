<template>
  <div>
    <!-- <h2>{{info.name}} - {{info.age}}</h2> -->
    <h2>{{info}}</h2>
    <h2>{{shallowInfo}}</h2>
    <button @click="changeInfo">修改信息</button>
  </div>
</template>

<script>
  import { ref, shallowRef, triggerRef } from 'vue';

  export default {
    setup() {
      const info = ref({name: 'John Doe', age: 30});
      // 1. 浅层引用
      const shallowInfo = shallowRef({name: 'John Doe'});

      const changeInfo = () => {
        // info.value.name = 'James'
        shallowInfo.value.name = 'James';
        triggerRef(shallowInfo); // 强制触发变更
      };

      return {
        info,
        shallowInfo,
        changeInfo
      }
    },

    
  }
</script>

<style scoped>

</style>