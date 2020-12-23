<template>
	<view class='list'>
		<swiper class='list-swiper' :current='currentIndex' @change='change'>
			<swiper-item class='list-swiper-item' v-for='(item,index) in list' :key='index'> 
				<list-scroll class='list-scroll' @loadMore='loadMore'>
					<list-card v-for='(item1,index1) in catchList[index]' :key='index1' :item='item1'></list-card>
					<uni-load-more iconType="snow" 
					               :status="load[index].loading||isLoad" 
												 v-if='load[index]'>
					</uni-load-more>
				</list-scroll>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listItem:[],
				pageSize:5,
				page:1,
				catchList:{},
				isLoad:'loading',
				load:{},
				activeIndex:0,
			};
		},
		props:{
			list:{
				type:Array,
				default(){
					return [];
				}
			},
			currentIndex:{
				type:Number,
				default(){
					return 0;
				}
			},
			activeName:{
				type:String,
				default(){
					return '';
				}
			}
		},
		created(){
			uni.$on('update_article',(e)=>{
				if(e == 'follow'){
					this.catchList = {};
					this.load = {};
					this.getList(this.activeIndex);
				}	
			})
		},
		watch:{
			list(newVal){
				if(newVal.length==0)return
				this.catchList = {};
				this.load = {};
				this.getList(this.activeIndex);
			}
		},
		methods:{
			loadMore(){
				this.getList(this.currentIndex);
			},
			change(e){
				const {current} = e.detail
				this.activeIndex = current;
				this.$emit('swiperChange',current);
				if(!this.catchList[current]||this.catchList[current].length == 0){
					this.getList(current);	
				}
			},
			getList(current){
				if(!this.load[current]){
					const tempObj = {
						page:1,
						loading:'loading'
					}
					this.$set(this.load,current,tempObj)
				}
				this.$api.get_list({
					name:this.list[current].name,
					pageSize: this.pageSize,
					page: this.load[current].page++
				}).then(res => {
					const {data} = res.data;
					const oldList = this.catchList[current]||[];
					if(data.length == 0){
						const tempObj = {
							page:this.load[current].page--,
							loading:'noMore'
						}
						this.$set(this.load,current,tempObj)
						this.isLoad = this.load[current].loading;
						// 强制渲染页面
						this.$forceUpdate()
						return
					}else if(data.length>0&&data.length<this.pageSize) {
						const tempObj = {
							page:this.load[current].page,
							loading:'noMore'
						}
						this.$set(this.load,current,tempObj)
						this.isLoad = this.load[current].loading;
						// 强制渲染页面
						this.$forceUpdate()
					}
					oldList.push(...data);
					this.$set(this.catchList,current,oldList);
					this.listItem = oldList;
				})
			}
		}	
	}
</script>

<style lang='scss'>
	.list {
		width:100%;
		height:100%;
		.list-swiper {
			width:100%;
			height:100%;
			.list-swiper-item {
				width:100%;
				height:100%;
			}
		}
	}
</style>
