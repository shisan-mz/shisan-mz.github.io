---
title: electron应用启动骨架屏
---

# electron应用启动骨架屏
## 一、使用BrowserView加载骨架屏（窗口需设置为无边框frame：false）
<br>
使用的electron-vite搭建的electron项目

## 二、electron主进程
```js
// 主进程
const {BrowserView} = require('electron')
// 使用BrowserView加载骨架屏（窗口加载url前）
let view = new BrowserView()
mainWindow.setBrowserView(view)
view.setBounds({ x: 0, y: 0, width: mainWindow.getBounds().width, height: mainWindow.getBounds().height })
view.setAutoResize({ width: true, height: true })
view.webContents.loadURL('xxx/loading.html')

// 首页dom加载完成关闭骨架屏
mainWindow.webContents.once('dom-ready',(event) => {
	console.log('dom加载完成');
	view && mainWindow.removeBrowserView(view);
	view.webContents.destroy()
    view = null
})
```

## 三、electron.vite.config.js

```js
// 配置多页面
export default defineConfig({
    renderer: {
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html'),
                    loading: resolve(__dirname, 'loading.html')
                }
            }
        }
    }
})
```

