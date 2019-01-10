<template>
	<div class="elui">
		<button class="blueBtn" @click="click1">点击</button>
		<button class="defBtn" @click="click2">点击</button>
		<el-autocomplete v-model="inputs" :fetch-suggestions="fetch" placeholder="请输入内容">
			<div slot-scope="{ item }">
				<span class="item">{{ item.label }}</span>
		 	</div>
		</el-autocomplete>
		<el-select v-model="selects" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<!--<ul class="list">
			<li v-for="(item, i) in list"><span>{{i}}</span></li>
		</ul>-->
		<el-table :data= "list" @row-click="tableCK" :row-class-name="rowClass" :row-style="highlight">
			<el-table-column type="index" width="360">
			 	<template slot-scope="scope">
			 		<button class="blueBtn" @click="tableCK(scope.row)">操作</button>
			 	</template>
		    </el-table-column>
		</el-table>
	</div>
</template>

<script>
import utils from '../libs/utils.js';
import Vue from 'vue';

var data = {
	inputs: '',
	selects: '',
	list: [],
	options: [
		{ value: '黄金糕', label: '黄金糕' }, 
		{ value: '双皮奶', label: '双皮奶' }, 
		{ value: '蚵仔煎', label: '蚵仔煎' }, 
		{ value: '龙须面', label: '龙须面' },
		{ value: '北京烤鸭', label: '北京烤鸭' }
	],
	getIndex: '',
};
var vm = new Vue();
var loading
export default {
	name: 'elui',
	data() { return data; },
	methods:{
		fetch(str, cb){
			cb(this.options)
		},
		click1: async function cl(e){
//			loading = utils.loadShow('.el-autocomplete');
//			vm.$loading();
		
//			asyncTest();
			
		},
		click2: function cl(e){
			/*utils.loadShow('.e');
			if(loading) loading.loadClose();
			setTimeout(function(){
				utils.loadClose()
			},2000);*/
		},
		tableCK(row){
			this.getIndex = row.index;
		},
		rowClass({row, rowIndex}){
//			row.index = rowIndex;
			if(rowIndex%2!=0) return 'bgli';
		},
		highlight({row, rowIndex}){
			if ((this.getIndex) === rowIndex ) {
				return {"background-color": "rgb(250, 195, 100)"};
			}
		}
	},
	mounted(){
		var list = [];
		for (let i = 0; i < 14; i++) {
			list[i] = {index: i}
		}
		this.list = list;
	}
};
async function asyncTest(){
		
	var a= await utils.post({
		cmd:'10001',
		method: 'get'
	}, function(data){
		console.log('data',data);
	}).then(function(e){
		console.log('then',e);
		return e;
	}).catch(function(e){
		console.log('e',e)
		return 'e'+e
	})
	console.log('a', a);
	
	var a= await wait().catch(e=>{
		console.log(e)
	})
		
}
function wait(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			reject('resolve'+Math.ceil(Math.random()*10) );
		}, 3000);
	});
}
</script>
<style scoped="scoped">
	.elui{
		/*height: 90%;
		position: absolute;
		right: 0;
		top: 50px;
		bottom: 0;
		width: auto;
		box-sizing: border-box;
		overflow-y: auto;*/
	}
	.item{font-size: 16px;}
	.list{margin-top: 20px;border-top: 1px solid #DCDCDC;}
	.list li{font-size: 16px;line-height: 30px;border-bottom: 1px solid #DCDCDC;padding-left: 20px;}
	ul,li,ol{list-style: none;padding: 0;margin: 0;}
</style>
<style>
	.el-table .bgli{background: #E6F1FE;font-size: 34px;}
	.el-table .el-table__header-wrapper .has-gutter th{background: #E6F1FE;}
	.el-table .el-table__body tr:hover>td,.el-table .el-table__body tr.current-row>td{ background: initial !important; }
	.el-table__empty-block{display: block;width: 100% !important;}
</style>