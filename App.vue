<script>
	export default {
		onLaunch: function() {
			this.$api.get_user({
				user_id:"5fd8a26b1ee4f5000186ae23"
			}).then(res=>{
				const {data} = res;
				this.$store.dispatch('set_userInfo',data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css';
</style>
