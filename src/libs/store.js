import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = {
	aaa:'ABC'
};

const state = {
	store,
	count: 1
};
const mutations = {
	add(state, val){
//		alert(a)
		++state.count;
	}
};
const getters = { //computed
	computed(state){
		return state.count + 2;
	}
};
const actions = {
	aad(context){
		context.commit('add');
	}
};

export default new Vuex.Store({
	state, mutations,
	getters, actions,
	module: {}
});
