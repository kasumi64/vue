<template>
	<div class="H-bar">
		<slot name='chartTitle'></slot>
		<div>两种方式：{{param}} {{param1}}</div>
		<div :id="id" :option="option"></div>
	</div>
</template>

<script>
import HighCharts from 'highcharts';

	var that;
	_vm.$on('HChart',function (e){
		that.param1 = e;
	});
	
	export default {
		name: 'H-bar',
		data() {
			return {
				param1: ''
			};
		},
		// 验证类型
		props: {
			param:'',
			id: {
				type: String
			},
			option: {
				type: Object
			}
		},
		mounted() {
			that = this;
			HighCharts.chart(this.id, this.option);
		}
	};
</script>

<style>
	
</style>