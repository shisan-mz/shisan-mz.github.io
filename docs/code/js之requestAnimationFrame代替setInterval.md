---
title: 使用requestAnimationFrame代替setInterval
---


# 使用requestAnimationFrame代替setInterval


```js
let intervalTimer = null

const interval = (callback, duration = 1500) => {
    let now = Date.now
    let stime = now()
    let etime = stime
    let loop = () => {
        intervalTimer = requestAnimationFrame(loop)
        etime = now()
        if (etime - stime >= duration) {
            stime = now()
            etime = stime
            callback()
        }
    }
    
    intervalTimer = requestAnimationFrame(loop)
}
```
