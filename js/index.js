//自适应的调配      
(function (doc, win) {    
    var docEl = doc.documentElement,    
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',    
    recalc = function () {    
	    var clientWidth = docEl.clientWidth;    
	    if (!clientWidth) return; 
	    if(clientWidth>=740){	  
		    docEl.style.fontSize = 100 + 'px';   		    
	    }
	    if(clientWidth<740&&clientWidth>320){
	    	docEl.style.fontSize = 100*clientWidth/740 + 'px';   
	    }
	    if(clientWidth<=320){	    	
		    docEl.style.fontSize = 100*320/740 + 'px';   		    
	    }
	};    
	if (!doc.addEventListener) return;    
	win.addEventListener(resizeEvt, recalc, false);    
	doc.addEventListener('DOMContentLoaded', recalc, false); 
})(document, window); 

//点击服务切换窗口
var serBoxNode = document.getElementById('serBox');

function changeH(n){
	for(var i = 0;i<serBoxNode.children.length;i++){
		serBoxNode.children[i].style.display = 'none';
		serBoxNode.children[n].style.display = 'block';
		if(n == 0){
			serBoxNode.style.height = "1.8rem";
		}else{
			serBoxNode.style.height = "1.5rem";
		}
	}
}
		
//点击显示模态框
var btnNode = document.querySelector("#coverShow");
var coverNode = document.querySelector("#cover");
var coverListNode = document.querySelector("#cover_list");
var count = 0;
var client = 0 ;
client = window.screen.width ;

btnNode.onclick = function(){
	count++;
	if(count%2){
		coverNode.style.display = 'block';
		coverListNode.style.display = 'block';
//		document.documentElement.style.height = client+ 'px';
		document.documentElement.style.overflow = "hidden";
	}else{
		coverNode.style.display = 'none';
		coverListNode.style.display = 'none'; 
		document.documentElement.style.overflow = "initial";
	}	
}


