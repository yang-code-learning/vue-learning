<script>
  import { h } from 'vue';

  export default {
    render() {
      return h('div', null, [
        h("h2", null, "Hello Shabi"),
        this.$slots.default ? this.$slots.default({name: "骑蕻隅"}) : h("span", null, "slot default")
      ])
    }
  }
</script>

<style scoped>

</style>