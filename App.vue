<script>
	export default {
		onLaunch: function() {
			this.$api.get_user({
				user_id:"8010388"
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
