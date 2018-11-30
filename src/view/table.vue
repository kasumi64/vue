<template>
	<div class="myTable">
		<lgy-list :custom="custom" :tableData="list" :title="title" :total="30" :tableRowClassName="tableRowClassName">
		</lgy-list>
	</div>
</template>

<script>
import lgyList from '../components/lgy-list.vue';
var src = require('../img/logo.png');

	var data = {
		list:[
			{id:'001',name:'张三',address:'ABC'},
			{id:'002',name:'李四',address:'999'},
			{id:'003',name:'王五',address:'yui'}
		],
		title:{
			id:'ID', name: '姓名', address: '地址'
		},
//		custom: [
//			{label:'操作', html:[{nodes: `<img class="icon" src="${src}" alt="" />`, click:function(d,i){console.log(d,i)} }] },
//		],
		custom: [
			{label:'操作', nodes: `<img class="icon" src="${src}" alt="" />`, click:function(d,i){console.log(d,i)} },
		],
	};
	export default {
		data(){
			return data;
		},
		methods: {
			tableRowClassName({row, rowIndex}){
				if(rowIndex%2 == 0) return 'bg'
				return '';
			}
		},
		created(){
			
		},
		mounted(){
			
		},
		components: {
			'lgy-list':lgyList
		}
	};
</script>
	
<style scoped="scoped">
	.btn{border: 1px solid #42B983;padding: 3px 5px;border-radius: 4px;}
	hr{margin-top: 10px;}
</style>
<style>
	.myTable .bg{background: #f5f7fa;}
	.icon{width: 16px;height: 16px;}
</style>