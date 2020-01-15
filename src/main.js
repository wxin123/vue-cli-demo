import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import http from './api/index'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = http
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
