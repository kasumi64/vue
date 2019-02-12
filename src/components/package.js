import Vue from 'vue';
import ElementUI from 'element-ui';
import '../css/initTag.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../css/common.css';
import axios from 'axios';
import kit from '../libs/kit.min.js';


Vue.use(ElementUI);
Vue.prototype.$axios = axios;

Vue.component("lgy-candidateWords", resolve => require(['./lgy-candidateWords.vue'], resolve));
Vue.component("lgy-review", resolve => require(['./lgy-review.vue'], resolve));
Vue.component("lgy-wheelReq", resolve => require(['./lgy-wheelReq.vue'], resolve));

