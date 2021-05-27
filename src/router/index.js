import Vue from 'vue'
import VueRouter from 'vue-router'
//在VueCIL创建目录中@表示src目录
//它是src目录的路径别名
//好处：它不受当时目录的影响
//建议：凡是需要用路径进行查找的都使用 @
import Login from '@/views/login/index'
Vue.use(VueRouter)

const routes = [
 {
   path:'/login',
   name:'login',
   Comment:Login
 }
]

const router = new VueRouter({
  routes
})

export default router
