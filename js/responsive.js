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