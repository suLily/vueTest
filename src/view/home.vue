<template>
    <div class="header clearfix">
        <div class="wrap nav-box">
            <h1 class="logo-box">
                <img class="logo" src="../assets/images/logo.png" alt="">
            </h1>

            <ul class="nav clearfix">
                <li v-for="(item,index) in arr" :key="index">
                    <router-link v-bind:to="item.url" >
                        {{ item.title }}
                    </router-link>
                </li> <!--:class="{'router-link-exact-active': index}" @click.native="changeBgc(index)"-->
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app-nav",
        data() {
            return {
                arr: [
                    {
                        title:'首页',
                        url:'/index'
                    },
                    {
                        title:'内容',
                        url:'/content'
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>