import Vue from 'vue';
import Axios from 'axios';
import kit	 from '../libs/kit.min.js';

const exp = {};

function MaskLayer(){
	var html = `<div class="maskLayer">
			<div class="el-loading-spinner panle">
				<svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
			</div>
		</div>`;
//			<p class="el-icon-loading"></p>
//			<p>loading...</p>
		
	var mask = kit(html);
	this.show = function(target){
		if(target){
			mask.css('position','absolute').appendTo(target);
		} else {
			mask.css('position','fixed').appendTo(kit.body());
		}
		return this;
	};
	this.loadClose = function(){
		mask.detach();
	};
}
const mask = new MaskLayer();
const loading = {
	loadShow(query){
		var target = kit(query);
		if(target.length){
			var layer = new MaskLayer();
			return layer.show(target);
		} else return mask.show();
	},
	loadClose(){ mask.loadClose(); }
};
kit.extend(exp, loading);

function ReqHttp(){
	
	var axios = Axios.create();
	axios.defaults.baseURL = 'http://127.0.0.1/json';
	
	// 添加请求拦截器
	axios.interceptors.request.use(function(config){
//		console.log('拦截器',config)
		
		return config;
	}, function(err){
		return Promise.reject(err);
	});
	// 添加响应拦截器
	axios.interceptors.response.use(function(response){
		return response;
	}, function(err){
		return Promise.reject(err);
	});
	
	this.http = function(params, fn, config, efn){
		return new Promise(function(resolve, reject){
			var option = {
				url: params.url,
				method: params.method || 'POST'
			};
			delete params.url;
			delete params.method;
			if(typeof(config)=="object"){
				for (let c in config) option[c] = confing[c];
			}
			if(option.method=='get') option.params = params;
			else option.data = params;
			
			axios(option).then(function(response){
				resolve(callback(response, fn));
			}).catch(function(e){
				reject(error(e, efn));
			});
		});
	};
	this.post = function (params, fn, args, efn){
		return new Promise(function(resolve, reject){
			var url = params.url;
			delete params.url;
			axios.post(url, params).then(function(res){
				resolve(callback(res, fn, args));
			}).catch(function (err) {
				reject(error(err, efn));
			});
		});
	};
	this.get = function (params, fn, args, efn){
		return new Promise(function(resolve, reject){
			var url = params.url;
			delete params.url;
			return axios.get(url, {params}).then(function(res){
				return callback(res, fn, args);
			}).catch(function (err) {
				error(err, efn);
			});
		});
	};
	function callback(res, fn, args){
		if(res.status != 200) return console.warn(res);
		var data = res.data;
		if(fn instanceof Function) fn(data, args);
		return data;
	}
	function error(e, fn){
//		console.trace(e); //async await
		if(fn instanceof Function) fn(e);
		return e;
	}
}

kit.extend(exp, new ReqHttp());

















export default exp;
