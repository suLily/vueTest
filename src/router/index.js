import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/vueTest/index'
import Content from '@/components/vueTest/content'
import HomeView1 from '@/components/vueTest/link1'
import HomeView2 from '@/components/vueTest/link2'
import HomeView3 from '@/components/vueTest/link3'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/index/link1',
                    name: 'HomeView1',
                    component: HomeView1
                },
                {
                    path: '/index/link2',
                    name: 'HomeView2',
                    component: HomeView2
                },
                {
                    path: '/index/link3',
                    name: 'HomeView3',
                    component: HomeView3
                }
            ]/*,
            redirect:'/link1'*/
        },
        {
            path: '/content',
            name: 'Content',
            component: Content
        },
        /*,
        {
            path: '/link1',
            name: 'HomeView1',
            component: HomeView1
        },
        {
            path: '/link2',
            name: 'HomeView2',
            component: HomeView2
        },
        {
            path: '/link3',
            name: 'HomeView3',
            component: HomeView3
        }*/
    ],
    mode: 'history'
})
