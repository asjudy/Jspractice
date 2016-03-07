var UntilTool={
	getEvent:function(event){
		return event ? event : window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	addElementListener:function(ele,type,handler){
		if(ele.addEventListener){
			ele.addEventListener(type,handler,false);
		}
		else if(ele.attachEvent){
			ele.attachEvent('on'+type,handler);
		}
		else{
			ele["on"+type]=handler;
		}
	},
	removeElementListener:function(ele,type,handler){
		if (ele.removeEventListener) {
			ele.removeEventListener(type,handler,false)
		}
		else if(ele.detachEvent){
			ele.detachEvent(type,handler);
		}else{
			ele["on"+type]=null;
		}
	},
	preventDefalt:function(event){
		if(event.preventDefalt){
			event.preventDefault();
		}
		else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
}