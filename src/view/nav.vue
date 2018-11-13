<template>
    <nav class="app-nav wrap">
        <ul class="ul-father">
            <li class="li-father" :class="item.select ? 'select' : ''" v-for="(item,index) in arr" v-on:mouseover="item.show = !item.show" :key="index"
                v-on:mouseout="item.show = ! item.show"><!-- v-bind:class="{bgchange: item.show}" -->
                <!-- 路由切换组件 -->
                <router-link v-bind:to="item.url"><!-- @click="selectFirstRouter(item.url)"-->
                    {{ item.title }}
                </router-link>
                <template v-if="item.value">
                    <ul class="ul-child" v-show="item.show">
                        <li class="li-child" v-for="(x,i) in item.value" :key="i" @click="selectrouter(x.url)">
                            <router-link v-bind:to="x.url">
                                {{ x.title }}
                            </router-link>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: "app-nav",
        data() {
            return {
                arr: [
                    {
                        select: true,
                        title: "首页",
                        value: [
                            {
                                title: '一',
                                url: 'One'
                            },
                            {
                                title: '二',
                                url: 'Two'
                            }
                        ],
                        url: "/",
                        show: false
                    },
                    {
                        select: false,
                        title: "新闻",
                        value: [
                            {
                                title: '三',
                                url: 'three'
                            },
                            {
                                title: '四',
                                url: 'four'
                            }
                        ],
                        url: "/content",
                        show: false
                    },
                    {
                        select: false,
                        title: "关于",
                        url: "/about"/*,
                        show: false*/
                    }
                ]
            }
        },
        methods: {
            selectrouter(url) {
                this.arr.forEach(item => {
                    item.select = false
                    item.value.forEach(inner => {
                        if (inner.url === url) {
                            item.select = true
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .app-nav {
        margin-bottom: 28px;
    }

    ul.ul-father {
        background: Lightgreen;
        margin: 0;
    }

    .li-father {
        position: relative;
        display: inline-block;
        width: 20%;
        margin: 0;
    }

    li a {
        display: block;
        padding: 5px 0;
        color: #333;
        text-decoration: none;
    }

    li a:hover, .bgchange > a {
        color: #fff;
        background: #222;
    }

    .ul-child {
        position: absolute;
        top: 28px;
        left: 0;
        z-index: 10;
        width: 100%;
        background: Lightgreen;
    }

    .select > a,
    .router-link-exact-active{
        font-weight: bold;
        color: blue !important;
    }
</style>