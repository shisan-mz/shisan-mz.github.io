---
title: vite代码压缩
---

# vite代码压缩
## 一、安装terser
```json
npm install terser -D
```
## 二、vite.config.js
```js
export default defineConfig({
    plugins: [vue()],
    build: {
        minify:'terser',
        terserOptions:{
            compress:{
                drop_console:true,
                drop_debugger:true,
            }
        }
    }
})

```