// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './components/package.js';
import Vue from 'vue';
import router from './router/routerConfig.js';
import store from './libs/store.js';
import App from './App';

Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.debug = true;


/* eslint-disable no-new */
window._vm = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
//	render: h => h(App)
})