/**
* Main experiments 03
*/

var sw, sh;
var cat, catTail;
var clickMe;
var state = 0;
var gift;
var mouseX, mouseY;
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
	clickMe = new ClickMe();
	state = 0;
	createCatTail();
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
	cat.update(dt);
	catTail.update(dt);
	for (var i = fxs.length - 1; i >= 0; i--) {
		fxs[i].redraw();
	};
	if(zzz != undefined)
		zzz.update(dt);
	clickMe.update(dt);
	lastTime = lastTime+dt;
	requestAnimationFrame(mainLoop);
}

function catClick(){
	if(cat.state==0){
		zzz = new ZzZzZ($("#zZz"));
		cat.open();
		TweenLite.to($("#catShadow"),.2,{css:{marginLeft:"-150px",scaleX:1}});
	} else if(cat.life > 0){
		zzz.close();
		cat.close();
		TweenLite.to($("#catShadow"),.2,{css:{marginLeft:"-180px",scaleX:.8}});
	}
	clickMe.activate();
	TweenLite.to($("#cat"),.4,{ease:Quad.easeInOut,css:{marginLeft:"-115px",marginTop:"-250px", scaleX:.7,scaleY:.7}});
	TweenLite.to($("#cat"),.6,{delay:.1,css:{marginLeft:"-150px",marginTop:"-150px",scaleX:1,scaleY:1}});
	}