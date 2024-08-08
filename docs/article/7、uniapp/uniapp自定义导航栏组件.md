---
title: 自定义导航栏组件
---


# 自定义导航栏组件-uniapp


```vue
<template>
	<view class="nav">
		<!-- 固定在顶部时，是否生成一个等高元素，以防止塌陷 -->
		<view class="nav__placeholder" v-if="fixed && placeholder" :style="{height: addUnit(getPx(height) + getSys().statusBarHeight,'px'),}"></view>
		<view :class="[fixed && 'nav--fixed']">
			<!-- 状态栏占位 -->
			<view v-if="safeAreaInsetTop" :style="style"></view>
			<!-- 导航条主体 -->
			<view class="nav__content" :class="[border && 'nav--bottom']" :style="{height:addUnit(height),background: bgColor}">
				<view class="nav__content__left" hover-class="nav__content__left--hover" hover-start-time="150">
					<slot name="left"></slot>
				</view>
				<slot name="center"></slot>
				<view class="nav__content__right">
					<!-- #ifdef APP-PLUS || H5 -->
					<slot name="right"></slot>
					<!-- #endif -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * navbar 导航条
	 * @property {Boolean}			safeAreaInsetTop	是否顶部安全区适配（默认 true ）
	 * @property {Boolean}			placeholder			固定在顶部时,是否生成一个等高元素，以防止塌陷（默认 false ）
	 * @property {Boolean}			fixed				是否固定在顶部（默认 true ）
	 * @property {Boolean}			border				是否显示下边框 （默认 false ）
	 * @property {String}			bgColor				背景颜色 （默认 #ffffff ）
	 * @property {String, Number}	height				导航栏高度（默认 44px ）
	 */
	/**
	 * 使用自定义导航页面高度设置
	 * <view :style="{height:`calc(100vh - ${height})`}"></view>
	 computed: {
		height() {
			// h5下占位tabbar高度，非h5页面100vh不包含tabbar高度，94为自定义导航条的高度 + tabbar占位高度
			// #ifdef H5 
			const height = uni.getSystemInfoSync().statusBarHeight + 94 + 'px'
			// #endif
			// #ifdef APP-PLUS || MP-WEIXIN
			// 44为自定义导航条的高度
			const height = uni.getSystemInfoSync().statusBarHeight + 44 + 'px'
			// #endif
			return height
		}
	}
	 */
	export default {
		name:'customNavbar',
		props:{
			// 是否开启顶部安全区适配,默认true
			safeAreaInsetTop: {
				type: Boolean,
				default:true
			},
			// 固定在顶部时,是否生成一个等高元素，以防止塌陷,默认false
			placeholder: {
				type: Boolean,
				default:false
			},
			// 是否固定在顶部,默认true
			fixed: {
				type: Boolean,
				default:true
			},
			// 是否显示下边框,默认false
			border: {
				type: Boolean,
				default:false
			},
			// 背景颜色,默认白色
			bgColor: {
				type: String,
				default:'#FFFFFF'
			},
			// 导航栏高度,默认44px
			height: {
				type: [String, Number],
				default: '44px'
			},
		},
		computed:{
			// 状态栏样式
			style(){
				const style = {}
				style.height = this.addUnit(uni.getSystemInfoSync().statusBarHeight, 'px')
				style.background = this.bgColor
				return style
			},
		},
		methods:{
			getPx(value, unit = false){
				if (/^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)) {
					return unit ? `${value}px` : Number(value)
				}
				// 如果带有rpx，先取出其数值部分，再转为px值
				if (/(rpx|upx)$/.test(value)) {
					return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)))
				}
				return unit ? `${parseInt(value)}px` : parseInt(value)
			},
			addUnit(value = 'auto', unit = 'px'){
				value = String(value)
				// 判断是否为数值
				return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value) ? `${value}${unit}` : value
			},
			getSys(){
				return uni.getSystemInfoSync()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		&--fixed {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			z-index: 11;
		}
		&__content {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: 44px;
			background-color: transparent;
			position: relative;
			&__left,&__right {
				position: absolute;
				top: 0;
				bottom: 0;
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			&__left {
				left: 0;
				font-size: 15px;
				&--hover {
					opacity: 0.7;
				}
			}
			&__title {
				text-align: center;
				font-size: 16px;
				color:#333;
				max-width: 750rpx;
			}
			&__right {
				right: 0;
				font-size: 15px;
			}
		}
		&--bottom{
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
		}
	}
</style>

```