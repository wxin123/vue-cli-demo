import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/home.vue')
const dictionary = () => import('../components/dictionary/index.vue')
Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: [
        {path: '/',name: 'home',component: home},
        {path: '/dictionary',name: 'dictionary',component: dictionary},
    ]
})
export default router
