
//添加头部手机跟平板的点击事件

// var headerNode = document.getElementsByTagName('header')[0];
// var headerBtnArr = headerNode.getElementsByTagName('button');

// for(var i = 0;i<2;i++){
// 	//切换样式
// 	 (function(i){
//         headerBtnArr[i].onclick = function(){
// 			headerBtnArr[0].setAttribute('class','');
// 			headerBtnArr[1].setAttribute('class','');
// 			headerBtnArr[i].setAttribute('class','header_btn_active');
// 		}
//     })(i);	
// }

new Vue({
	el:'#park',
	data:{
		brand:[],
		isScroActive:0,
		model:[],
		isBtnActive:0,
		isShow:0,
		bgP: -.14
	},
	methods:{
		brandA(){
			var _this = this ;
			var URL = 'http://localhost/-/php/brand.php';			
			_this.$http({
				url:URL
			}).then(function(res){
				_this.brand = res.data.brand;
			});
		},
		modelA(brand){
			var _this = this ;
			var URLModel = 'http://localhost/-/php/model.php';
			_this.$http({
				url:URLModel,
				data:{
					brand : brand
				}
			}).then(function(res){
				var arr = [];
				for(var i=0;i<res.data.length;i++){
					arr.push(res.data[i][0]);
					_this.model = arr ;
				}
			})
		},			
		clickIpadPark(){
			var _this = this ;
			var URL = 'http://localhost/-/php/brandiPAD.php'			
			_this.$http({
				url:URL
			}).then(function(res){
				_this.brand = res.data.brand;
			});
			_this.modelA("ipad");
			_this.isBtnActive = 1 ;
		},
		isScroA(index){
			var _this = this ;
			//控制点击后样式变换
			_this.isScroActive = index ;
			//发送请求
			var brand = _this.brand[index];
			_this.modelA(brand);
			//遮罩层
			_this.isShow = 1;
			var count = 0 ;
			var timer = setInterval(function(){
				count++;
				_this.bgP = -.14 + -.32*count;
//				_this.bgP = (.14 + .32*count)*-1
				if(count==8){
					_this.isShow = 0;
					clearInterval(timer)
				}
			},100)
//			setTimeout(function(){
//				this.isShow = 1;
//			},1000)
		},
		init(){
			var _this = this;
			_this.isBtnActive = 0 ;
			_this.isScroActive = 0;
			_this.brandA();
			_this.modelA('iphone');
		}
	},
	created:function(){		
		this.init();
	}

})

setTimeout(function(){

	mui('#scroll_left').scroll({
		indicators: false,
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	mui('#scroll_right').scroll({
		indicators: false,
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
},500)


