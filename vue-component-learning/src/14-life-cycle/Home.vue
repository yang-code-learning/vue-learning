<template>
  <div>
    <h2 ref="hmsg">{{msg}}</h2>
    <button @click="changeMsg">Just Click It</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello Vue!'
      }
    },
    methods: {
      changeMsg() {
        this.msg = 'Hello World!'
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUnmount() {
      console.log('beforeUnmount');
    },
    unmounted() {
      console.log('unmounted');
    },
    beforeUpdate() {
      console.log(this.$refs.hmsg.innerHTML);
      console.log('beforeUpdate');
    },
    updated() {
      console.log(this.$refs.hmsg.innerHTML);
      console.log('updated');
    },

  }
</script>

<style scoped>

</style>