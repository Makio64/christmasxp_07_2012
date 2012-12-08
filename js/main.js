/**
* Main experiments 03
*/

var sw, sh;
<<<<<<< HEAD
var cat;
var clickMe=[];
=======
var cat, catTail;
var clickMe;
>>>>>>> d2a4eb5facbc78686defc884b9da0a6e6b7885fe
var state = 0;
var gift;
var mouseX = 0,
		mouseY = 0;
var fxs=[];
var PI = Math.PI, PI2 = Math.PI*2, HalfPI = Math.PI/2;
var lastTime = Date.now();
var zzz;

jQuery(document).ready(function($) {
	$(["img/body.png", "img/ear2.png","img/ear1.png", "img/eye1.png","img/eye2.png","img/hand_left.png","img/hand_right.png","img/head.png","img/mouth.png","img/mustache.png","img/shadow.png","img/tail.png"]).preloadImages(function(){
		init();
	});
});

$(document).mousemove(function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}.bind(this));

//entry point
function init() {
	TweenLite.to($("body"),.7,{css:{opacity:1}});
	sw = $(window).width();
	sh = $(window).height();
	cat = new Cat();
	fxs.push( new CircleNoise() );
<<<<<<< HEAD
	clickMe.push(new ClickMe(270,0));
=======
	fxs.push( new CircleWaves() );
	clickMe = new ClickMe();
>>>>>>> d2a4eb5facbc78686defc884b9da0a6e6b7885fe
	state = 0;
	
	requestAnimationFrame(mainLoop);
	$("#hitbox").click(function(e){
		catClick();
	});
	TweenLite.to($("#catShadow"),0,{css:{marginLeft:"-180px",scaleX:.8}});
}

function createCatTail () {
	var canvas = document.createElement('canvas');
	canvas.width = 300;
	canvas.height = 300;
	catTail = new CatTail(canvas, 10);
	$('#catTail').append(canvas);
}

function mainLoop() {
	var dt = Date.now()-lastTime;
	var i;

	cat.update(dt);
<<<<<<< HEAD
	
	for (i = fxs.length - 1; i >= 0; i--) {
=======
	if(catTail != undefined)
		catTail.update(dt);
	for (var i = fxs.length - 1; i >= 0; i--) {
>>>>>>> d2a4eb5facbc78686defc884b9da0a6e6b7885fe
		fxs[i].redraw();
	};
	for (i = clickMe.length - 1; i >= 0; i--) {
		clickMe[i].update(dt);
	};
	if(zzz != undefined)
		zzz.update(dt);
	
	lastTime = lastTime+dt;
	requestAnimationFrame(mainLoop);
}

function catClick(){
	if(cat.state==0){
		zzz = new ZzZzZ($("#zZz"));
		createCatTail();
		cat.open();
		// clickMe[0].open();
		TweenLite.to($("#catShadow"),.2,{css:{marginLeft:"-150px",scaleX:1}});
		for (i = clickMe.length - 1; i >= 0; i--) {
			clickMe[i].activate();
		};
	} else if(cat.life == 0){
		zzz.close();
		cat.close();
		for (i = clickMe.length - 1; i >= 0; i--) {
			clickMe[i].close();
		};
		TweenLite.to($("#catShadow"),.2,{css:{marginLeft:"-180px",scaleX:.8}});
	} else {
		switch(cat.life){
			case 3:
				clickMe.push(new ClickMe(135,2,-40))
				clickMe.push(new ClickMe(45,1,-40))
				break;
		}
		cat.angry();	
		for (i = clickMe.length - 1; i >= 0; i--) {
			clickMe[i].activate();
		};
	} 
}
