mui('#scroll_left').scroll({
	indicators: false,
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
mui('#scroll_right').scroll({
	indicators: false,
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

//var docEHeight = document.documentElement.clientHeight;
//var headerH = parseInt(document.defaultView.getComputedStyle(headerNode,null).height);
//console.log(headerH);
//var scroWrapArr = document.getElementsByClassName('mui-scroll-wrapper');
//for(var i = 0 ; i<2 ; i++){
//	scroWrapArr[i].style.height = docEHeight +'px'; 
//}







