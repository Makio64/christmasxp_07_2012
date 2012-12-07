/**
* ZzzzZzzzZzzZzzzZz
*/

var ZzZzZ = function (container)
{
	this.container = container;
	this.t = 0;
	this.pass = 0;
	this.texts = [];
	this.opacitys = [];

	var maxLetters = 5;

	for(var i = 0; i < maxLetters; i++) {
		var text = $("<img src='img/z.png' />");
		text.css("top", (i*50)+"px");
		text.css("left", String(Math.cos(PI * .7 * i)*30)+"px");
		container.append(text);
		this.texts.push(text);
		this.opacitys.push(1);
	}

	this.update = function(dt) {
		this.t += dt/Math.PI/30;
		var text;
		for (var i = this.texts.length - 1; i >= 0; i--) {
			text = this.texts[i];
			opacity = this.opacitys[i];
			text.css("left", String(Math.cos((this.t/6) * .7+Math.PI/2* i  )*40)+"px");
			text.css("top", (text.position().top-dt/30)+"px");
			if(text.position().top<0) {
				this.opacitys[i] -= 0.05;
				opacity = this.opacitys[i];
				text.css("opacity", this.opacitys[i]);
				if(this.opacitys[i]<=0) {
					this.opacitys[i] = 0;
					text.css("top","250px");
				}
			} else if(this.opacitys[i] < 1) {
				this.opacitys[i] += 0.02;
				text.css("opacity", this.opacitys[i]);
			};
		};	
	}
}

ZzZzZ.prototype.constructor = ZzZzZ;