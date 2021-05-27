// 基于axios请求模块

import axois from 'axios'

// 创建一个axios实例，说白了就是复制一个axios
// 我们通过这个实例去发起请求，把需要的配置给这个实例处理
const request = axois.create({
    //请求的基础路径
    baseURL:'http://api-toutiao-web.itheima.net'
}) 
// 请求拦截器
// 响应拦截器
// 导出请求
export default request


//谁使用谁就就加载这个request模块