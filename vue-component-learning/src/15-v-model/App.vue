<template>
  <div>
    <!-- 原生使用v-model -->
    <!-- <input v-model="message"> -->

    <!-- 组件使用v-model -->
    <!-- <hy-input v-model="message"></hy-input> -->
    <!-- 等价于下面 -->
    <!-- <hy-input :value="message" @update:model-value="message = $event"></hy-input> -->
    
    <!-- 绑定多个v-model -->
    <hy-input v-model="message" v-model:title="title"></hy-input>
    <h2>App message: {{message}}-{{title}}</h2>
  </div>
</template>

<script>
  import HyInput from './HyInput.vue';

  export default {
    components: {
      HyInput
    },
    data() {
      return {
        message: 'Hello Vue!',
        title: 'fuck you!, qhy'
      }
    }
  }
</script>

<style scoped>

</style>