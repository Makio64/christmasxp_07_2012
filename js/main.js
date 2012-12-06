/**
* Main experiments 03
*/

var sw, sh;
var cat;
var state = 0;
var gift;
var PI = Math.PI, PI2 = Math.PI*2, HalfPI = Math.PI/2;
var lastTime = Date.now();

jQuery(document).ready(function($) {
	$(["img/body.png", "img/ear2.png","img/ear1.png", "img/eye1.png","img/eye2.png","img/hand_left.png","img/hand_right.png","img/head.png","img/mouth.png","img/mustache.png","img/shadow.png","img/tail.png"]).preloadImages(function(){
		init();
	});
});

//entry point
function init() {
	sw = $(window).width();
	sh = $(window).height();
	cat = new Cat();
	state = 0;
	text = TextEffect();
	text.start();
	requestAnimationFrame(mainLoop);
}

function mainLoop() {
	var dt = Date.now()-lastTime;
	cat.update(dt);
	lastTime = lastTime+dt;
	requestAnimationFrame(mainLoop);
}