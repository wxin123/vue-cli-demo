import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
if (process.env.NODE_EVN == 'development') {
  axios.defaults.baseURL = '/apis'
} else if (process.env.NODE_EVN == 'production') {
  axios.defaults.baseURL = '/apis'
}
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
