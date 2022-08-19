// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';
import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import App from './vue/App.vue'

import "./js/element";
if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log("element update");
  })
}

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount('#app');

console.log("test watch");