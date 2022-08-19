<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="updateState">修改数值</button>
  </div>
</template>

<script>
  import { reactive, ref, readonly } from 'vue';

  export default {
    props: {
      message: {
        type: String,
        required: true,
        default: '傻逼，骑蕻隅'
      }
    },
    setup() {
      // 1. 普通对象
      const info1 = {name: '张三'};
      const readonlyInfo1 = readonly(info1);

      // 2. 响应式对象
      const info2 = reactive({name: '王五'});
      const info3 = ref({name: '赵六'});
      const readonlyInfo2 = readonly(info2);
      const readonlyInfo3 = readonly(info3);


      // 执行下面的就会警告
      const updateState = () => {
        readonlyInfo1.name = '李四'
        readonlyInfo2.name = '李四'
        readonlyInfo3.name = '李四'
      }

      return {
        updateState
      }
    }
  }
</script>

<style scoped>

</style>