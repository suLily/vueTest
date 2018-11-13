<template>
    <div class="wrapper">
        <app-header></app-header>
        <app-nav></app-nav>
        <!--<router-view></router-view>-->
        <app-content></app-content>
        <app-footer></app-footer>
    </div>
</template>



<script>
    import Header from '../view/header.vue'
    import Content from '../view/content.vue'
    import Footer from '../view/footer.vue'

    export default {
        name: 'app',
        data () {
            return {}
        },
        components: { // 局部注册组件这里，可能会定义多个组件，所以component这个单词加上"s"
            'app-header': Header,
            'app-content': Content,
            'app-footer': Footer,
            'app-nav': Nav

        }
    }
</script>
