<template>
	<div class="lgy-table">
		<el-table ref="lgy-table" :data= "list" @row-click="rowClick" @current-change="currentRow" @sort-change="sortChange" :row-class-name="rowClass" 
			@select="select" @select-all="selectAll" @selection-change="selectChange" highlight-current-row border>
			<el-table-column v-if="index" type="index" width="55" key></el-table-column>
			<el-table-column v-if="selection" type="selection" width="55" key></el-table-column>
			<el-table-column :sortable="isSort(k)" v-for="(val, k) in title" :prop="k" :label="val" :key="k"></el-table-column>
			<el-table-column v-if="defined" :label="defined.label" :width="defined.width">
				<div class="custom" slot-scope="scope">
					<div class="operate" v-for="(obj, k) in defined.items" :title="obj.tips" :key="k" 
						@click="operateClick(obj.click,scope.row,scope)">
						<img class="icon" src="../img/logo.png" alt="" />
					</div>
				</div>
			</el-table-column>
		</el-table>
		<div class="paging">
			<el-pagination v-if="total>size" layout="prev, pager, next, jumper, total" :page-size="size" :total="total"
				@current-change="changePage" :current-page.sync="currentPage">
			</el-pagination>
			<div v-if="total<=size" class="onePage">已显示全部{{total}}条数据</div>
		</div>
	</div>
</template>

<script>

var _this, data = {
	currRow: ''
};


export default {
	name: 'lgy-table',
	data() { return data; },
	props: {
		index: false,
		selection: false,
		list: [],
		title: {}, //与list的字段相同
		defined: {
			type: Object,
			default: null
		},//{ defined 的结构
//			label:'操作', width: "80px",
//			items: [{src:"../img/logo.png", click:function(d,i){console.log(d,i)}, tips: '修改' },]
//		}
		sortable: { //与list的字段相同
			type: Object,
			default: {}
		},
		size: {
			type: Number,
			default: 20
		},
		total: {
			type: Number,
			default: 0
		},
		'currentPage': {
			type: Number,
			default: 1
		}
	},
	methods:{
		rowClass({row, rowIndex}){
			if(rowIndex%2 != 0) return 'bg';
			return '';
		},
		rowClick(row, e, column){
			this.$emit('row-click', row, e, column);
		},
		currentRow(currentRow, oldCurrentRow){
			this.currRow = currentRow;
			this.$emit('currentRow', currentRow, oldCurrentRow);
		},
		isSort(k){
			return this.sortable[k]?'custom':false
		},
		sortChange({column, prop, order}){
			this.$emit('sortChange', column, prop, order);
		},
		operateClick(fn, row, scope){
			fn(row, scope);
		},
		selectChange(arr){
			this.$emit('selectChange', arr);
		},
		select(arr, row){
			this.$emit('select', arr, row);
		},
		selectAll(arr){
			this.$emit('selectAll', arr);
		},
		changePage(num){ //当前页
			this.$emit('update:currentPage', num);
			this.$emit('changePage', num);
		}
	},
	created(){
		_this = this;
	},
	watch: {}
};

</script>

<style scoped="scoped">
	.custom{line-height: 0;}
	.operate{display: inline-block;margin-right: 10px;vertical-align: middle;}
	.icon{width: 16px;height: 16px;}
	/*<lgy-list :index="true" :selection="true" :list="list" :title="title" :defined="custom" @row-click="rowClick" @currentRow="currentRow" 
		:sortable="sortable" @sortChange="sortChange" :size="10" :total="60" :currentPage.sync="page1" @changePage="changePage1" >
	</lgy-list>*/
</style>
