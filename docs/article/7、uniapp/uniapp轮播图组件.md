---
title: 轮播图组件
---


# 轮播图组件-uniapp


```vue
<template>
	<swiper class="swiper" :style="{height,width,'border-radius':borderRadius}" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :indicator-active-color="indicatorActiveColor" @change="handleChange">
		<swiper-item class="item" v-for="(item,idx) in swiperList" :key="idx">
			<image v-if="getSuffix(item.url)==='img'" :src="item.url" :style="{height,width}" @click="handleClick(idx)"></image>
			<video v-else :id="`video-${idx}`" :src="item.url" :style="{height,width}" object-fit="fill" controls :enable-progress-gesture="false"  @click="handleClick(idx)"></video>
		</swiper-item>
	</swiper>
</template>

<script>
	/**
	 * swiper 轮播
	 * @property {Array}	swiperList				轮播数组（默认为空 [{url:'xxx'}]）
	 * @property {Boolean}	indicatorDots			是否展示面板指示点（默认 false ）
	 * @property {String}	indicatorActiveColor	中的指示点颜色（默认 #dfdfdf ）
	 * @property {Boolean}	autoplay				是否自动切换（默认 false ）
	 * @property {Number}	interval				自动切换间隔，单位毫秒（默认 3000 ）
	 * @property {String}	width					轮播区域宽度（默认 750rpx ）
	 * @property {String}	height					轮播区域高度（默认 370rpx ）
	 * @property {String}	borderRadius			圆角（默认 0px ）
	 * @event {Function} 	click				 	点击轮播图时触发事件 (index索引)
	 * @event {Function} 	change				 	轮播图切换时触发 (index索引)
	 */
	export default {
		name:'customSwiper',
		data(){
			return {
				currentIdx:0,
			}
		},
		props:{
			// 轮播数组
			swiperList:{
				type:Array,
                required:true
			},
			// 是否显示面板指示点
			indicatorDots:{
				type:Boolean,
				default:false
			},
			// 当前选中的指示点颜色
			indicatorActiveColor:{
				type:String,
				default:'#dfdfdf'
			},
			// 是否自动切换
			autoplay:{
				type:Boolean,
				default:false
			},
			// 	自动切换时间间隔
			interval:{
				type:Number,
				default:3000
			},
			// 轮播图宽
			width:{
				type:String,
				default:'750rpx'
			},
			height:{
				type:String,
				default:'370rpx'
			},
			borderRadius:{
				type:String,
				default:'0px'
			}
		},
		methods: {
			handleChange(e) {
				// 当前的激活索引
				this.pauseVideo(this.currentIdx)
				this.currentIdx = e.detail.current
				this.$emit('change', e.detail)
			},
			handleClick(idx){
				this.$emit('click', idx)
			},
			// 切换轮播时，暂停视频播放
			pauseVideo(idx) {
				const lastItem = this.getSuffix(this.swiperList[idx].url)
				if (lastItem == 'video') {
					// 当视频隐藏时，暂停播放
					const video = uni.createVideoContext(`video-${idx}`, this)
					video.pause()
				}
			},
			// 获取后缀
			getSuffix(str){
				let imgReg = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
				let videoReg = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i
				let arrStr = str.split('?')[0]
			    let suffix = arrStr.substring(arrStr.lastIndexOf('.'))
			    // let suffixStr = suffix.toLowerCase()
			    if (imgReg.test(suffix)) {
			        return 'img'
			    }else if (videoReg.test(suffix)) {
			        return 'video'
			    }
				return 'img'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper{
		// border-radius: 6px;
		overflow: hidden;
	}
</style>
  
```
