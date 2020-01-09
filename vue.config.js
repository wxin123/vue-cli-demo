module.exports = {
    devServer: {
        host: 'localhost',
        port: 8000,
        proxy: {
            '/apis': {    //将www.example.com映射为/apis
                target: 'http://localhost:8180/',  // 接口域名
                // target: 'http://localhost:8080/',  // 接口域名
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/apis': ''   //需要rewrite的,
                }
            }
        }
    },
    proxyTable: {
        '/api': {
            target: 'http://101.132.150.220:8080/', //设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true, //如果需要跨域
            pathRewrite: {
                '^/api': '/'
                //这里理解成用面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用 'http://425.0.100.100:8888/user/add'，
                //直接写‘ / api / user / add’ 即可
            }
        }
    }
}
