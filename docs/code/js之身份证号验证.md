---
title: js验证身份证号
---

# 验证身份证号

```js
function isIDNumber(idNumber = '') {
    // 判断身份证号码长度是否为18位
    if (idNumber.length !== 18) return false
    // 加权因子
    let weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验码
    let checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    // 计算加权和
    let sum = 0
    for (let i = 0; i < 17; i++) {
        sum += parseInt(idNumber[i]) * weightFactor[i]
    }
    // 计算校验码
    let mod = sum % 11
    let lastCode = checkCode[mod]
    // 验证校验码
    if (lastCode === idNumber[17]) return true
    return false
}

// 测试
let idNumber = "35042619790906301X"; // 替换为需要验证的身份证号码

console.log(isIDNumber(idNumber));
```