<template>
  <div @click="divClick">
    <h2>Home</h2>
    <span>{{name}}-{{age}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      age: {
        type: Number,
        default: 0
      },
    },
    emit: ['homeClick'],
    methods: {
      divClick() {
        this.$emit('homeClick');
      }
    }
  }
</script>

<style scoped>

</style>