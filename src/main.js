import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/styles/reset.css'
import './assets/styles/common.scss'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
