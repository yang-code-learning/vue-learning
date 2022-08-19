<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <i>默认元素</i>
    </slot>
    <slot></slot> <!-- 多个插槽就会有把传入的重复多次 -->
    <h2>组件结束</h2>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>