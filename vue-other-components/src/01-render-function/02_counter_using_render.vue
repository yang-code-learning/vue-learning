<script>
  import { h, ref } from 'vue';

  export default {
    // data() {
    //   return {
    //     counter: 0,
    //   }
    // },
    setup() {
      const counter = ref(0);

      return {
        counter,
      }
    },
    render() {
      return h("div", {class: "app"}, [
        h("h2", null, `当前计数：${this.counter}`),
        h("button", {
          onClick: () => this.counter++
        }, "+1"),
        h("button", {
          onClick: () => this.counter--
        }, "-1")
      ])
    }
  }
</script>

<style scoped>

</style>