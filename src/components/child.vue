<template>
	<div class="child">
		<slot name='h2'></slot>
		<button @click="ck" v-if="this.$parent.run">child</button>
		<p v-if="params">父传子：{{params}}</p>
	</div>
</template>

<script>
	
	_vm.$on('观察者', function(str){
		_vm.$emit('观察者father', '观察者 child');
	});
	_vm.$on('观察者child', function(str){
		console.log(str)
	});
	
	export default {
		name: 'child',
		data() {
			return {
				msg: 'child MSG'
			};
		},
		props: {
			params: ''
		},
		methods:{
			ck(){
				this.$parent.run('子Get父');
			},
			run(s){
				console.log('获取组件方法：',s);
			}
		}
	};
</script>

<style>
</style>