<style>
.lgy-wheelReq{display: none;}
</style>

<template>
	<div class="lgy-wheelReq" :class="{show:show}">
		<div class="maskLayer">
			<div class="el-loading-spinner loadPanle">
				<svg viewBox="25 25 50 50" class="circular">
					<circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import utils from '../libs/utils.js';

var _this, data = {
	show: false
};

function WheelReq(sv){
	var beginTime = 0, overTime = 30*1000, timeout = false;
	function req(){
		let param = {
			url: 'WheelReq',
			cmd: '10001',
			cmdID: '600073', uuid: sv.uuid,
			type: sv.type || 0,
			lastQueryFlag: 0 //1最后一次，0不是
		};
		if(Date.now()-beginTime >= overTime){
			param.lastQueryFlag = 1;
			timeout = true;
		}
		utils.post(param, response);
	}
	function response(res){
		if(res.lastQueryFlag != 0&&!timeout){
			return setTimeout(req, 2000);
		}
		stop();
	}
	function stop(){
		_this.show = false;
	}
	this.start = function(){
		beginTime = Date.now();
		_this.show = true;
		req();
	}
}

export default {
	name: 'lgy-review',
	data() { return data; },
	props: {
		parameter: {} //轮询参数
	},
	methods:{},
	created(){
		_this = this;
		this.show = false;
	},
	watch: {
		parameter(param){
			let w = new WheelReq(param);
			w.start();
		}
	}
};

</script>
