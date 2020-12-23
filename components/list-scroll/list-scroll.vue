<template>
	<view class='scroll'>
		<scroll-view class='content-scroll' scroll-y @scrolltolower='loadMore'>
			<view class='content'>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			loadMore(){
				this.$emit('loadMore')
			}
		}
	}
</script>

<style lang='scss'>
	.scroll {
		height:100%;
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;
		.content-scroll {
			height: 100%;
			overflow: hidden;
			.content {
				padding:5px 10px;
			}
		}
	}
</style>
