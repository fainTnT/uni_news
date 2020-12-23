import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据源
	state:{
		historyList:uni.getStorageSync("__history")||[],
		userInfo:uni.getStorageSync("USERINFO")||{},
	},
	mutations:{
		SET_USER_INFO(state,userInfo){
			state.userInfo = userInfo
		},
		SET_HISTORY_LIST(state,history){
			state.historyList = history;
		},
		CLEAR_HISTORY(state){
			state.historyList = []
		}
	},
	actions:{
		set_userInfo({commit},userInfo){
			uni.setStorageSync('USERINFO',userInfo);
			commit('SET_USER_INFO',userInfo)
		},
		set_history({commit,state},history){
			let list = state.historyList;
			list.unshift(history)
			uni.setStorageSync("__history",list)
			commit('SET_HISTORY_LIST',list)
		},
		clear_history({commit,state}){
			uni.removeStorageSync("__history")
			commit('CLEAR_HISTORY')
		}
	}
})

export default store