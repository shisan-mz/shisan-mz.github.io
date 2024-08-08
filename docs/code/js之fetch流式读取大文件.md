---
title: fetch流式读取大文件
---

# 使用fetch流式读取大文件

```js
async function loadNovel() {
    const url = 'https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt';
    const resp = await fetch(url);
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let remainChunk = new Uint8Array(0);
    for (;;) {
        const { value, done } = await reader.read();
        console.log(done);
        if (done) {
            break;
        }
        const lastIndex = value.lastIndexOf(10);
        const chunk = value.slice(0, lastIndex + 1);
        const readChunk = new Uint8Array(remainChunk.length + chunk.length);
        readChunk.set(remainChunk);
        readChunk.set(chunk, remainChunk.length);
        remainChunk = value.slice(lastIndex + 1);
        const text = decoder.decode(readChunk);
        // console.log(text);
    }
    const text = decoder.decode(remainChunk);
    console.log(text);
}

loadNovel();
```
