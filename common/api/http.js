import store from '../../store/index.js'


export default function $http(options){
	const dataObj = {
		user_id:store.state.userInfo._id,
		...options.data
	}
	return new Promise((resolve,reject) => {
		uniCloud.callFunction({
			name:options.name,
			data:dataObj
		}).then(res=>{
			if(res.result.code == 200){
				resolve(res.result)
			}else{
				reject(res.result)
			}
		}).catch(err => {
			reject(err)
		})
	})
}