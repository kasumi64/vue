// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import './css/initTag.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import axios from 'axios';
import kit from './libs/kit.min.js';
import store from './libs/store.js';


Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
window._vm = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})