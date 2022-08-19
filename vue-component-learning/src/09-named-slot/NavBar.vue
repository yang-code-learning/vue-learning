<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex
  }
  .left, .right, .center {
    height: 35px;
    text-align: center;
  }
  .left, .right {
    width: 80px;
    background-color: aqua;
  }
  .center, .addition{
    flex: 1;
    background-color:greenyellow
  }
</style>