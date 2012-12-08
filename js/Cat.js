

var Cat = function(){

	this.t = 0;
	this.state = 0;
	this.ronflement = new buzz.sound("./sfx/cat_sleeping", {
	    preload: true,
	    formats: [ "mp3" ],
	    // autoplay: true,
	    loop: true
	});;
	this.meow = new buzz.sound("./sfx/cat_meow", {
	    preload: true,
	    formats: [ "mp3" ],
	    // autoplay: true,
	});;
	this.meow.setVolume(10);
	// this.sound = new Audio();

	this.body = $("<img class='body' src='./img/body.png'/>");
	this.body2 = $("<img class='body' src='./img/body.png'/>");
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
	container.append(this.body2);
	this.body2.css("opacity",0);

	TweenLite.to(this.handLeft,0,{css:{opacity:0,left:75}});
	TweenLite.to(this.body2,0,{css:{opacity:1}});
	TweenLite.to(this.ear2,0,{css:{opacity:0,left:95}});
	TweenLite.to(this.ear1,0,{css:{opacity:0,left:75,top:30}});
	TweenLite.to(this.head,0,{css:{opacity:0,left:75}});
	TweenLite.to(this.mouth,0,{css:{opacity:0,left:75}});
	TweenLite.to(this.mustache,0,{css:{opacity:0,left:75}});
	TweenLite.to(this.handRight,0,{css:{opacity:0,left:75}});
	TweenLite.to(this.tail,0,{css:{opacity:0,left:70,top:50}});
	TweenLite.to(this.eye1,0,{css:{opacity:0,left:130}});
	TweenLite.to(this.eye2,0,{css:{opacity:0,left:130}});

	this.update = function(dt) {
		this.t += dt;
		switch(this.state){
			default:
			case 0:
				//Do nothing
				break;
			case 2:
				console.log("update");
				this.handLeft.css('top',String(75+4*Math.sin(this.t/500))+"px");
				this.body.css('top',String(Math.floor(16+(1-Math.sin(this.t/300))*4))+"px");
				this.body.css('height',String(Math.floor(129+Math.sin(this.t/300)*4))+"px");
				this.body2.css('top',String(Math.floor(16+(1-Math.sin(this.t/300))*4))+"px");
				this.body2.css('height',String(Math.floor(129+Math.sin(this.t/300)*4))+"px");
				this.handRight.css('top',String(75+4*Math.abs(Math.sin(this.t/1800)))+"px");
				break;

		}
	};

	this.open = function(){
		this.ronflement.play();
		this.state = 1;
		this.meow.play();
		TweenLite.to(this.handLeft,.2,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:165}});
		TweenLite.to(this.body2,0.2,{ease:Quad.easeOut,delay:.2,css:{opacity:0}});
		TweenLite.to(this.ear2,.2,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:235}});
		TweenLite.to(this.ear1,.2,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:205,top:0}});
		TweenLite.to(this.head,.2,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:155}});
		TweenLite.to(this.mouth,.05,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:195}});
		TweenLite.to(this.mustache,.05,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:170}});
		TweenLite.to(this.handRight,.2,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:115}});
		TweenLite.to(this.tail,.2,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:35,top:90},onComplete:this.onOpenComplete, onCompleteParams:[this]});
		TweenLite.to(this.eye1,.05,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:200}});
		TweenLite.to(this.eye2,.05,{ease:Quad.easeOut,delay:.2,css:{opacity:1,left:215}});
	}

	this.onOpenComplete = function(cat){
		console.log("this.onOpenComplete");
		cat.state = 2;
		console.log(cat);
	}

	this.close = function(){
		this.meow.play();
		this.ronflement.stop();
		this.state = 0;
		TweenLite.to(this.handLeft,.2,{css:{opacity:0,left:75}});
		TweenLite.to(this.body2,0.2,{css:{opacity:1}});
		TweenLite.to(this.ear2,.2,{css:{opacity:0,left:95}});
		TweenLite.to(this.ear1,.2,{css:{opacity:0,left:75,top:30}});
		TweenLite.to(this.head,.2,{css:{opacity:0,left:75}});
		TweenLite.to(this.mouth,.05,{css:{opacity:0,left:75}});
		TweenLite.to(this.mustache,.05,{css:{opacity:0,left:75}});
		TweenLite.to(this.handRight,.2,{css:{opacity:0,left:75}});
		TweenLite.to(this.tail,.2,{css:{opacity:0,left:70,top:50}});
		TweenLite.to(this.eye1,.05,{css:{opacity:0,left:130}});
		TweenLite.to(this.eye2,.05,{css:{opacity:0,left:130}});

		TweenLite.to(this.body2,0,{delay:.2, css:{opacity:0}});
	}

	this.init = function(){

	};

	this.init();
} 

Cat.prototype.constructor = Cat;