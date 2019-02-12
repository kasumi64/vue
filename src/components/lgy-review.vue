<style>
.lgy-review{display: none;}
.lgy-review .reviewLayer{padding: 50px 0;}
.lgy-review .reviewLayer li:first-child{margin-bottom: 20px;}
.lgy-review .label{width: 180px;font-size: 14px;color:#666;line-height: 30px;padding-right: 10px;text-align: right;vertical-align: top;}
.lgy-review .input{width: 260px;vertical-align: top;}
</style>

<template>
	<div class="lgy-review" :class="{show:show}">
		<div ref='lgy-review' class="maskLayer">
			<div class="tipsPanle">
				<div class="title">
					<b>复核操作</b>
				</div>
				<ul class="reviewLayer">
					<li>
						<span class="label">复核操作员：</span>
						<input v-model="name" class="input" />
					</li><li>
						<span class="label">复核员密码：</span>
						<input v-model="pwd" class="input" type="password"/>
					</li>
				</ul>
				<div class="footBtn">
					<button @click="reviewHandle(review)" class="blueBtn ok">确定</button>
					<button @click="cancel" class="defBtn cancel">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import utils from '../libs/utils.js';

var _this, data = {
	name: '',
	pwd: ''
};
export default {
	name: 'lgy-review',
	data() { return data; },
	props: {
		show: {
			type: Boolean,
			default: false
		},
		review: {}, //复核参数
		txt: '' //弹框文本
	},
	methods:{
		async reviewHandle(param){
			if(this.name==utils.getArgs('accountInfo')) return utils.confirm({txt:'复核员不能是登陆用户!', btn:1});
			if(this.name==''||this.pwd=='') return utils.confirm({txt:'复核员或密码不能为空!', btn:1});
			let args = {
				url: 'file/auth/review',
				cmd: '10001',
				cmdID: '600112', //600112
				reviewer: this.name,
//				password: md5.hex_md5(this.pwd),
				language: utils.getArgs('lang')
			}, uri = '/fbcs_file/';
			if(kit.isFn(param)) param = param();
			if(kit.isObject(param)){
				for (let k in param) { args[k] = param[k] };
			}
			args.uri = uri + (args.uri||'');
			
			let res = await utils.post(args);
			if(!res) return;
			if(res.errcode != '0') return utils.alert({txt:res.errinfo, type:0});
			
			utils.confirm({
				ok: name => { _this.$emit('submit', {name}); },
				txt: _this.txt || '是否要提交！'
			}, {ok: _this.name});
			this.cancel();
		},
		cancel(e){
			this.$emit('update:show', false);
			this.name = this.pwd = '';
		}
	},
	created(){
		_this = this;
		this.cancel();
	},
	mounted(){
		utils.addDrag(this.$refs['lgy-review'],'.title','.tipsPanle');
	}
};
</script>
