<template>
	<div id="app">
		<HChart :id="id" :option="option"></HChart>
	</div>
</template>

<script>
import HChart from '../components/high_bar.vue'; // 导入chart组件
import options from '../view/charts.js'; // 导入chart组件模拟数据

	export default {
		name: 'charts',
		data() {
			let option = options.bar;
			return {
				id: 'test',
				option: option
			};
		},
		components: {
			HChart
		}
	};
</script>

<style>
	#test { width: 400px; height: 400px; margin: 40px auto; }
</style>