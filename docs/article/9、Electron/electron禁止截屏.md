---
title: electron应用禁止截屏录屏
---

# electron应用禁止截屏录屏（Windows系统）
调用系统api，禁止截屏录屏（user32.dll）

## 一、安装koffi

```shell
npm install koffi
```

## 二、主进程中引入koffi模块，加载user32.dll文件

```js
import koffi from 'koffi'

const user32 = koffi.load('user32.dll')

// https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity
const SetWindowDisplayAffinity = user32.func('__stdcall', 'SetWindowDisplayAffinity', 'int', ['int', 'int'])

// 获取窗口句柄，mainWindow为当前electron应用窗口
const hwnd = mainWindow.getNativeWindowHandle().readInt32LE()

// 禁止截屏（自行决定禁止时机）
SetWindowDisplayAffinity(hwnd, 17) // 17：透明 1：黑色 0：默认

```
