<template>
	<div id="app">
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
	::-webkit-scrollbar { display: block; }
	#app,body,html{ width: 100%; height: 100%; overflow: hidden;}
</style>