import Vue from 'vue'

import VueRouter from 'vue-router'
// 3.手动安装VueRouter
Vue.use(VueRouter)

// 全局导入所有的 Mint-UI 不推荐很多样式和组件都用不到 全局安装之后不要在按需导入直接使用
// 导入 Mint-UI
import MintUI from 'mint-ui'
//这里可以省略 node_modules 这一层目录 会自动寻找
import 'mint-ui/lib/style.css'
//将 MintUI 安装到 Vue 中
Vue.use(MintUI)

import app from './App.vue'

//导入自定义路由模块
import router from "./router.js";


var vw = new Vue({
    el: '#app',
    render: c => c(app),
    // 5.挂载路由对象
    router
})