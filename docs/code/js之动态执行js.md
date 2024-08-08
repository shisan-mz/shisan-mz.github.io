---
title: js中动态执行js字符串
---

# js中动态执行js字符串

```js
// 1、eval函数(同步，当前作用域)
let fnStr1 = "function test(){ return 1 + 1; }"
let result1 = eval(`(${fnStr1})()`)
console.log(result1) //2
// or
let fnStr2 = "(function test(){ return 1 + 1; })()"
console.log(eval(fnStr2)) //2

// 2、setTimeout(异步，全局作用域)
setTimeout("console.log('333')", 0);

// 3、new Function(同步，全局作用域)
let fnStr3 = 'function test(){const number = 3; return number.toFixed(3);}';
new Function(`${fnStr3};return test()`)();

// 4、script标签(同步，全局作用域)
const script = document.createElement('script')
script.innerHTML = "console.log('333222111')"
document.body.appendChild(script)
```