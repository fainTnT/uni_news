<template>
	<view>
		<navbar :isSearch='true' @inputChange='inputChange' v-model='value'></navbar>
		
		<view v-if='!isShowHistory'>
			<list-scroll class='list-scroll' >
				<uni-load-more status="loading" iconType="snow" v-if='isLoad'></uni-load-more>
				<list-card v-for='(item,index) in searchList' :key='index' :item='item' @listCardClick='searchCardClick'></list-card>
			</list-scroll>
			<view class='no-list' v-if='searchList.length == 0&&!isLoad'>
				没有搜索到相关数据
			</view>
		</view>
		
		<view class='search-content' v-else>
			<view class='search-top'>
				<text>搜索历史</text>
				<text @click='clear'>清空</text>
			</view>
			<view class='no-data' v-if='historyList.length==0'>
				没有搜索记录
			</view>
			<view class='search-bottom' v-else>
				<view v-for="(item,index) in historyList" class='search-tag' :key='index' @click='openHistory(item)'>{{item.name}}</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	let timer = null;
	export default {
		data() {
			return {
				isLoad:false,
				searchList:[],
				value:'',
				isShowHistory:true
			}
		},
		computed:{
			...mapState(['historyList'])
		},
		methods: {
			clear(){
				this.$store.dispatch('clear_history');
				uni.showToast({
					title:'清空完成'
				})
			},
			openHistory(item){
				this.value = item.name;
				this.getSearch(this.value);
			},
			searchCardClick(){
				console.log(this.value);
				this.$store.dispatch('set_history', {
					name: this.value
				})
			},
			inputChange(e){
				this.value = e;
				this.isShowHistory = false;
				if(timer){
					clearTimeout(timer)
				}
				timer = setTimeout(()=>{
					this.getSearch(e)
				},400)
			},
			getSearch(value){
				this.isShowHistory = false;
				this.isLoad=true;
				if(!value){
					this.searchList = [];
					this.isShowHistory = true
					return
				}
				this.$api.get_search({
					value
				}).then(res=>{
					const {data} = res.data;
					this.searchList = data
					this.isLoad=false;
				}).catch(()=>{
					this.isLoad=false;
				})
			}
		},
	}
</script>

<style lang='scss'>
	page {
		background-color: #eee;
		.search-content {
			display: flex;
			flex-direction: column;
			.search-top {
				height:30px;
				padding:0 10px;
				box-sizing: border-box;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: space-between;
				text {
					font-size: 14px;
					font-weight: 600;
					&:last-child {
						color: #2E8B57;
					}
					&:first-child {
						color: #f07373;
					}
				}
			}
			.search-bottom {
				margin-top:2px;
				background-color: #fff;
				display: flex;
				padding:5px 10px;
				box-sizing: border-box;
				flex-wrap: wrap;
				.search-tag {
					font-size: 16px;
					taxt-align:center;
					flex-shrink: 0;
					padding:2px 5px;
					border:1px solid #999;
					border-radius: 5px;
					margin-left:20px;
					margin-top:5px;
					color:#999;
				}
			}
		}
	}
	.no-data {
		width:100%;
		height:200px;
		background-color: #fff;
		margin-top:2px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color:#999;
	}
	.no-list {
		width:100%;
		height:200px;
		line-height: 200px;
		text-align: center;
		font-size: 14px;
		color:#999;
	}
</style>
