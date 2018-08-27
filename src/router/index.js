import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: resolve => require(['../view/charts.vue'], resolve)
		},
		{
			path: '/charts',
			name: 'charts',
			component: resolve => require(['../view/charts.vue'], resolve)
		},
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
		}
	]
})