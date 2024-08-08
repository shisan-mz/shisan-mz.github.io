---
title: electron安装包体积优化
---

# electron安装包体积优化

## 一、afterPack.js

```js
exports.default = async function (context) {
    const fs = require('fs')
    let localeDir = context.appOutDir + '/locales/'
    const platform = process.platform

    if (platform !== 'win32') return

    if (!fs.existsSync(localeDir)) return

    let files = fs.readdirSync(localeDir);
    const needPak = [`zh-CN.pak`,`en-US.pak`]
    
    files.forEach(function (file) {
        if (!(files && files.length)) return
        if (!needPak.includes(file)) {
            fs.unlinkSync(localeDir + file)
        }
    })
    // fs.unlinkSync(context.appOutDir + '/LICENSE.electron.txt')
    // fs.unlinkSync(context.appOutDir + '/LICENSES.chromium.html')
}
```

## 二、electron-builder.yml中afterPack钩子

```
afterPack: build/afterPack.js
```

