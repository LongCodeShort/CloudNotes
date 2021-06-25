import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 添加 Element UI
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 添加公共样式
import './assets/styles/reset.css'
import './assets/styles/common.scss'
// 使用iconfont
import './assets/icon/iconfont/iconfont'
import SvgIcon from './assets/icon/iconfont/SvgIcon'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .component('svg-icon', SvgIcon)
  .mount('#app')
