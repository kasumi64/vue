<template>
	<div id="app">
		<progress ></progress>
		<HChart :id="id" :option="option"></HChart>
	</div>
	
</template>

<script>
	import HChart from '../components/high_bar.vue'; // 导入chart组件
//	export default {
//		name: 'charts',
//		data() {
//			let option = options.bar;
//			return {
//				id: 'test',
//				option: option
//			};
//		},
//		components: { HChart }
//	};
	export default require('./charts.js');
</script>

<style>
	#test { width: 400px; height: 400px; margin: 40px auto; }
	progress{ }
	progress::-webkit-progress-inner-element { border-radius: 4px; }
	progress::-webkit-progress-value { border-radius: 4px; background: red;}
	progress::-webkit-progress-bar { border-radius: 4px;background: transparent; } 
</style>