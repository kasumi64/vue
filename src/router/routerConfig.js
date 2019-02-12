import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
	routes: [{
			path: '/',
			name: '/',
			component: resolve => require(['../view/home.vue'], resolve),
			meta: {auth: '权限设置'}
		},
		{
			path: '/charts',
			name: 'charts',
			component: resolve => require(['../view/charts/charts.vue'], resolve)
		},
		{
			path: '/fcArgs',
			name: 'fcArgs',
			component: resolve => require(['../view/fcArgs.vue'], resolve)
		},
		/*{
			path: '/table',
			name: 'table',
			component: resolve => require(['../view/table.vue'], resolve)
		},*/
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: resolve => require(['../components/HelloWorld.vue'], resolve)
		},
		{
			path: '/home',
			name: 'home',
			component: resolve => require(['../view/home.vue'], resolve),
			children: [
				{
					path: '/elui',
					component: resolve => require(['@/view/elui.vue'], resolve)
				}
			]
		}
		
	]
});

router.beforeEach(function(to, from, next){
	next();
//	let k = to.meta.auth;
//	router.replace({path: '/404'});
});

export default router;