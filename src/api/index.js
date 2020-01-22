import axios from 'axios'
import bus from '@/utils/bus.js';
// 配置全局地址
const instance = axios.create({
  baseURL: '/',
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})
export const setHeader = (key, val) => {
  instance.defaults.headers.common[key] = val
}

const handleError = (err) => {
  return Promise.reject(err)
}

// 添加请求拦截
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('_token')
  if (token) {
    config.headers.token = token
  }
  return new Promise(resolve => resolve(config))
})

// 添加响应拦截
instance.interceptors.response.use(response => {
  window.console.log(JSON.stringify(response))
  if (response.status === 200) {
    window.console.log(response.data.code)
    switch (response.data.code) {
      case 500:
        return response
      case 300:
        localStorage.removeItem('isLogin')
        localStorage.removeItem('_token')
        bus.$emit('logout')
        break
      case 200:
        return response.data
      default:
        return response
    }
  }
}, error => {

  return Promise.reject(error)
})

export default {
  get(url, options = {}) {
    return instance.get(url, {params: options}).catch(handleError)
  },
  post(url, data = {}, config = {}) {
    return instance.post(url, data, config).catch(handleError)
  },
  put(url, data = {}, config = {}) {
    return instance.put(url, data, config)
      .catch(handleError)
  },
  delete(url, options = {}) {
    return instance.delete(url, options)
      .catch(handleError)
  }
}
