var ClickMe = function(angle,state,offsetY)
{
	this.offsetX = -40;
	this.offsetY = offsetY || 0;
	this.angle = angle;
	this.t = 0;
	this.state = state;
	this.baseDistance = 170;
	this.clickImg = $('<img class="clickImg" src="img/arrow.png" />');
	console.log(Math.atan2(Math.sin(this.angle/180*Math.PI),Math.cos(this.angle/180*Math.PI)));
	TweenLite.to(this.clickImg,0,{css:{rotation:Math.atan2(Math.sin(this.angle/180*Math.PI),Math.cos(this.angle/180*Math.PI))*180/Math.PI +90}});
	this.haveText = state==0;

	if(this.haveText){
		this.clickText = $('<img class="clickImg" src="img/click.png" />');
		$("#texts").append(this.clickText);
		this.clickText.css('opacity', 0)
	}

	$("#texts").append(this.clickImg);
	TweenLite.from(this.clickImg,.8,{delay:.6,css:{opacity:0}});
	
	this.update = function(dt){
		if(this.state>=3){
			return;
		}
		this.t += dt;
		this.distance = Math.sin(this.t/120)*5+this.baseDistance;
		if(this.state==2){
			if(this.haveText){
				this.clickText.css('opacity', .7+Math.abs(Math.cos(this.t/300))*.3);
				this.clickText.css('top',(Math.sin(this.angle/180*Math.PI)*210)+"px");
				this.clickText.css('left',(Math.cos(this.angle/180*Math.PI)*210)+"px");
			}
		}
		this.clickImg.css('top',(Math.sin(this.angle/180*Math.PI)*this.distance+this.offsetY)+"px");
		this.clickImg.css('left',(Math.cos(this.angle/180*Math.PI)*this.distance)+"px");
	}

	this.activate = function(){
		TweenLite.to(this,.25,{baseDistance:100, ease:Quad.easeOut});
		TweenLite.to(this,.8,{delay:.3, baseDistance:170, ease:Back.easeOut});
	}

	this.onOpenComplete = function(bouboup){
		bouboup.state =2; 
	}

	this.onCloseComplete = function(bouboup){
		bouboup.state =3; 
	}

	this.open = function(){
		this.state=1;
		this.clickText.css('top',(Math.sin(this.angle/180*Math.PI)*210)+"px");
		this.clickText.css('left',(Math.cos(this.angle/180*Math.PI)*210)+"px");
		TweenLite.to(this.clickText,1.6,{css:{opacity:.7},onComplete:this.onOpenComplete,onCompleteParams:[this]});
	}

	this.close = function(){
		TweenLite.to(this,.25,{baseDistance:100, ease:Quad.easeOut});
		TweenLite.to(this,.8,{delay:.3, baseDistance:200, ease:Back.easeOut});
		TweenLite.to(this.clickImg,.8,{delay:.3, css:{opacity:0},onComplete:this.onCloseComplete,onCompleteParams:[this]});
	}

	this.init = function(){
		
	}

	this.init();
}

ClickMe.prototype.constructor = ClickMe;