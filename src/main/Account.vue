<template>
    <div>
        <h1>account 组件</h1>
        <mt-button type="primary" @click="show">primary</mt-button>
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
            show() {
                // Toast('点击了按钮');
                Toast({
                    message: '提示',
                    position: 'bottom',
                    duration: 5000,
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