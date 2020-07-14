import Vue from 'vue'

import app from './App.vue'

import VueRouter from 'vue-router'

// 3.手动安装VueRouter
Vue.use(VueRouter)

//导入自定义路由模块
import router from "./router.js";

var vw = new Vue({
    el: '#app',
    render: c => c(app),
    // 5.挂载路由对象
    router
})