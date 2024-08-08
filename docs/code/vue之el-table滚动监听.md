---
title: el-table滚动监听
---


# el-table滚动监听(element-plus)

```vue
<template>
	<el-table ref="TableRef" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash-es'
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
const TableRef = ref(null)
onMounted(() => {
    // 挂载
    TableRef.value && TableRef.value.$refs.bodyWrapperaddEventListener('mousewheel', scrollBottom)
})
onUnmounted(() => {
    // 卸载
    TableRef.value && TableRef.value.$refs.bodyWrapperremoveEventListener('mousewheel', scrollBottom)
})

const scrollBottom = debounce((e) => {
    const scrollDirection = e.deltaY > 0 ? 'down' : 'up'
    if (scrollDirection === 'down') {
        const dom = TableRef.value.$refs.bodyWrappergetElementsByClassName('el-scrollbar__wrap')[0]
        const { clientHeight, scrollTop, scrollHeight } =dom
        if (clientHeight + scrollTop === scrollHeight) {
            console.log('已经滚动到底部')
        }
    }
}, 1000)
```
