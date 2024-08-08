---
title: 本地图片转base64
---

# 本地图片转base64

```html
    <input type="file" id="file">
```

```js
document.querySelector('#file').addEventListener('change', async (event) => {
    const file = event.target.files[0]
    try {
        const res = await imgToBase64(file)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
})

function imgToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
            const base64String = reader.result
            resolve(base64String)
        }
        reader.onerror = (err) => {
            reject(err)
        }
        reader.readAsDataURL(file)
    })
}
```
