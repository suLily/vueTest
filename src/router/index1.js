import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/xl/home'
import Content from '@/components/xl/content'
import About from '@/components/xl/about'
import Home1 from '@/components/xl/home1'
import Content1 from '@/components/xl/content1'
import One from '@/components/xl/one'
import Two from '@/components/xl/two'
import Three from '@/components/xl/three'
import Four from '@/components/xl/four'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/',
                    name: 'Home1',
                    component: Home1
                },
                /*{
                    path: '',
                    redirect:to=>{
                        return 'home'
                    }
                },*/
                {
                    path: '/one',
                    name: 'One',
                    component: One
                },
                {
                    path: '/two',
                    name: 'Two',
                    component: Two
                }

            ]
        },
        {
            path: '/content',
            name: 'Content',
            component: Content,
            children: [

                {
                    path: '/',
                    name: 'Content1',
                    component: Content1
                },
                {
                    path: '/three',
                    name: 'Three',
                    component: Three
                },
                {
                    path: '/four',
                    name: 'Four',
                    component: Four
                }

            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ],
    mode: 'history'
})
