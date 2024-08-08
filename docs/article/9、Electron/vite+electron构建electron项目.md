---
title: Vite+Electron构建Electron项目
---

# Vite+Electron构建Electron项目

[Electron官网](https://www.electronjs.org/zh)
<br>
[Vite官网](https://vitejs.cn/)

## 一、使用Vite创建一个vue3项目

```json
# npm设置淘宝镜像
>  npm config set registry https://registry.npmmirror.com/
# 执行创建命令
>  npm init vite <your-vue-app-name>
# 选择框架
>  Select a framework
# 选择语言
>  Select a variant
# 进入项目目录
>  cd <your-vue-app-name>
# 安装依赖
>  npm i
# 运行项目
>  npm run dev
```

![image-vite-vue](/img/vite-vue.png)

## 二、配置Electron

1、安装electron

```json
# 设置electron镜像
>  npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
# 安装electron
npm i electron@22 -D
```

2、根目录下新建electron文件夹，存放electron相关的文件
<br>
1)、electron文件夹下新建main.js

```js
// main.js
const { app, BrowserWindow } = require('electron')
const { join } = require('node:path')

let mainWindow = null

function createWindow() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            // 预加载脚本，后续创建
            preload: join(__dirname, 'preload.js')
        }
    })

    // 加载 vue项目url
    mainWindow.loadURL("http://localhost:5173/")

    // 打开开发工具
    // mainWindow.webContents.openDevTools()
}

// 当Electron完成初始化并准备创建浏览器窗口时，将调用此方法。
// 某些API只能在此事件发生后使用。
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // 在macOS上，当点击停靠图标且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭所有窗口后退出，macOS除外。
// 应用程序及其菜单栏通常保持活动状态，直到用户使用Cmd+Q明确退出
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
```

2)、electron文件夹下新建preload.js(方便将一些node中使用的模块提供给渲染进程使用)

```js
// preload.js

const { contextBridge } = require('electron');

// 用于渲染器的自定义API
const ipcRendererApi = {
    // 自定义
}
// 只有在启用了上下文隔离的情况下，才能使用“contextBridge”API向渲染器公开Electron API，
// 否则只添加到DOM全局。
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('ipcRendererApi', ipcRendererApi);
    } catch (error) {
        console.log(error)
    }
} else {
    window.ipcRendererApi = ipcRendererApi
}
```

3)、修改vite.config.js

```js
export default defineConfig({
    //增加vue项目打包路径配置
    base:'./',
    plugins: [vue()],
})
```

4)、修改package.json

```json
{
  "name": "vue-electron",
  "private": true,
  "version": "0.0.0",
  // 删除"type": "module",
  // 增加electron启动入口文件
  "main": "electron/main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    // 增加electron启动命令
    "dev:electron": "chcp 65001 && electron ."
  },
  "dependencies": {
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.3",
    "electron": "^22.3.16",
    "vite": "^4.4.0"
  }
}
```

## 三、运行启动命令

```json
#  打开两个终端,分别运行
>  npm run dev
>  npm run dev:electron
```

启动成功
![image-electron](/img/electron.png)