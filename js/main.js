/**
* Main experiments 03
*/

var sw, sh;
var cat, catTail;
var clickMe;
var state = 0;
var gift;
var mouseX, mouseY;
var PI = Math.PI, PI2 = Math.PI*2, HalfPI = Math.PI/2;
var lastTime = Date.now();

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
	sw = $(window).width();
	sh = $(window).height();
	cat = new Cat();
	zzz = new ZzZzZ($("#zZz"));
	clickMe = new ClickMe();
	state = 0;
	createCatTail();
	requestAnimationFrame(mainLoop);
	$("#cat").click(function(e){
		catClick();
	});
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
	zzz.update(dt);
	clickMe.update(dt);
	lastTime = lastTime+dt;
	requestAnimationFrame(mainLoop);
}

function catClick(){
	cat.close();
	TweenLite.to($("#cat"),.1,{css:{marginLeft:"-115px",marginTop:"-115px", scaleX:.7,scaleY:.7}});
	TweenLite.to($("#cat"),.3,{delay:.1,css:{marginLeft:"-150px",marginTop:"-150px",scaleX:1,scaleY:1}});
}