<template>
	<view class='list-card' v-if='item.mode == "base"' @click='cardClick(item)'>
		<view class='card-img'>
			<image :src='item.cover[0]' mode="aspectFill"></image>
		</view>
		<view class='card-contend'>
			<view class='title'>
				<text>{{item.title}}</text>
				<like :item='item' :types='types' :types2='types2'></like>
			</view>
			<view class='tag'>{{item.classify}}</view>
			<view class='watch'>{{item.browse_count}}浏览</view>
		</view>
	</view>

	<!-- 多图模式 -->
	<view class='list-card-more' v-else-if="item.mode == 'column'" @click='cardClick(item)'>
		<view class='title-more'>
			<text>{{item.title}}</text>
			<like :item='item' :types='types' :types2='types2'></like>
		</view>
		<view class='card-img-more'>
			<image v-if='index < 3' v-for='(item1,index) in item.cover' :src='item1'  :key='index' mode="aspectFill"></image>
		</view>
		<view class='card-contend-more'>
			<view class='tag-more'>{{item.classify}}</view>
			<view class='watch-more'>{{item.browse_count}}浏览</view>
		</view>
	</view>

	<!-- 大图模式 -->
	<view class='list-card-more' v-else-if="item.mode =='image'" @click='cardClick(item)'>
		<view class='card-img-one'>
			<image :src='item.cover[0]' mode="aspectFill"></image>
		</view>
		<view class='title-more'>
			<text>{{item.title}}</text>
			<like :item='item' :types='types' :types2='types2'></like>
		</view>
		<view class='card-contend-more'>
			<view class='tag-more'>{{item.classify}}</view>
			<view class='watch-more'>{{item.browse_count}}浏览</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			cardClick(item){
				this.$emit('listCardClick')
				const params = {
					_id:item._id,
					author:item.author,
					title:item.title,
					create_time:item.create_time,
					thumbs_up_count:item.thumbs_up_count,
					browse_count:item.browse_count
				}
				uni.navigateTo({
					url:'/pages/home-detail/home-detail?params='+JSON.stringify(params)
				})
			}
		},
		props: {
			types:{
				type:String,
				detault(){
					return '';
				}
			},
			types2:{
				type:String,
				detault(){
					return '';
				}
			},
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
	}
</script>

<style lang='scss'>
	.list-card {
		margin-bottom: 20px;
		border-radius: 5px;
		height: 100px;
		width: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: center;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2);

		.card-img {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			margin-right: 20px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.card-contend {
			height: 100%;
			flex-shrink: 0;
			flex: 1;
			position: relative;

			.title {
				height: 40px;
				font-size: 14px;
				linr-height: 1.2;
				color: #333;
				font-weight: 600;
				padding-right:30px;
				position: relative;
				box-sizing: border-box;

				text {
					width: 100%;
					height: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					/*! autoprefixer: off */
				}
			}

			.tag {
				position: absolute;
				left: 0;
				bottom: 10px;
				font-size: 14px;
				text-align: center;
				line-height: 18px;
				height: 18px;
				color: $uni-color-base;
				border: 1px solid $uni-color-base;
				border-radius: 20px;
				padding: 2px 5px;
			}

			.watch {
				color: #999;
				font-size: 12px;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
	}

	.list-card-more {
		margin-bottom: 20px;
		border-radius: 5px;
		width: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2);

		.card-img-one {
			border-radius: 5px;
			width: 100%;
			height: 100px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.title-more {
			width: 100%;
			height: 40px;
			font-size: 14px;
			linr-height: 1.2;
			color: #333;
			font-weight: 600;
			padding-right:30px;
			position: relative;
			box-sizing: border-box;
			
			text {
				width: 100%;
				height: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				/*! autoprefixer: off */
			}
		}

		.card-img-more {
			display: flex;
			width: 100%;
			height: 70px;

			image {
				border-radius: 5px;
				flex-shrink: 0;
				width: 100%;
				flex: 1;
				height: 70px;
				margin-right: 10px;
			}
		}

		.card-contend-more {
			width: 100%;
			position: relative;
			margin-top: 10px;
			height: 30px;

			.tag-more {
				position: absolute;
				left: 0;
				bottom: 0;
				font-size: 14px;
				text-align: center;
				line-height: 18px;
				height: 18px;
				color: $uni-color-base;
				border: 1px solid $uni-color-base;
				border-radius: 20px;
				padding: 2px 5px;
			}

			.watch-more {
				color: #999;
				font-size: 12px;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
	}
</style>
