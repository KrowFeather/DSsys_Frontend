import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetyped from 'vue3typed'
const pinia = createPinia()
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.use(vuetyped)
app.use(router)
app.use(pinia)
app.mount('#app')