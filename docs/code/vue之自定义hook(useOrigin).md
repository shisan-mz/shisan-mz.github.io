---
title: vue3自定义hook之useOrigin
---

# vue3自定义hook之useOrigin

便于重置数据

```js
import { ref, reactive } from "vue"

export function useRefOrigin(val) {
    const _origin = JSON.parse(JSON.stringify(val))
    const state = ref(val)
    const resetRef = () => {
        state.value = JSON.parse(JSON.stringify(_origin))
    }
    return { state, resetRef }
}

export function useReactiveOrigin(val) {
    const _origin = JSON.parse(JSON.stringify(val))
    const state = reactive(val)
    const resetReactive = () => {
        Object.assign(state,JSON.parse(JSON.stringify(_origin)))
    }
    return { state, resetReactive }
}
```