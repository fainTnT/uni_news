<template>
	<view class='icon' @click.stop='likeClick'>
		<uni-icons :type="isLike?'heart-filled':'heart'" color='#f07373' size='20'></uni-icons>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLike:false
			};
		},
		props:{
			types:{
				type:String,
				detault(){
					return ''
				}
			},
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		watch:{
			item(newVal){
				this.isLike = this.item.is_like;
			}
		},
		created(){
			 this.isLike = this.item.is_like;
		},
		methods:{
			likeClick(){
				this.isLike = !this.isLike; 
				this.updateLikes()
			},
			updateLikes(){
				uni.showLoading({
					
				})
				this.$api.update_likes({
					user_id:"5fd8a26b1ee4f5000186ae23",
					article_id:this.item._id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.isLike?'收藏成功':'取消收藏',
						icon:'none'
					})
					uni.$emit('update_article',this.types)
				}).catch(err=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
.icon {
				width:20px;
				height:20px;
				position: absolute;
				top:0;
				right:0;
			}
</style>
