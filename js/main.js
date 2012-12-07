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
	zzz = new ZzZzZ($("#zZz"));
	state = 0;
	text = new TextEffect($("#texts"));
	text.write("Wake up the cat !");
	requestAnimationFrame(mainLoop);
	$("#cat").click(function(e){
		catClick();
	});
}

function mainLoop() {
	var dt = Date.now()-lastTime;
	cat.update(dt);
	zzz.update(dt);
	lastTime = lastTime+dt;
	requestAnimationFrame(mainLoop);
}

function catClick(){
	console.log("Miaowww ?");
	TweenLite.to($("#cat"),.2,{css:{marginLeft:"-165px",marginTop:"-165px", scaleX:1.1,scaleY:1.1}});
	TweenLite.to($("#cat"),.2,{delay:.1,css:{marginLeft:"-150px",marginTop:"-150px",scaleX:1,scaleY:1}});
}