---
title: Axios
---

# Axios
[Axios](https://github.com/axios/axios)一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 一、安装
```json
yarn add axios
or
npm i axios
```

## 二、二次封装
```js
import axios from 'axios'

const errorCode = {
    '401': '认证失败，无法访问系统资源',
    '403': '当前操作没有权限',
    '404': '访问资源不存在',
    'default': '系统未知错误，请反馈给管理员'
}

// 创建axios实例
const request = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '',
    // 超时时间
    timeout: 10000,
    // 自定义请求头
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

// request拦截器
request.interceptors.request.use(config => {
    // 携带自定义token
    // config.headers['Authorization'] = 'Bearer ' + getToken()
    return config
}, error => {
    console.log('请求error', error)
    Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res.data
    }
    if (code === 401) {
        // 处理登录失效...
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
        return Promise.reject(new Error(msg))
    } else if (code !== 200) {
        return Promise.reject('error')
    } else {
        return Promise.resolve(res.data)
    }
},
    error => {
        console.log('响应err' + error)
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        return Promise.reject(error)
    }
)

export default request
```