

new Vue({
	el:"#box",
	data:{
		history:[],
		text:''
	},
	methods:{
		subInfo(){
			var str = localStorage.getItem('history');
			var arr =[];
			if(str == '' || str == null){
				arr = [];
			}else{
				arr = JSON.parse(str);
			}
			var text = this.text;
			if(text == ''){
				return;
			}
			arr.push(text);
			var str = JSON.stringify(arr);
			localStorage.setItem('history',str);	
			this.history = arr ;
			this.text ='';	
		},
		clearRecord(){
			
			localStorage.setItem('history','');

			this.history = [];
		}
	},
	//钩子函数，DOM加载完成
	created(){
		// var history = localStorage.getItem('history');
		// var arr = history=='' ? []:JSON.parse(history);
		// this.history = arr ;
		// alert(history=='');	
		var str = localStorage.getItem('history');
		var arr = str==''?[]:JSON.parse(str);
		this.history = arr ;
	}
})










