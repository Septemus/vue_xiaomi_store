//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
const default_avatar = `/images/users/default.png`
//准备actions——用于响应组件中的动作
const actions = {
	// modal(context,value) {
	stateModalShow(context, value) {
		// context.commit('SMD', value.description)
		// context.commit('SMCB',value.cb)
		this.$vue._root = this.$vue
		this.$vue.$bvModal.show.apply(this.$vue, ['stateModal'])
		let _this = this
		value.cb().then((res) => {
			console.log(res)
			context.commit('SMD', res)
			setTimeout(()=>{
				_this.$vue.$bvModal.hide.apply(_this.$vue, ['stateModal'])
				context.commit('SMD', null)
			},2000)
		})
	},
	setUserinfo(context, value) {
		console.log('set user info:@@')
		context.commit('username', value.uname ? value.uname : value.uid)
		context.commit('userid', value.uid)
		if (value.avatar_path) context.commit('avatar', value.avatar_path)
		else {
			context.commit('avatar', default_avatar)
		}
		context.commit('default_addr', value.default_addr)
		context.commit('default_phone', value.default_phone)

		context.commit('gender', value.gender)

		context.commit('realname',value.realname)
	},
	// upload2Server(context,value) {

	// },
	modal(context, value) {
		// this._vm.$root.$emit('bv::show::modal', 'myModal');
		debugger
		this.$vue._root = this.$vue
		this.$vue.$bvModal.show.apply(this.$vue, ['myModal'])
		context.commit('modal', value)
	}


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
		// debugger
		state.avatar_path = value
	},
	realname(state,value) {
		state.realname=value
	},
	default_addr(state, value) {
		state.default_addr = value
	},
	default_phone(state, value) {
		state.default_phone = value
	},
	gender(state, value) {
		state.gender = value
	},
	cart_list(state, value) {
		state.cart_list = value
	},
	SMD(state, value) {
		state.stateModalDescription = value
	},
	select_list(state,value) {
		state.select_list=value
	},
	realname(state,value) {
		state.realname=value
	}
	// SMCB(state, value) {
	// 	state.stateModalCb = value
	// }
}
//准备state——用于存储数据
const state = {
	// sum:0 //当前的和
	bc2top_show: false,
	location_prefix: 'http://122.51.116.11:3000',
	opts_choosen: new Map(),
	modal: 0,
	username: null,
	userid: null,
	avatar_path: null,
	default_addr: null,
	default_phone: null,
	gender: null,
	realname:null,
	cart_list: [],
	stateModalDescription: null,
	select_list:null,
	realname:null
	// stateModalCb: null
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})