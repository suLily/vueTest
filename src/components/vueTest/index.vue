<template>
    <div>
        <aside>
            <ul class="aside-nav">
                <li v-for="(item,index) in array" :key="index" >
                    <router-link v-bind:to="item.url">
                        {{item.title}}
                    </router-link>
                </li>
               <!-- <router-link v-for="(item,index) in array" :key="index" v-bind:to="item.url" tag="li">
                    <a href="item.url">aaaaa{{item.title}}</a>
                </router-link>-->
            </ul>
        </aside>
        <article>
            <router-view></router-view>
        </article>
    </div>
</template>

<script>
    export default {
        name: "aside-nav",
        data() {
            return {
                array: [
                    {
                        title:'项目1111',
                        url:'/index/link1'
                    },
                    {
                        title:'项目2222',
                        url:'/index/link2'
                    },
                    {
                        title:'项目3333',
                        url:'/index/link3'
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>


<style>
    aside {
        width: 200px;
        line-height: 36px;
        font-size: 16px;
        padding: 20px;
        border: 1px solid #ccc;
        float: left;
    }
    article {
        padding: 20px;
        margin-left: 220px;
        background-color: #f5f5f5;
        font-size: 14px;
        line-height: 28px;
    }
    .active{
        color: blue !important;
    }
    .active1{
        color: red !important;
    }

    .router-link-exact-active {
        color: blue !important;
    }
    .router-link-active{
        color: red !important;
    }
</style>
