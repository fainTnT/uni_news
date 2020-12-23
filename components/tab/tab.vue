<template>
	<view class='tab'>
		<scroll-view scroll-x="true" class='tab-scroll'>
			<view class="tab-content">
				<view v-for='(item,index) in list' :key='index' @click='tabClick(item,index)'  class='tab-item' :class='{active:activeIndex == index}'>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class='tab-icon' @click='open'>
			<uni-icons type='gear' size='30'></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex:0,
			};
		},
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		methods:{
			tabClick(item,index){
				this.activeIndex = index;
				this.$emit('homeTabClick',item,index);
			},
			open(){
				uni.navigateTo({
					url:'/pages/home-label/home-label'
				})
			}
		},
		watch:{
			tabIndex(newVal){
				this.activeIndex = newVal; 
			}
		}
	}
</script>

<style lang='scss'>
	.tab {
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #ccc;
		padding-right:10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		.tab-icon {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width:30px;
			height:30px;
			&::after{
				display: block;
				content:'';
				width:1px;
				height:25px;
				left:-7px;
				background-color: #ddd;
				position: absolute;			
			}
		}
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			padding-right:8px;
			box-sizing: border-box;
			width: 100%;
			height: 45px;
			.tab-content {
				width: 100%;
				height: 45px;
				display: flex;
				line-height: 45px;
				.tab-item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
				}
				.active {
					color:$uni-color-base
				}
			}
		}
	}
</style>
