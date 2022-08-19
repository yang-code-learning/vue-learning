export const demoMixin = {
  data() {
    return {
      message: "Hello vue!"
    }
  },
  methods: {
    foo() {
      console.log("demo of mixin");
    }
  },
  created() {
    console.log("生命周期created from mixin")
  }
}