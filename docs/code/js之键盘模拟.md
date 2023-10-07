---
title: js键盘模拟
---

# js键盘模拟

```js
document.addEventListener('keydown', (e) => {
    console.log('keydown==', e.key);
})
var eventKeyDown = new KeyboardEvent('keydown', { 'key': 'f' });
document.dispatchEvent(eventKeyDown);
```
