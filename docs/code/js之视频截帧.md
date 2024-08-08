---
title: js视频截帧
---

# js视频截帧

```js
/*
* 视频截帧(web端需使用 URL.createObjectURL 将文件转成本地临时url,electron使用需要关闭webSecurity)
* @param {string} filePath 视频文件路径
* @param {string} fileName 视频文件名称
* @param {number} time 截取帧的时间，截取帧的时间(测试截帧时间超过55秒后生成透明图)
* @return {Promise}
*/
function captureFrame(filePath, fileName, time = 1) {
    console.log(filePath, fileName, time);
    return new Promise((resolve, reject) => {
        video标签，使用ev录制的mp4，截帧结果是透明图？？？
        const video = document.createElement('video')
        video.crossorigin = "anonymous"
        // video.src = `file:///${filePath}`    // electron使用，当typeof window === 'undefined'
        video.src = `${filePath}`  // web端使用
        video.onloadedmetadata = () => {
            video.currentTime = time
        }
        video.onseeked = () => {
            const { duration, videoHeight, videoWidth } = video
            let w = videoWidth
            let h = videoHeight
            if (w > h) {
                if (w > 640) {
                    const scale = 640 / videoWidth
                    w = 640
                    h = Math.ceil(h * scale)
                }
            } else {
                const scale = 480 / videoHeight
                h = 480
                w = Math.ceil(w * scale)
            }
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = w
            canvas.height = h
            ctx?.drawImage(video, 0, 0, w, h)
            const poster = ctx?.canvas.toDataURL('image/png', 0.9) || '
            const min = Math.floor(duration / 60)
            const sec = Math.floor(duration % 60
            resolve({
                filePath,
                fileName,
                duration: (min >= 10 ? min : `0${min}`) + ':' + (sec >= 10 ? sec : `0${sec}`),
                poster,
            })
        }
        video.onerror = (err) => {
            reject(err)
        }
    })
}
```