<script>
  import HelloWorld from './HelloWorld.vue';

  export default {
    data() {
      return {
        message: 'Hello Vue!',
        counter: 0,
      }
    },
    render() {
      const increment = () => this.counter++;

      return (
        <div>
          <h1>Hello World, {this.message}</h1>
          <p>This is a simple example of a Vue.js component.</p>
          <button onClick={increment}>{this.counter}</button>
          <HelloWorld>
            {{default: props => <span>app to HelloWorld: {props.name}</span>}}
          </HelloWorld>
        </div>
      )
    }
  }
</script>

<style scoped>

</style>