---
title: 进度条组件
---


# 进度条组件-vue


```vue
<template>
  <div class="progressbar">
    <div class="bar" :style=styles></div>
  </div>
</template>
  
<script setup>
import { computed } from 'vue'

const props = defineProps({
  speed: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "#2AA515"
  },
  round:{
    type:Boolean,
    default:false,
  }
})

const styles = computed(() => {
  let style = {
    width: (props.speed * 100 / props.count) + '%',
    '--bar-color': props.color,
    'background-color': `${props.color}cc`
  }
  if (props.round) {
    style['border-radius'] = "20px"
  }
  return style
})

</script>
  
<style scoped>
.progressbar {
  position: relative;
  display: block;
  width: 100%;
  height: 24px;
  border-radius: 20px;
  background: #ebeef5;
}

.bar {
  position: absolute;
  display: block;
  width: 50%;
  height: 24px;
  top: 0;
  left: 0;
  background-size: 3em 3em;
  background-image: linear-gradient(-45deg,
      transparent 0em,
      transparent 0.7em,
      var(--bar-color) 0.9em,
      var(--bar-color) 2.1em,
      transparent 2.1em,
      transparent 2.9em,
      var(--bar-color) 3.1em);
  animation: ani 500ms infinite linear;
  -webkit-box-shadow: 0px 4px 4px -4px rgb(0 0 0 / 40%),
    0px -3px 3px -3px rgb(0 0 0 / 25%);
  box-shadow: 0px 4px 4px -4px rgb(0 0 0 / 40%),
    0px -3px 3px -3px rgb(0 0 0 / 25%);
}

@keyframes ani {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 3em 0;
  }
}
</style>
  
```
