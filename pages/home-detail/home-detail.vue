<template>
	<view class="detail">
		<view class="detail-title">
			{{formData.title}}
		</view>
		<view class="detail-header">
			<view class="detail-header__logo">
				<image :src="formData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="detail-header__content">
				<view class="detail-header__content-title">
					{{formData.author.author_name}}
				</view>
				<view class="detal-header__content-info">
					<text>{{formData.create_time}} </text>
					<text style='margin:0 5px'>{{formData.browse_count}}浏览</text>
					<text>{{formData.thumbs_up_count}}赞</text>
				</view>
			</view>
			<button class="detail-header__button" type="default" @click="follwAuthor(formData.author.id)">{{formData.is_author_like?'已关注':'关注'}}</button>
		</view>
		<view class="detail-content">
			<view class="detail-html">
				<u-parse :content="formData.content" :noData="noData"></u-parse>
			</view>
			<view class="detail-comment">
				<view class="comment-title">最新评论</view>
				<view class="comment-content" v-for="item in commentsList" :key="item.comment_id">
					<comments-box :comments="item"></comments-box>
				</view>
			</view>
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom__input" @click="openComment">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom__icons">
				<view class="detail-bottom__icons-box" @click="showComments">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom__icons-box" @click="addToLike(formData._id)">
					<uni-icons :type="formData.is_like?'heart-filled':'heart'" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom__icons-box" @click="addToThumbs(formData._id)">
					<uni-icons :type="formData.is_thumbs_up?'hand-thumbsup-filled':'hand-thumbsup'" size="22" color="#f07373"></uni-icons>
				</view> 
			</view>
		</view>
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
import uParse from '@/components/gaoyia-parse/parse.vue'
import popup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components:{
			uParse,
			popup
		},
		data() {
			return {
				formData:{},
				noData:'<p stye="text-align:center;color:#666">加载中....</p>',
				commentsList:[],
				showPopup:false,
				commentsValue:''
			}
		},
		onLoad(query) {
			this.formData = {};
			const data=JSON.parse(query.params);
			this.formData=data;
			this.getDetail();
			this.getComments()
		},
		methods: {
			// 请求评论内容
			getComments(){
				this.$api.get_comments({
					article_id: this.formData._id
				}).then(res=>{
					const {data} = res
					this.commentsList = data
				})
			},
			showComments(){
				uni.navigateTo({
					url:'/pages/detail-comments/detail-comments?id='+this.formData._id
				})
			},
			addToThumbs(id){
				this.setUpdateThumbs(id);
			},
			addToLike(id){
				this.setUpadteLike(id);
			},
			setUpdateThumbs(article_id){
				uni.showLoading()
				this.$api.update_thumbsup({
					article_id
				}).then(res=>{
					uni.hideLoading();
					if(!this.formData.is_thumbs_up){
						this.formData.is_thumbs_up=true;
						this.formData.thumbs_up_count++;
					}
					uni.showToast({
						title:res.msg
					})
				}).catch(err=>{
					uni.hideLoading();
				})
			},
			// 收藏文章 
			setUpadteLike(article_id){
				uni.showLoading()
				this.$api.update_likes({
					article_id
				}).then(res=>{
					uni.hideLoading()
					this.formData.is_like = !this.formData.is_like
					uni.$emit('update_article','follow')
					uni.showToast({
						title:this.formData.is_like ?'收藏成功':'取消收藏',
						icon:'none'
					})
					//console.log('收藏成功');
				}).catch(err=>{
					uni.hideLoading();
				})
			},
			follwAuthor(author_id){
				uni.showLoading();
				this.$api.update_author({
					author_id
				}).then(res=>{
					uni.hideLoading();
					this.formData.is_author_like = !this.formData.is_author_like;
					uni.showToast({
						title:this.formData.is_author_like?'关注作者成功':'取消关注作者',
						icon:'none'
					})
					uni.$emit("update_author")
				}).catch(err=>{
					uni.hideLoading();
				})
			},
			getDetail(){
				this.$api.get_detail({
				article_id: this.formData._id
				}).then(res=>{
					const {data} = res
					this.formData = data
				}).catch(err=>{
					console.log(err)
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
			// 发布
			submit(){
				if(!this.commentsValue){
					uni.showToast({
						title:'请输入评论内容',
						icon:'none'
					})
					return
				}
				this.setUpdateComment(this.commentsValue)
				this.commentsValue = '';
			},
			setUpdateComment(content){
				const formdata ={
					article_id:this.formData._id,
					content
				}
				// console.log(formdata);
				uni.showLoading()
				this.$api.update_comment(formdata).then((res)=>{
					uni.hideLoading()
					uni.showToast({
						title:'评论发布成功'
					})
					this.getComments()
					this.close()
				})
			},
		}
	}
</script>

<style lang='scss'>
	.detail{
		padding: 15px 0;
		padding-bottom: 54px;
	}
	.detail-title{
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333333;
	}
	
	.detail-header{
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;
		
		.detail-header__logo{
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.detail-header__content{
			width: 100%;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 12px;
			
			.detail-header__content-title{
				font-size: 14px;
				color: #333;
			}
			
			.detail-header__content-info{
				color: #999;
				text{
					margin-right: 10px;
				}
			}
		}
		.detail-header__button{
			padding: 0 15px;
			flex-shrink: 0;
			height: 30px;
			font-size: 12px;
			line-height: 30px;
			border-radius: 5px;
			color: #fff;
			background-color: $uni-color-base;
		}
	}
	
	.detail-content{
		margin-top: 20px;
		min-height: 500px;
		.detail-html {
			padding:0 15px;
		}
		.detail-comment {
			margin-top: 30px;
			.comment-title {
				padding: 10px 15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px #f5f5ff solid;
			}
			.comment-content {
				padding: 0 15px;
				width: 95%;
				border: 1px #eee solid;
			}
		}
	}
	
	.detail-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;
		
		.detail-bottom__input{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 10px;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px #ddd solid;
			border-radius: 5px;
			
			text{
				font-size: 14px;
				color: #999;
			}
		}
		
		.detail-bottom__icons{
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			
			.detail-bottom__icons-box{
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
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
