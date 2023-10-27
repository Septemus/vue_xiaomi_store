//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	// modal(context,value) {
	setUserinfo(context, value) {
		context.commit('username', value.username)
		context.commit('userid', value.userid)
		if (value.avatar_path) context.commit('userid', value.avatar_path)

	}

	// }
}
//准备mutations——用于操作数据（state）
const mutations = {
	bc2top(state, value) {
		state.bc2top_show = value
		// console.log('commit received',value,state.bc2top_show)
	},
	modal(state, value) {
		state.modal = value
	},
	username(state, value) {
		state.username = value
	},
	userid(state, value) {
		state.userid = value
	},
	avatar(state, value) {
		debugger
		state.avatar_path = value
	},
	cart_list(state,value) {
		state.cart_list=value
	}
}
//准备state——用于存储数据
const state = {
	// sum:0 //当前的和
	bc2top_show: false,
	location_prefix: 'http://localhost:3000',
	opts_choosen: new Map(),
	modal: 0,
	username: null,
	userid: null,
	avatar_path: null,
	cart_list:[]
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})