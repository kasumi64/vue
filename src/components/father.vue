<template>
	<div class="father">
		<slot name='h2'></slot>
		<button @click="ck">father</button>
		<Child ref='child' :params='param'>
			<h2 slot='h2'>子组件</h2>
		</Child>
	</div>
</template>

<script>
import Child from '../components/child.vue';   // 导入 子 组件

	_vm.$on('观察者', function(str){
		_vm.$emit('观察者child', '观察者 father');
	});
	_vm.$on('观察者father', function(str){
		console.log(str)
	});
	
	export default {
		name: 'father',
		data() {
			return {
				param: 'fromFather',
				msg: 'father MSG'
			};
		},
		props: {
			
		},
		methods: {
			ck(){
				this.$refs.child.run('父Get子');
			},
			run(s){
				console.log('获取组件方法：',s);
			}
		},
		destroyed(){
			
		},
		components: {Child}
	};
</script>

<style>
</style>