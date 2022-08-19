// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';
import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import App from './vue/App.vue'
import "./js/element";

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount('#app');

// 下面统一放到App.vue去，html模板里的template也是
// const app = createApp({
//   template: `<h2>Hello Vue!</h2>`,
//   data() {
//     return {
//       title: "Hello Vue!",
//     }
//   }
// });
// app.mount('#app');