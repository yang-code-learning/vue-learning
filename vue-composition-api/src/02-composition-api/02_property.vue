<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
        default: '傻逼，骑蕻隅'
      }
    },
    // 有哪些参数和返回值
    setup(props, context) {
      // 直接获取参数，不用this
      console.log(props.message);
      console.log(context.attrs.id, context.attrs.class);
      // 如果context那里写成{attrs, slots, emit}下面的所有context可不写
      console.log(context.slots);
      console.log(context.emit);
    }
  }
</script>

<style scoped>

</style>