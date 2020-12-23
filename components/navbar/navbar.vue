<template>
	<view class='navbar' :style="{height:navHeight+userHeight+'px'}">
		<view class='wrapper' :style="{height:navHeight+userHeight+'px'}">
			<view class='top' :style="{height:userHeight+'px'}"></view>
			<view class='content' :style="{paddingRight:navPadding+'px'}" >
				<view class='navbar-icon' :class="isSearch" v-if='isSearch' @click='back'>
					<uni-icons type='back' size='22' color='#fff'></uni-icons>
				</view>
				
				<view class='search' @click.stop='open' v-if='!isSearch'>
					<view class='icon'>
						<uni-icons type='search' size="16" color="#999"></uni-icons>
					</view>
					<view class='input'>
						<input type="text" value='uni-app,vue'>
					</view>
				</view>
				
				<view class='search isSearch' @click='open' v-else-if='isSearch'>
					<view class='icon'>
						<uni-icons type='search' size="16" color="#999"></uni-icons>
					</view>
					<view class='input'>
						<input type="text" placeholder="请输入搜索内容" @input='change' v-model='val'>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			isSearch:{
				type:Boolean,
				dafault(){
					return false
				}
			},
			value:{
				type:[String,Number],
				default(){
					return '';
				}
			}
		},
		data() {
			return {
				val:'',
				userHeight: 0,
				navHeight:40,
				navPadding:20,
			};
		},
		watch:{
			value(newVal){
				this.val = newVal;
			}
		},
		created() {
			this._getSystemInfo();
		},
		methods: {
			// 获取用户手机状态栏的高度
			_getSystemInfo() {
				uni.getSystemInfo({
					success: (res) => {
						this.userHeight = res.statusBarHeight
					}
				})
				// 小程序端获取胶囊的位置
				// #ifdef MP
				const buttonInfo = uni.getMenuButtonBoundingClientRect();
				this.navPadding = buttonInfo.width + this.navPadding;
				// #endif
			},
			open(){
				if(this.isSearch) return;
				uni.navigateTo({
					url:"/pages/home-search/home-search"
				})
			},
			back(){
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			},
			change(e){
				this.$emit('inputChange',e.detail.value)
			}
		}
	}
</script>

<style lang='scss'>
	.navbar {
		width:100%;
		.wrapper {
			width:100%;
			background-color: $uni-color-base;
			position: fixed;
			z-index:9;
			.content {
				height:40px;
				padding:0 20px;
				box-sizing: border-box;
				display: flex;
				justify-content:center;
				align-items:center;
				.search {
					width:100%;
					height:28px;
					background-color: #fff;
					line-height: 28px;
					border-radius:28px;
					display: flex;
					align-items:center;
					&.isSearch{
						margin-left:10px;
						border-radius:5px;
					}
					.icon {
						width:18px;
						height:18px;
						margin-left:16px;
						display: flex;
						justify-content:center;
						align-items:center;
					}
					.input {
						width:100%;
						margin:0 10px;
						font-size:14px;
						color:#999;
					}
				}
			}
		}
	}
</style>
