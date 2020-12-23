<template>
	<view class='home'>
		<navbar></navbar>
		<tab :list="tabList" @homeTabClick='homeTabClick' :tabIndex='tabIndex'></tab>
		<list class='list' :list="tabList" :currentIndex='listIndex' @swiperChange='indexChange' :activeName='tabName'></list>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				tabList: [],
				listIndex: 0,
				tabIndex:0,
				tabName:'',
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		watch:{
			userInfo(newVal){
				this.getLabel();
			}
		},
		onLoad() {
			uni.$on('labelChange',(res)=>{
				this.tabList = [];
				this.listIndex = 0;
				this.tabIndex = 0;
				this.getLabel();
			})	
		},
		methods: {
			getLabel() {
				this.$api.get_label().then(res => {
					const {data} = res;
					data.unshift({name:'全部'});
					this.tabList = data;
				})
			},
			homeTabClick(item, index) {
				this.listIndex = index;
				this.tabName = item.name;
			},
			indexChange(a){
				this.tabIndex = a;
				this.tabName = this.tabList[a].name;
			}
		}
	}
</script>

<style lang='scss'>
	page {
		height: 100%;
		display: flex;
	}
	.home {
		flex:1;
		display: flex;
		flex-direction: column;
		.list {
			height:100%;
			overflow: hidden;
			background-color: #eee;
		}
	}
</style>
