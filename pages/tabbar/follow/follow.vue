<template>
	<view class="follow">
		<view class="follow-tab">
			<view class="follow-tab__box">
				<view class="follow-tab__item" :class="{active:activeIndex===0}" @click="changeTab(0)">文章</view>
				<view class="follow-tab__item" :class="{active:activeIndex===1}" @click="changeTab(1)">作者</view>
			</view>
		</view>
		
		<view class="follow-list">
			<swiper class="follow-list__swiper" :current="activeIndex" @change="changeSwiper">
				<swiper-item>
					<list-scroll>
						<uni-load-more v-if="list.length===0 && !articleShow" iconType="snow" status="loading"></uni-load-more>
						<list-card v-for="item in list" :types="types" :key="item._id" :item="item"></list-card>
						<view v-if="articleShow" class="no-data">快去收藏文章吧！</view>
					</list-scroll>
				</swiper-item>
				<swiper-item>
					<list-scroll>
						<list-author v-for="(item ,index ) in authorList" :key="item._id" :author="item"></list-author>
						<view v-if="authorShow" class="no-data">快去关注作者吧！</view>
					</list-scroll>
				</swiper-item>
			</swiper>
		</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types:'follow',
				activeIndex:0,
				list:[],
				articleShow:false,
				authorList:[],
				authorShow:false,
			}
		},
		created() {
			uni.$on('update_article',()=>{
				this.getFollow();
			})
			uni.$on('update_author',()=>{
				this.getAuthor();
			})
			this.getFollow();
			this.getAuthor();
		},
		methods: {
			changeSwiper(e){
				this.activeIndex=e.detail.current;
			},
			changeTab(v){
				this.activeIndex=v;
			},
			getFollow(){
				this.$api.get_follow().then(res=>{
					const {data}= res;
					this.list=data;
					this.articleShow=this.list.length === 0?true:false;
				})
			},
			getAuthor(){
				this.$api.get_author().then(res=>{
					const {data} =res;
					this.authorList=data;
					this.authorShow=this.authorList.length === 0?true:false;
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.follow{
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;
		
		.follow-tab{
			height: 30px;
			padding: 10px 20px;
			border-bottom: 1px #f5f5f5 solid;
			
			.follow-tab__box{
				display: flex;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				border: 1px $uni-color-base solid;
				
				.follow-tab__item{
					display: flex;
					justify-content: center;
					align-items: center;
					color: #666;
					font-size: 14px;
					width: 100%;
					
					&:first-child{
						border-right: 1px $uni-color-base solid;
					}
					
					&.active{
						color: $uni-color-base;
					}
				}
			}
		}
		
		.follow-list{
			flex:1;
			.follow-list__swiper{
				height: 100%;
				.swiper-item{
					height: 100%;
				}
			}
		}
	}
	.no-data{
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
