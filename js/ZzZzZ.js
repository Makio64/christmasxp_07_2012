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
		for (var i = this.texts.length - 1; i >= 0; i--) {
			this.texts[i].css("left", String(Math.cos((this.t/6) * .7+Math.PI/2* i  )*40)+"px");
			this.texts[i].css("top", (this.texts[i].position().top-dt/30)+"px");
			console.log(this.texts[i].position());
			if(this.texts[i].position().top<0) {
				this.opacitys[i] -= 0.05;
				this.texts[i].css("opacity", this.opacitys[i]);
				if(this.opacitys[i]<=0) {
					this.opacitys[i] = 0;
					this.texts[i].css("top","250px");
				}
			} else if(this.opacitys[i] < 1) {
				this.opacitys[i] += 0.02;
				this.texts[i].css("opacity", this.opacitys[i]);
			};
		};	
	}
}

ZzZzZ.prototype.constructor = ZzZzZ;