---
title: 锚点跳转
---

# 锚点跳转

```js
/**
 * 1、锚点跳转
 * @param {selector} 需要跳转元素id
 * @param {parentSelector} 父元素id
 * 
 */
export function anchor(selector,parentSelector) {
    let top = 0;
    const scrollTop = document.querySelector(parentSelector).scrollTop
    const el = document.querySelector(selector) || { offsetTop: 0 };
    top = el.offsetTop - scrollTop;
    document.querySelector(parentSelector).scrollBy({ top, behavior: 'smooth' })
}

/**
 * 2、使用元素的scrollIntoView方法
 * @param {element} 要滚动到可见区域的DOM元素
 * 可传入配置对象
 * {
 *    behavior: 'smooth',
 *    block: 'start',
 *    inline: 'nearest'
 * }
 */
element.scrollIntoView()


```
