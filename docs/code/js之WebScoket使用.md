---
title: WebScoket使用
---

# WebScoket使用

客户端
```js
//webscoket
let socket
let socketLock = false
let socketTimer = null

// 创建WebSocket
const createSocket = (url = 'ws://127.0.0.1:3001') => {
    if (!("WebSocket" in window)) return ElMessage.warning("不支持WebSocket")
    if (socket && socket.readyState === WebSocket.OPEN) return

    socket = new WebSocket(url);
    // 监听连接成功
    socket.onopen = function () {
        console.log('WebSocket connected');
    }
    // 监听连接关闭
    socket.onclose = function () {
        console.log('WebSocket closed')
        socketConnect()
    };
    // 监听收到消息
    socket.onmessage = function (event) {
        console.log(event.data);
        // 与服务保持心跳，不采用定时器方式
        if (event.data == 'ping') {
            socket.send('peng')
        }
    }
    // 错误
    socket.onerror = function (event) {
        console.log('WebSocket error', event);
        socketConnect()
    }
}

// WebSocket重连调用
const socketConnect = () => {
    if (socketLock) return
    socketLock = true
    clearTimeout(socketTimer)
    socketTimer = setTimeout(() => {
        createSocket()
        socketLock = false
    }, 5 * 1000);
}
```
服务端
```js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
    console.log('连接成功');
    // 收到消息
    ws.on('message',function(message){
        let str = message.toString('utf-8');
        console.log('Received message: ' + str);
    })
    // 发生错误
    ws.on('error',function(err){
        console.error(err);
    })
    // 连接成功通知
    ws.send(JSON.stringify('Hello, client!'))
    // 模拟实时更新数据
    setInterval(() => {
        let list = [];
        for (let i = 0; i < 12; i++) {
            let randomNum = Math.floor(Math.random() * 100);
            list.push(randomNum);
        }
        ws.send(JSON.stringify(list))
    }, 10000)
});
wss.on('close',function(){
    console.log('close');
})
```