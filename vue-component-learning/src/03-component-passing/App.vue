<template>
  <div>
    <!-- 直接赋值-->
    <show-message title="呵呵呵" content="我是呵呵呵呵"></show-message>

    <!-- v-bind -->
    <show-message :title="title" :content="content"></show-message>

    <!-- 对象集合 -->
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message"></show-message>
    
    <!-- 多属性继承和多节点指定继承(命名反了) -->
    <show-message id="abc" class="why" v-bind="message"></show-message>
    <multi-root-element id="aaaa"></multi-root-element>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue';
  import MultiRootElement from './MultiRootElement.vue';

  export default {
    components: {
      ShowMessage,
      MultiRootElement
    },
    data() {
      return {
        title: "嘻嘻嘻",
        content: "我是嘻嘻嘻嘻",
        message: {
          title: "Hello",
          content: "你好"
        }
      }
    }
  }
</script>

<style scoped>

</style>