---
title: vite开启gzip压缩
---

# vite开启gzip压缩
## 一、安装vite-plugin-compression
```json
npm i vite-plugin-compression -D
```
## 二、vite.config.js
```js
import compressPlugin from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        vue(),
        compressPlugin({
            filter:/\.(js|css)$/,//对哪些类型的文件进行压缩
            verbose: true,//是否在控制台输出压缩结果
            disable: false,//是否禁用压缩
            threshold: 10240,//只压缩大于该值(单位为字节)的文件
            ext: '.gz',//压缩文件的后缀名
            algorithm: 'gzip', //压缩算法
            deleteOriginFile:true,//是否删除原始文件
        })
    ]
})

```