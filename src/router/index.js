import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/navTest/home'
import Content from '@/components/navTest/content'
import About from '@/components/navTest/about'
import Home1 from '@/components/navTest/home1'
import Content1 from '@/components/navTest/content1'
import One from '@/components/navTest/one'
import Two from '@/components/navTest/two'
import Three from '@/components/navTest/three'
import Four from '@/components/navTest/four'

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
