

var Cat = function(){

	this.t = 0;
	this.state = 1;
	// this.sound = new Audio();

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

	container = $("#cat");
	container.append(this.shadow);
	container.append(this.body);
	container.append(this.handLeft);
	container.append(this.ear2);
	container.append(this.head);
	container.append(this.ear1);
	container.append(this.mouth);
	container.append(this.mustache);
	container.append(this.handRight);
	container.append(this.tail);
	container.append(this.eye1);
	container.append(this.eye2);

	this.update = function(dt) {
		this.t += dt;
		switch(this.state){
			default:
			case 0:
				//Do nothing
				break;
			case 1:
				this.handLeft.css('top',String(75+4*Math.sin(this.t/500))+"px");
				this.body.css('top',String(Math.floor(16+(1-Math.sin(this.t/300))*4))+"px");
				this.body.css('height',String(Math.floor(129+Math.sin(this.t/300)*4))+"px");
				this.handRight.css('top',String(75+4*Math.abs(Math.sin(this.t/1800)))+"px");
				break;

		}
	};

	this.close = function(){
		this.state = 2;
		TweenLite.to(this.handLeft,.8,{css:{opacity:0}});
		TweenLite.to(this.ear2,.8,{css:{opacity:0,left:95}});
		TweenLite.to(this.ear1,.8,{css:{opacity:0,left:75}});
		TweenLite.to(this.head,.8,{css:{opacity:0,left:75}});
		TweenLite.to(this.mouth,.8,{css:{opacity:0}});
		TweenLite.to(this.mustache,.8,{css:{opacity:0}});
		TweenLite.to(this.handRight,.8,{css:{opacity:0,left:75}});
		TweenLite.to(this.tail,.8,{css:{opacity:0}});
		TweenLite.to(this.eye1,.8,{css:{opacity:0}});
		TweenLite.to(this.eye2,.8,{css:{opacity:0}});
	}

	this.init = function(){
		console.log("miaow");
	};

	this.init();
} 

Cat.prototype.constructor = Cat;