// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import front_page from '../pages/front_page.vue'
import product from '../pages/product.vue'
import homepage from '../pages/homepage.vue'
import order_center from '../components/order_center.vue'
import person_center from '../components/person_center.vue'
import collection_center from '../components/collection_center.vue'
import resign_center from '../components/resign_center.vue'
import cart_success from '../pages/cart_success_page.vue'
import cart_calc from '../pages/cart_calc.vue'

import { proxyRefs } from 'vue'

//引入组件
let ret=new VueRouter({
	routes: [
		{
			name: 'front_page',
			path: '/',
			component: front_page
		},
		{
			name: 'product',
			path: '/product',
			component: product,
		},
		{
			name:'cart_success',
			path:'/cart_success',
			component:cart_success
		},
		{
			name:'cart_calc',
			path:'/cart_calc',
			component:cart_calc
		},
		{
			name: 'homepage',
			path: '/homepage',
			component: homepage,
			
			redirect: {
				name: 'order_center'
			},
			children: [
				{
					name: 'order_center',
					path: 'order_center',
					component: order_center
				},
				{
					name: 'person_center',
					path: 'person_center',
					component: person_center
				},
				{
					name: 'collection_center',
					path: 'collection_center',
					component: collection_center
				},
				{
					name: 'resign_center',
					path: 'resign_center',
					component: resign_center

				}
			]
		}
	]
})
// ret.beforeEach((to, from,next) => {
// 	// ...
// 	// 返回 false 以取消导航
// 	debugger
// 	console.log('global keeper:@@',to)
// 	next()
//   })
export default ret