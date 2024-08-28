---
title: videojs加载播放本地视频
---

# videojs加载播放本地视频

## 一、安装video.js
```json
# 在electron中安装在dev中以优化安装包体积
npm i video.js -D
```

## 二、配置html中csp（若未启用csp，可跳过）
```html
# https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP
<meta http-equiv="Content-Security-Policy" content="default-src 'self' file:  data:; script-src 'self'; style-src 'self' 'unsafe-inline'"/>
```

## 三、使用
```vue
<template>
    <div style="width: 480px;height: 270px;">
        <video ref="playerRef" class="video-js"></video>
    </div>
</template>

<!-- 使用video.js直接加载本地视频 -->

<script setup>
import { ref, onMounted } from 'vue'
import videojs from 'video.js'

const playerRef = ref()
const player = ref()
const videoPath = 'C:/Users/20746/Videos/uni-app-video-courses.mp4'

onMounted(() => {
    if (playerRef.value) {
        player.value = videojs(playerRef.value, {
        controls: true,
        autoplay: true,
        fill: true,
        controlBar: {
            volumePanel: { inline: false, volumeControl: { vertical: true } },
            children: [
            'playToggle',
            'volumePanel',
            'currentTimeDisplay',
            'progressControl',
            'durationDisplay',
            'fullscreenToggle'
            ]
        },
        userActions: {}
        })
    }
    setTimeout(() => {
        player.value?.src(`file:///${videoPath}`)
    }, 5 * 1000);
})

</script>

<style>
@import 'video.js/dist/video-js.css';
.video-js button,
.video-js video {
  outline: none;
}

.video-js .vjs-big-play-button {
  width: 79px;
  height: 79px;
  -o-object-fit: contain;
  object-fit: contain;
  background-color: rgba(255, 255, 255, 0.25);
  border: none;
  line-height: 79px;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  margin: -51.5px auto 0 -39.5px;
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  font-size: 44px;
}

.video-js:hover .vjs-big-play-button,
.video-js .vjs-big-play-button:focus {
  background-color: rgba(255, 255, 255, 0.3);
}

.video-js .vjs-button > .vjs-icon-placeholder:before {
  font-size: 2.5em;
}

.video-js .vjs-control-bar {
  height: 4em;
  background-color: rgba(0, 0, 0, 0.8);
  user-select: none;
}

.video-js .vjs-time-control {
  display: block;
  line-height: 4em;
}

.video-js .vjs-volume-control.vjs-volume-vertical {
  background-color: rgba(0, 0, 0, 0.8);
}

.video-js .vjs-volume-control:hover .vjs-volume-tooltip {
  font-size: 1.5em;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  color: #fff;
}

.video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: inherit;
}

.video-js .vjs-progress-control .vjs-time-tooltip {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  color: #fff;
}

.video-js .vjs-progress-control:hover .vjs-time-tooltip {
  font-size: 1.5em;
}

.video-js .vjs-play-progress.vjs-slider-bar .vjs-time-tooltip {
  display: none;
}

.video-js .vjs-current-time-display,
.video-js .vjs-duration-display {
  font-size: 14px;
  display: flex;
  justify-content: center;
  min-width: 44px;
}


</style>
```