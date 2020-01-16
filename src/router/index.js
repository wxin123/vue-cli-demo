import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: [
        {path: '/home', name: 'home', component: () => import('../components/home.vue')},
        {path: '/login', name: 'login', component: () => import('../pages/login.vue')},
        {path: '/', name: 'index', component: () => import('../pages/index.vue'),
            children: [
                {path: 'home', name: 'home', component: () => import('../pages/home.vue')},
                {path: 'dictionary', name: 'dictionary', component: () => import('../pages/dictionary/index.vue'),
                    children: [
                        {path: 'type', name: 'type', component: () => import('../pages/dictionary/type/index.vue')},
                        {path: 'data', name: 'data', component: () => import('../pages/dictionary/data/index.vue')}
                    ]
                },
                {path: 'echarts', name: 'echarts', component: () => import('../pages/echarts/index.vue'),
                    children: [
                        {path: 'bar', name: 'bar', component: () => import('../pages/echarts/bar/index.vue')},
                    ]
                },
                {path: 'entertainment', name: 'entertainment', component: () => import('../pages/entertainment/index.vue'),
                    children: [
                        {path: 'music', name: 'music', component: () => import('../pages/entertainment/music/index.vue')}
                    ]
                },
                {path: 'system', name: 'system', component: () => import('../pages/system/index.vue'),
                    children: [
                        {path: 'initDB', name: 'initDB', component: () => import('../pages/system/init/index.vue')}
                    ]
                },
                {path: 'task', name: 'task', component: () => import('../pages/task/index.vue'),
                    children: [
                        {path: 'plan', name: 'plan', component: () => import('../pages/task/plan/index.vue')},
                    ]
                },
                {path: 'user', name: 'user', component: () => import('../pages/system/index.vue'),
                    children: [
                        {path: 'user', name: 'user', component: () => import('../pages/user/user/index.vue')}
                    ]
                }
            ]
        }
    ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
    window.console.log(to)
    if(to.name == 'login'){
        next()
    } else {
        if ( !localStorage.getItem("isLogin")) {
            next({
                path: '/login'
            })
            return
        } else {
            document.title = to.meta.title || ''
            next()
        }
    }
  })
export default router
