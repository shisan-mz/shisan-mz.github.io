---
title: 网格边框
---

# 网格边框
```html
<div class="grid"></div>
```

```css
.grid{
    position: relative; 
    width: 800px;
    height: 800px;
}
.grid::before {
    position: absolute;
    z-index: 99;
    content: '';
    width: 800px;
    height: 800px;
    background-repeat: repeat;
    pointer-events: none;
    transform: rotate(45deg);
    transform-origin: center center;
    background-image: linear-gradient(to right,
            #333 1px,
            transparent 1px,
            transparent 10px),
        linear-gradient(to bottom,
            #333 1px,
            transparent 1px,
            transparent 10px);
    background-size: 40px 40px;
}
```