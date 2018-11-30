var that, data = {
	currentPage: 1,
	abc:['a','b','c']
};

module.exports = {
	name: 'lgy-list',
	data() {
		return data;
	},
	// 验证类型
	props: {
		tableData: {
			type: Array,
			default: []
		},
		title: {
			type: Object,
			default: {}
		},
		tableRowClassName: {
			type: Function,
			default: () => ''
		},
		update: {
			type: Function,
			default: () => {}
		},
		size: {
			type: Number,
			default: 20
		},
		total: {
			type: Number,
			default: 1
		},
		custom: {//自定义操作
			type: [Array,Object,null],
			default: null
		},
		customLabel: {//自定义操作txt
			type: String,
			default: '操作'
		},
		
	},
	methods:{
		
	},
	watch:{
		tableData(){
			console.log(45);
		}
	},
	render(create){
		console.log(create)
	},
	created(){
		that = this;
//		alert()
	},
	mounted() {
		this.currentPage = 1;
	},
	components: {
		paging: { //分布
			render(create){
				var self = this.$parent, vnode = this, slots = this.$slots;
				
				var clip, sprite =  create('div', {
					'class': {paging: 1},
				}, [/*slots.default*/]);
				
				if(self.total > self.size){
					clip = create('el-pagination', {
						attrs: {
							'layout': "prev, pager, next, jumper, total",
							'page-size': self.size,
							'total': self.total,
							'current-page.sync': self.currentPage
						},
						on: {
							'current-change': function(num){
	                    		self.update(num);
	                    	}
						},
					});
					sprite.children.push(clip);
				} else {
					clip = create('div', {
						'class': {onePage: 1},
						domProps:{innerHTML: `已显示全部${self.total}条数据`}
					});
					sprite.children.push(clip);
				}
				
				return sprite;
			}
		},
		my: {
			render(create){
				var self = this.$parent, slots = this.$slots;
				//slots.default
				return create('div', {
					attrs:{
						id:'abc'
					},
				}, [self.total]);;
			},
			props: {
				abc: {
                	default: 'ABC'
				}
			}
		}
		
	}
	
};