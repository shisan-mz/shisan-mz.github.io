---
title: HTML5之Dialog标签
---

# HTML5之Dialog标签

## Dialog标签使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dialog标签</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .wrap {
            width: 100%;
            height: 100vh;
            position: relative;
            background-color: skyblue;
        }
        .dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            border: none;
            background-color: transparent;
        }
        .body {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, .5);
        }
    </style>
</head>

<body>
    <div class="wrap">
        <button id="btn">show</button>
        <dialog class="dialog" id="dialog">
            <div class="body">
                <button class="close">关闭</button>
            </div>
        </dialog>
    </div>
    <script>
        const btnDom = document.querySelector('#btn')
        const closeDom = document.querySelector('.close')
        const dialogDom = document.querySelector('#dialog')
        btnDom.addEventListener('click', () => {
            dialogDom.show()
        })
        closeDom.addEventListener('click', () => {
            dialogDom.close()
        })

    </script>
</body>

</html>
```
