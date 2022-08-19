// import _ from '../node_modules/lodash-es/lodash.default.js';
import _ from 'lodash-es'; // 有了vite就简略些，而且没有那么多依赖要加载
import { createApp } from 'vue';
import { sum } from './js/math';
import mul from './ts/mul';
import App from './vue/App.vue';

import "./css/style.css";
import "./css/title.less";

console.log("Hello World!");
console.log(sum(1, 2));
console.log(mul(5, 2));

console.log(_.join(['Another', 'module', 'loaded!'], '-'));

const titleEl = document.createElement('div');
titleEl.className = 'title';
titleEl.innerHTML = 'Hello Vite!';
document.body.appendChild(titleEl);

const app = createApp(App);
app.mount('#app');