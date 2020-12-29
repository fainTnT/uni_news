<template>
	<view>
		<view class="comments-content" v-for="item in commentsList" :key="item.comment_id">
			<comments-box :comments="item" @reply="reply"></comments-box>
		</view>
		<uni-load-more v-if="commentsList.length === 0 || commentsList.length > 5" iconType="snow" :status="loading"></uni-load-more>
		<popup ref="popup" @submit="submit"  type='bottom'>
			<view class='popup-wrap'>
				<view class='popup-header'>
					<text class='popup-header__item' @click='close'>取消</text>
					<text class='popup-header__item' @click='submit'>发布</text>
				</view>
				<view class='popup-content'>
					<textarea value="" placeholder="请输入评论内容" maxlength='200' fixed class='popup-textarea' v-model='commentsValue'/>
					<view class='popup-count'>{{commentsValue.length}}/200</view>
				</view>
			</view>
		</popup>
	</view>
</template>

<script>
	import popup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components:{
			popup
		},
		data() {
			return {
				commentsList:[],
				article_id:'',
				page:1,
				pageSize:10,
				loading:'loading',
				commentsValue:'',
				replyFromData:{}
			}
		},
		onLoad(query) {
			this.article_id=query.id;
			this.getComments();
		},
		/**
		 * 上拉加载
		 */
		onReachBottom() {
			if(this.loading === 'noMore') return
			this.page++
			this.getComments()
		},
		methods: {
			reply(e){
				this.replyFromData = {
					"comment_id":e.comments.comment_id,
					"is_reply":e.is_reply
				};
				if(e.comments.reply_id){
					this.replyFromData.reply_id=e.comments.reply_id
				}
				this.openComment();
			},
			// 发布评论
			submit(content){
				if(!this.commentsValue){
					uni.showToast({
						title:'请输入评论内容',
						icon:'none'
					})
					return
				}
				console.log(this.replyFromData)
				this.setUpdateComment({content:this.commentsValue,...this.replyFromData})
				this.commentsValue = '';
			},
			getComments(){
				this.$api.get_comments({
					article_id:this.article_id,
					page:this.page,
					pageSize:this.pageSize
				}).then(res=>{
					const{
						data
					}=res
					
					if(data.length===0){
						this.loading='noMore'
						return
					}
					
					let oldFormData =JSON.parse(JSON.stringify(this.commentsList));
					oldFormData.push(...data);
					this.commentsList=oldFormData;
				})
			},		
			// 打开评论发布窗口
			openComment(){
				this.$refs.popup.open()
			},			
			// 关闭弹窗
			close(){
				this.$refs.popup.close()
			},
			/**
			 * 更新评论
			 * @param {Object} content
			 */
			setUpdateComment(content){
				const formdata ={
					article_id:this.article_id,
					...content
				}
				// 数据重置，避免key重复，添加重复数据
				this.commentsList =  []
				this.page = 1 
				this.loading = 'loading'
				// console.log(formdata);
				uni.showLoading()
				this.$api.update_comment(formdata).then((res)=>{
					console.log(res);
					uni.hideLoading()
					uni.showToast({
						title:'评论发布成功'
					})
					this.getComments()
					this.close()
					this.replyFormData = {}
				})
			},
		}
	}
</script>

<style lang="scss">
	.comments-content {
		padding: 0 15px;
	}
	.popup-wrap{
		background-color: #fff;
		width:100%;
		.popup-header {
			display:flex;
			justify-content: space-between;
			font-size:14px;
			color:#666;
			border-bottom:1px #f5f5f5 solid;
			.popup-header__item {
				height:50px;
				line-height:50px;
				padding:0 15px;
			}
		}
		.popup-content{
		width:100%;
		padding:15px;
		box-sizing: border-box;
		.popup-textarea{
			width:100%;
			height:200px;
			color:#666;
		}
		.popup-count{
			display: flex;
			justify-content: flex-end;
			font-size: 12px;
			color:#999;
		}
	}
	}
</style>
