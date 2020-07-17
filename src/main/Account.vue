<template>
    <div>
        <h1>account 组件</h1>
        <mt-button type="primary" @click="getHttp">primary</mt-button>
        <router-link to="/account/login">login</router-link>
        <router-link to="/account/register">register</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    // MintUI Js的组件必须要先导入 才能使用
    // 导入 Toast
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {}
        },
        methods: {
            getHttp() {
                //模拟加载过程
                let instance = this.show();
                setTimeout(() => {
                    //加载完成关闭2
                    instance.close();
                }, 3000)
            },
            show() {
                // Toast('点击了按钮');
                return Toast({
                    message: '提示',
                    position: 'bottom',
                    duration: -1, //设置显示时间ms -1 不消失
                    iconClass: 'glyphicon glyphicon-heart',// 设置图标、
                    className: 'myToast', //自定义toast样式
                });
            }
        }
    }
</script>

<style scoped lang="scss"> /*scoped 设置作用域 只应用于组件内部属性（包括子组件） 不书写会应用于所有父级元素*/
/*普通的 style 标签只支持普通的样式，想要启用 scss 或 less ,需要为 style 元素， 设置 lang 属性*/
body {
    div {
        font-style: italic;
    }
}

</style>