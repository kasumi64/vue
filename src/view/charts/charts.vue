<style scoped="scoped">
	@import url('../../view/charts/charts.css');
</style>
<template>
	<div class="charts" >
		<button @click="jump">跳转</button>
		{{this.$store.state.count}}--{{this.$store.getters.computed}}
		<button @click="click">点击我可改变</button>
		<HChart :id="id" :option="option" :param='param'>
			<b slot='chartTitle' class="chartTitle">柱状图</b>
		</HChart>
	</div>
</template>

<script>
import HChart from '../../components/high_bar.vue'; // 导入chart组件
import options from '../../view/charts/charts.js'; // 导入chart组件模拟数据

	export default {
		name: 'charts',
		data() {
			let option = options.bar;
			return {
				id: 'test',
				option: option,
				param: '点击我可改变'
			};
		},
		methods:{
			jump(){
//				this.$store.state.count++;
//				this.$store.dispatch('aad');
				this.$store.commit('add', 5);
			},
			click(e){
				this.param = 'props传参';
				_vm.$emit('HChart', '观察者传参');
			}
		},
		mounted(){
			
			
		},
		components: {
			HChart
		}
	};
</script>