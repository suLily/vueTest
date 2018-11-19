<template>
    <div class="wrapper" id="app">
        <app-home></app-home>
        <div class="wrap">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import Home from './view/home.vue'

    export default {
        name: 'app',
        data () {
            return {}
        },
        components: { // 局部注册组件这里，可能会定义多个组件，所以component这个单词加上"s"
            'app-home': Home
        }
    }
</script>

<style>
    @import 'assets/style/common.css';
</style>
