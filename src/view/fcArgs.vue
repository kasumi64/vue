<template>
	<div class="fcArgs">
		<h1>组件之间的传参</h1>
		<Child ref='child'>
			<h2 slot='h2'>同级组件</h2>
		</Child>
		<button @click="ck">fcArgs</button>
		<hr />
		<Father ref='father'>
			<h2 slot='h2'>父组件</h2>
		</Father>
	</div>
</template>

<script>
import Father from '../components/father.vue'; // 导入 父 组件
import Child from '../components/child.vue';   // 导入 子 组件

	export default {
		name: 'fcArgs',
		data() {
			return {
				param: 'fromFcArgs'
			};
		},
		methods:{
			ck(){
				_vm.$emit('观察者');
				this.$router.replace({path: '/charts'});
			}
		},
		mounted(){
			
		},
		components: {
			Father, Child
		}
	};
</script>

<style>
</style>