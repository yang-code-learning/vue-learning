<template>
  <div>
    <button @click="btnClick">Hyinput 点击</button>
    <h2>Hy Input message: {{modelValue}}</h2>

    <!-- 注意下面btnClick用作函数名绑定，和点击无关 -->
    <div>
      <span>方法一：</span>
      <input :value="modelValue" @input="textInput">
    </div>
    
    <!-- 还有一种用计算属性的方法 -->
    <div>
      <span>方法二：</span>
      <input v-model="value">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
      },
      title: {
        type: String
      }
    },
    computed: {
      value: {
        get() {
          return this.title;
        },
        set(title) {
          this.$emit('update:title', title);
        }
      }
    },

    emits: ['update:modelValue', 'update:title'],
    methods: {
      btnClick() {
        // Thit 就是触发事件后的返回值，自己设定的 
        this.$emit('update:modelValue', 'Hello Thit!');
      },
      textInput(event) {
        // 这里设置的返回input的值，原生组件要通过event.target.value获取
        this.$emit('update:modelValue', event.target.value);
      },
    }
  }
</script>

<style scoped>

</style>