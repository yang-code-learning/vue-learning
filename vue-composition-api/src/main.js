import { createApp } from 'vue'
import App from './09-render-function/App.vue'

const app = createApp(App)

// 下为01的全局模板写法
// app.mixin({
//   data() {
//     return {
//       globalMsg: 'global msg',
//     }
//   },
//   methods: {

//   },
//   created() {
//     console.log("hello from main.js");
//   }
// })

app.mount('#app')
