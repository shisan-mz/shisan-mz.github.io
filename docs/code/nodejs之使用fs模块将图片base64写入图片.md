---
title: fs模块将图片base64写入图片
---

# fs模块将图片base64写入图片

```js
// 1.使用原生node:fs模块,需要预先编写代码来确保目录的存在
const fs = require('node:fs')
const { join } = require('node:path')

function base64ToImg(base64,name,path) {
    return new Promise(async (resolve, reject) => {
        const fileBase64 = base64.replace(/^data:image\/\w+;base64,/, "")
        if (!fileBase64) return reject(new Error('Invalid input string'))
        let fileName = name
        let filePath = path
        if (!fileName || !(/\.(png|jpg)$/i.test(fileName))) {
            fileName = Math.random().toString(36).substr(2) + Date.now() + '.png';
        }
        if (!filePath) {
            filePath = join(__dirname, fileName);
        }else{
            try {
                fs.statSync(filePath)
            } catch (error) {
                fs.mkdirSync(filePath,{ recursive: true })
            }
            filePath = join(filePath, fileName)
        }
        try {
            const dataBuffer = Buffer.from(fileBase64, 'base64');
            fs.writeFile(filePath, dataBuffer, (err) => {
                if (err) return reject(err)
                resolve(filePath)
            });
        } catch (error) {
            reject(error)
        }
    })
}

// 使用fs-extra
const fse = require('fs-extra')

function base64ToImg(base64, name, path) {
    return new Promise(async (resolve, reject) => {
        const fileBase64 = base64.replace(/^data:image\/\w+;base64,/, "")
        if (!fileBase64) return reject(new Error('Invalid input string'))
        let fileName = name
        let filePath = path
        if (!fileName || !(/\.(png|jpg)$/i.test(fileName))) {
            fileName = Math.random().toString(36).substr(2) + Date.now() + '.png';
        }
        if (!filePath) {
            filePath = join(__dirname, fileName);
        } else {
            filePath = join(filePath, fileName)
        }
        try {
            const dataBuffer = Buffer.from(fileBase64, 'base64');
            await fse.outputFile(filePath, dataBuffer, { overwrite: true })
            resolve(filePath)
        } catch (error) {
            reject(error)
        }
    })
}
```