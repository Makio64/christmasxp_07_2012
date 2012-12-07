var ClickMe = function()
{
	this.offsetX = -40;
	this.angle = 250;
	this.t = 0;
	this.clickImg = $('<img class="clickImg" src="img/arrow.png" />');
	this.clickText = $('<img class="clickImg" src="img/click.png" />');

	$("#texts").append(this.clickImg);
	$("#texts").append(this.clickText);

	this.update = function(dt){
		this.t += dt;
		this.distance = Math.sin(this.t/120)*5+160;
		this.clickText.css('opacity', .7+Math.abs(Math.cos(this.t/300))*.3);
		this.clickText.css('top',(Math.sin(this.angle/180*Math.PI)*210)+"px");
		this.clickText.css('left',(Math.cos(this.angle/180*Math.PI)*210)+"px");
		this.clickImg.css('top',(Math.sin(this.angle/180*Math.PI)*this.distance)+"px");
		this.clickImg.css('left',(Math.cos(this.angle/180*Math.PI)*this.distance)+"px");
	}

	this.init = function(){
		
	}

	this.init();
}

ClickMe.prototype.constructor = ClickMe;