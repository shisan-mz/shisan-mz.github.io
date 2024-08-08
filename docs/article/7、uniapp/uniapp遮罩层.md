---
title: 遮罩层组件
---


# 遮罩层组件-uniapp

```vue
<template>
	<view @touchmove.prevent="">
		<uni-transition ref="ani" custom-class="mask" mode-class="fade" :styles="maskStyle" :show="show" @click="handleClick">
			<slot />
		</uni-transition>
	</view>
</template>

<script>
	/**
	 * mask 遮罩层
	 * 注：依赖于uni-transition组件
	 * @property {Boolean}	show		是否显示遮罩（默认 false ）
	 * @property {Number}	zIndex		zIndex 层级（默认 10000 ）
	 * @property {Number}	duration	动画时长，单位毫秒（默认 300 ）
	 * @property {Number}	opacity		不透明度 （默认 0.5 ）
	 * @property {Object}	customStyle	自定义遮罩层样式
	 * @event {Function} 	click	 	点击遮罩层触发事件
	 */
	export default {
		name: 'customMask',
		data() {
			return {}
		},
		props: {
			// 是否展示
			show: Boolean,
			// 遮罩层z-index
			zIndex: {
				type: Number,
				default: 10000
			},
			// 动画过渡时间 ms
			duration: {
				type: Number,
				default: 300
			},
			// 不透明度
			opacity: {
				type: Number,
				default: 0.5
			},
			// 自定义遮罩层样式
			customStyle: {
				type: Object,
				default: () => {}
			},
		},
		computed: {
			maskStyle() {
				const style = {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					zIndex: this.zIndex,
					bottom: 0,
					'background-color': `rgba(0, 0, 0, ${this.opacity})`
				}
				return Object.assign(style, this.customStyle)
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .7);
	}
</style>
```