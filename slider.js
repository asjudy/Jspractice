var slider=function(){
	var container=document.querySelector('#j-ad');
	var adimg=container.getElementsByTagName('a');
	var numlist=container.querySelectorAll('.num>li');
	
	this.animate=function(startPos,endPos){
	var isrolling=true;
	var part=(endPos-startPos)/20;
	var temPos=startPos;
	var timer=setInterval(function(){
		temPos+=part;
		adimg.style.top=temPos+'px';
		if(temPos==endPos){clearInterval(timer);isrolling=false;}
	},30);
	}
	this.rolling=function(){
		
	}
	setTimeout(this.animate(),1000);
}
slider();
