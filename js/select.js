
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
		isBtnActive:0
	},
	methods:{
		brandA(){
			var URL = 'http://localhost/-/php/brand.php';			
			this.$http({
				url:URL
			}).then(function(res){
				this.brand = res.data.brand;
			});
		},
		modelA(brand){
			var URLModel = 'http://localhost/-/php/model.php';
			this.$http({
				url:URLModel,
				data:{
					brand : brand
				}
			}).then(function(res){
				var arr = [];
				for(var i=0;i<res.data.length;i++){
					arr.push(res.data[i][0]);
					this.model = arr ;
				}
			})
		},			
		clickIpadPark(){
			var URL = 'http://localhost/-/php/brandiPAD.php'			
			this.$http({
				url:URL
			}).then(function(res){
				this.brand = res.data.brand;
			});
			this.modelA("ipad");
			this.isBtnActive = 1 ;
		},
		isScroA(index){
			//控制点击后样式变换
			this.isScroActive = index ;
			var brand = this.brand[index];
			this.modelA(brand);
		},
		init(){
			this.isBtnActive = 0 ;
			this.isScroActive = 0;
			this.brandA();
			this.modelA('iphone');
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

