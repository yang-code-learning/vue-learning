import { createApp } from 'vue'
import App from './15-v-model/App.vue'


const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')
