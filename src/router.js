// 路由组件抽离
// 1.安装路由 cnpm i vue-router -S
// 2.导入 vue-router 包
import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './subcom/Login.vue'
import register from './subcom/Register.vue'
// 4.创建路由对象
var router = new VueRouter({
    routes: [
        // account goodsList
        {
            path: '/account',
            component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register}
            ]
        },
        {path: '/goodslist', component: goodslist}

    ]
})
//把路由对象暴露出去
export default router