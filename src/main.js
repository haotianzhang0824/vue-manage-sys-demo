// 导入vue基本类
import { createApp } from 'vue';
import App from './App.vue';
// 导入vue-router
import router from './router';
// 导入element plus和相关内容（来自于element-plus官网全局配置）
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// element plus图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// 导入axios
import axios from 'axios';

// axios默认值配置。
// 创建一个默认 Axios 实例
const instance = axios.create({
  baseURL: 'https://localhost:80/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 配置app
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 设置全局配置
app.config.globalProperties.$axios = instance;
// 挂载app
app.mount('#app')


