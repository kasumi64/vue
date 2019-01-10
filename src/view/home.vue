<template>
	<div class="home">
		<div class="nav">头部</div>
		<!--<div class="cw">-->
			<div class="sidebar">菜单</div>
			<div class="homeView">
				<div class="router">
					<router-view></router-view>
				</div>
			</div>
		<!--</div>-->
	</div>
</template>

<script>
var data = {
	
};
export default {
	name: 'elui',
	data() { return data; },
	methods:{
		
	},
	mounted(){
		this.$router.replace({path: '/elui'});
	}
};
</script>

<style>
	.home{height: 100%;}
	.cw{height: calc(100% - 50px);}
	.nav{height: 50px;background: #409eff;color: #FFF;text-align: center;line-height: 50px;z-index: 2;}
	.sidebar{display: none;position: fixed;width: 100px;height: calc(100% - 50px);top: 50px;left: 0;border: 1px solid salmon;background: #F0F7FF;}
	.homeView{height: calc(100% - 50px);overflow-y: auto;padding: 5px;background: #Edf0f5;}
	.router{background: #fff;padding: 5px;}
</style>