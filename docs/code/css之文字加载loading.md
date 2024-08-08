---
title: 文字加载loading
---

# 文字加载loading
```html
<div class="txt">加载中</div>
```

```css
.txt::after{
    content: '';
    animation: load 3s infinite ;
}
@keyframes load {
    0% {
        content: '...';
    }
    25% {
        content: '';
    }
    50% {
        content: '.';
    }
    75% {
        content: '..';
    }
    100% {
        content: '...';
    }
}
```
