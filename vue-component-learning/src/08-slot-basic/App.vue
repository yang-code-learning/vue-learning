<template>
  <div>
    <!-- 多元素 -->
    <my-slot-cpn>
      <my-button></my-button>
      <strong>第二个元素</strong>
    </my-slot-cpn>
    
    <!-- 默认测试 -->
    <my-slot-cpn></my-slot-cpn>
  </div>
</template>

<script>
  import MySlotCpn from './MySlotCpn.vue'
  import MyButton from './MyButton.vue'
  
  export default {
    components: {
      MySlotCpn,
      MyButton
    },
    data() {
      return {
        msg: 'Hello Vue!'
      }
    }  
  }
</script>

<style scoped>

</style>