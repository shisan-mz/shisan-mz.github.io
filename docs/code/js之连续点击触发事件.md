---
title: 连续点击触发事件
---

# js连续点击触发事件

```html
<button id="btn">点击</button>
```

```js
let clickCount = 0; // 记录点击次数
let lastClickTime = 0; // 上一次点击的时间
function handleClick() {
    const currentTime = new Date().getTime(); // 获取当前点击时间
    if (clickCount === 0 || currentTime - lastClickTime <= 500) { // 两次点击间隔小于等于 1 秒
        clickCount++; // 增加点击次数
    } else {
        clickCount = 1; // 两次点击间隔大于 1 秒，重置点击次数为 1
    }
    lastClickTime = currentTime; // 更新上一次点击时间
    if (clickCount === 5) { // 点击次数达到 3
        console.log('连续点击五次');
        clickCount = 0; // 重置点击次数
    }
}
// 绑定点击事件监听
btn.addEventListener('click', handleClick);
```
