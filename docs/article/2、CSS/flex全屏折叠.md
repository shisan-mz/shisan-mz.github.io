---
title: 全屏折叠
---

# 全屏折叠

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body, html {
      height: 100%;
      margin: 0;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      background-color: linen;
    }
    .item {
      text-align: center;
      flex-grow: 0;
      transition: flex-grow .3s;
      position: relative;
    }
    .title {
      background-color: rgb(150, 181, 183);
      color: rgb(4, 43, 46);
      height: 44px;
      line-height: 44px;
      border-top:rgb(125, 157, 160) solid 1px;
    }
    .active {
      flex-grow: 1;
    }
    .content {
      position: absolute;
      top: 44px;
      left: 0;
      width: 100%;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="item">
      <div class="title">标题一</div>
      <div class="content">内容一</div>
    </div>
    <div class="item active">
      <div class="title">标题二</div>
      <div class="content">内容二</div>
    </div>
    <div class="item">
      <div class="title">标题三</div>
      <div class="content">内容三</div>
    </div>
  </div>
  <script>
    const items = document.querySelectorAll('.title');
    items.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        item.parentElement.classList.toggle('active');
      });
    });
  </script>
</body>
</html>
```
