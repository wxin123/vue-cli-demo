import axios from 'axios'
// 配置全局地址
const instance = axios.create({
    baseURL: '/apis',
    // headers: {}
})
export const setHeader = (key, val) => {
    instance.defaults.headers.common[key] = val
}

const handleError = (err) => {
    return Promise.reject(err)
}

// 添加请求拦截
instance.interceptors.request.use(config => {
    const token = localStorage.token
    if (token) {
        config.headers.token = token
    }
    return new Promise(resolve => resolve(config))
})

// 添加响应拦截
instance.interceptors.response.use(response => {
    if (response.status === 200) {
        if (response.data.code === 200) {
            return response.data
        }
        return response
        // switch (response.data.code) {
        //   case 500:
        //     return response
        //   case 303:
        //     // localStorage.setItem('token', '')
        //     setCookie('isLogin', 0)
        //     break
        //   case 200:
        //     return response.data
        //   default:
        //     // localStorage.setItem('token', '')
        //     setCookie('isLogin', 0)
        //     return response
        // }
    }
}, error => {
    return Promise.reject(error)
})

export default {
    get (url, options = {}) {
        window.console.log(instance.baseURL)
        return instance.get(url, { params: options }).catch(handleError)
    },
    post (url, data = {}, config = {}) {
        return instance.post(url, data, config).catch(handleError)
    },
    put (url, data = {}, config = {}) {
        return instance.put(url, data, config)
            .catch(handleError)
    },
    delete (url, options = {}) {
        return instance.delete(url, options)
            .catch(handleError)
    }
}
