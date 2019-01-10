<template>
	<div id="app">
		<!--<img src="./img/logo.png">-->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	};
//cnpm i element-ui -S
//npm view jquery versions
//npm info jquery
//npm ls jquery //本地版本号
</script>

<style>
	::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb { border-radius: 20px; border: 1px solid #F5F7FA; }
	::-webkit-scrollbar { width: 10px; height: 10px; display: block; }
	::-webkit-scrollbar-thumb { box-shadow: 1px 1px 0 1px rgba(0,0,0,.1) inset; background: rgba(0,0,0,.1);}
	/*#app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale; color: #2c3e50; margin-top: 10px; }*/
	#app,body,html{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>