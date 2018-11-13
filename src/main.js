import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueResource from 'vue-resource' // 从 node_modules 里面把 vue-resource 引入进了，同引入 vue-router 一个道理

Vue.config.productionTip = false
Vue.use(VueResource)

// 这样以后，就可以在任何组件页面中使用http了
/* eslint-disable no-new */
/*new Vue({
    el: '#app',
    router, // 引入 router
    template: '<App/>',
    render: h => h(App)  /!* !!!!!! *!/
})*/

new Vue({
    router, // 引入 router
    template: '<App/>',
    render: h => h(App),
}).$mount('#app')
