---
title: vite分包
---

# vite分包
vite.config.js
```js
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return 'vendor'
                }
            }
        }
    }
})

```