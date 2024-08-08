---
title: css文本溢出隐藏
---

# css文本溢出隐藏

## 一、单行文本溢出省略

```css
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

## 二、多行文本溢出省略

```css
display: -webkit-box !important;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-all;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical !important;
```
