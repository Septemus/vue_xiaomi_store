// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import front_page from '../pages/front_page.vue'
import product from '../pages/product.vue'
import { proxyRefs } from 'vue'

//引入组件

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'front_page',
			path:'/',
			component:front_page
		},
		{
			name:'product',
			path:'/product',
			component:product
		}
	]
})
