<template>
  <div>
    <!-- <h2 class="$attrs.class">{{ title }}</h2> -->
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    // props: ['title', 'content']
    inheritAttrs: false, // 关闭继承属性，不影响上面指定标签继承
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: "123"
      },
      counter: {
        type: Number
      },
      info: {
        type: Object,
        default() { // 一定要返回的函数值，不然使用引用类型，别人改收到改动
          return {name: "why"}
        }
      },
      messageInfo: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>