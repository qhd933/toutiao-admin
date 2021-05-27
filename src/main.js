import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式文件
import './styles/index.css'
//加载element 组件库
import ElementUI from 'element-ui';
//加载element 组件库 样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// 全局注册了element 组件库
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
