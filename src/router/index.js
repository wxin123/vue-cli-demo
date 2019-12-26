import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: [
        {path: '/', name: 'index', component: () => import('../components/index.vue')},
        {path: '/home', name: 'home', component: () => import('../components/home.vue')},
        {path: '/index', name: 'index', component: () => import('../pages/index.vue'),
            children: [
                {path: 'type', name: 'type', component: () => import('../components/dictionary/type/index.vue')},
                {path: 'data', name: 'data', component: () => import('../components/dictionary/data/index.vue')},
            ]
        },
        {
            path: '/dictionary', name: 'dictionary',component: () => import('../components/dictionary/index.vue'),
            children: [
                {path: 'type', name: 'type', component: () => import('../components/dictionary/type/index.vue')},
                {path: 'data', name: 'data', component: () => import('../components/dictionary/data/index.vue')},
            ]
        },
    ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
    window.console.log(to)
    if (to.meta.title) {
      document.title = to.meta.title || ''
    }
    next()
  })
export default router
