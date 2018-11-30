<template>
	<div class="lgy-list">
		<el-table :data="tableData" style="width: 100%;overflow: auto;" :row-class-name="tableRowClassName">
			<el-table-column v-for="(obj, k) in title" :prop="k" :label="obj" key>
			</el-table-column>
			
			<!--<el-table-column v-if="custom" v-for="obj in custom" :label="obj.label" key>
				<div v-for="o in obj.html" v-html="o.nodes" @click="o.click(scope.row,scope.$index,scope)" slot-scope="scope" key></div>
			</el-table-column>-->
			
			<el-table-column v-if="custom" :label="customLabel" key>
				<div v-for="o in custom" v-html="o.nodes" @click="o.click(scope.row,scope.$index,scope)" slot-scope="scope" key></div>
			</el-table-column>
		</el-table>
		<!--<div class="paging">
			<el-pagination layout="prev, pager, next, jumper, total" :page-size="size" :total="total"
				@current-change="change" :current-page.sync="currentPage">
			</el-pagination>
			<div class="onePage">已显示全部10条数据</div>
		</div>-->
		<paging></paging>
		<!--<my>ASDF</my>-->
	</div>
</template>

<script>
	export default require('./lgy-list.js');
</script>

<style>
	.lgy-list{text-align: left;}
	
	
	
	
	.lgy-list .paging{padding: 20px 0;text-align: left;}
	.lgy-list .paging .el-pagination,.lgy-list .paging .total{display: inline-block;vertical-align: middle;}
	.lgy-list .paging .btn-next,.lgy-list .paging .btn-prev,.lgy-list .paging .more,
	.lgy-list .paging .number{margin: 0;padding: 0;color: #7388A7;border: 1px solid #D7D8DA;border-width: 1px 1px 1px 0;font-weight: 500;}
	.lgy-list .paging .btn-prev{border-width: 1px;}
	.lgy-list .paging .number.active{box-shadow: 0 2px 4px 0 rgba(0,0,0,.2) inset;}
	.lgy-list .paging .el-pagination__total{margin-left: 24px;color: #999;}
	.lgy-list .paging .onePage{font-size: 13px;line-height: 28px;text-align: center;color: #999;}
</style>