---
title: Notification消息通知
---

# Notification消息通知

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://www.baidu.com/favicon.ico" type="image/x-icon" />
    <title>Notification</title>
</head>

<body>
    <div id="app">
        <button id="btn">弹出通知</button>
    </div>

    <script>
        btn.onclick = () => {
            sendNotification({ title: '标题', body: '内容', icon: 'https://static.segmentfault.com/main_site_next/8a27b2a3/favicon.ico' }, () => { console.log('回调'); })
        }
        function sendNotification({ title, body, icon }, callback) {
            // 先检查浏览器是否支持
            if (!('Notification' in window)) {
                // IE浏览器不支持发送Notification通知!
                console.error("This browser does not support desktop notification");
                return;
            }
            // 如果用户已拒绝显示通知
            if (Notification.permission === 'denied') {
                console.error("This browser does not support desktop notification");
                return;
            }
            //用户已授权，直接发送通知
            if (Notification.permission === 'granted') {
                notify();
            } else {
                // 默认，先向用户询问是否允许显示通知
                Notification.requestPermission(function (permission) {
                    // 如果用户同意，就可以直接发送通知
                    if (permission === 'granted') {
                        notify();
                    }
                });
            }

            function notify() {
                let notification = new Notification(title, {
                    icon: icon,
                    body: body
                });
                notification.addEventListener('click', function () {
                    console.log('点击通知框')
                })
                // 调用notification.close()才能监听到
                notification.addEventListener('close', function () {
                    console.log('关闭通知框');
                })
            }
        }
    </script>
</body>

</html>
```
