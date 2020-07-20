<template>
    <div>
        <h1>main 组件</h1>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style scoped>

</style>