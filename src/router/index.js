import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/home.vue')
Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: [
        {path: '/',name: 'home',component: home}
    ]
})
export default router
