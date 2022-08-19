<script>
  import { h } from 'vue';

  export default {
    render() {
      return (
        <div>
          <h2>Hello World</h2>
          {this.$slots.default ? this.$slots.default({name: "傻逼骑蕻隅"}) : 'Hello World again'}
        </div>
      )
    }
  }
</script>

<style scoped>

</style>