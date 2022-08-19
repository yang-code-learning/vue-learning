<script>
  import { h, ref } from 'vue';
  import HelloWorld from './HelloWorld.vue';

  export default {
    render() {
      return h(HelloWorld, {}, {
        default: props => h("span", null, `app to HelloWorld: ${props.name}`)
      })
    }
  }
</script>

<style scoped>

</style>