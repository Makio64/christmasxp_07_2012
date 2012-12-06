

var Cat = function(){

	this.t = 0;

	this.shadow = $("<img id='shadow' src='./img/shadow.png'/>");
	this.body = $("<img id='body' src='./img/body.png'/>");
	this.handLeft = $("<img id='handLeft' src='./img/hand_left.png'/>");
	this.ear2 = $("<img id='ear2' src='./img/ear2.png'/>");
	this.head = $("<img id='head' src='./img/head.png'/>");
	this.ear1 = $("<img id='ear1' src='./img/ear1.png'/>");
	this.mouth = $("<img id='mouth' src='./img/mouth.png'/>");
	this.mustache = $("<img id='mustache' src='./img/mustache.png'/>");
	this.handRight = $("<img id='handRight' src='./img/hand_right.png'/>");
	this.tail = $("<img id='tail' src='./img/tail.png'/>");
	this.eye1 = $("<img id='eye1' src='./img/eye1.png'/>");
	this.eye2 = $("<img id='eye2' src='./img/eye2.png'/>");

	$(".cat").append(this.shadow);
	$(".cat").append(this.body);
	$(".cat").append(this.handLeft);
	$(".cat").append(this.ear2);
	$(".cat").append(this.head);
	$(".cat").append(this.ear1);
	$(".cat").append(this.mouth);
	$(".cat").append(this.mustache);
	$(".cat").append(this.handRight);
	$(".cat").append(this.tail);
	$(".cat").append(this.eye1);
	$(".cat").append(this.eye2);

	this.update = function(dt){
		this.t += dt;
		console.log(this.t);
		this.handLeft.css('top',String(75+4*Math.sin(this.t/500))+"px");
		this.body.css('top',String(Math.floor(16+(1-Math.sin(this.t/300))*4))+"px");
		this.body.css('height',String(Math.floor(129+Math.sin(this.t/300)*4))+"px");
		//this.handRight.css('top',String(Math.floor(78+Math.sin(this.t/500)*5))+"px");
		// this.body.css('width',String(150+Math.sin(this.t/1000)*10)+"px");
	};

	this.init = function(){
		console.log("miaow");
	};

	this.init();
} 

Cat.prototype.constructor = Cat;