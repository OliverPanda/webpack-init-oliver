import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = r => require([], () => r(require('src/page/home')), 'home')

export default new VueRouter ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        }
    ]
})