var CircleWaves = function() {
  this.canvasWidth = 180;
  this.canvasHeight = 150;
  this.segments = 200;
  this.points = 5;
  this.width = 130;
  this.height = 110;

  this.canvas = document.createElement('canvas');
  $(this.canvas).addClass('circleWaves');
  this.canvas.width = this.canvasWidth;
  this.canvas.height = this.canvasHeight;

  this.ctx = this.canvas.getContext("2d");

  $("#catSleep").append(this.canvas);

  this.redraw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.fillStyle = "f25151";
    this.ctx.beginPath();

    var localMouseX = mouseX - $(this.canvas).offset().left;
    var localMouseY = mouseY - $(this.canvas).offset().top;

    var x, y, i, dist,
    angle = 0;
    var angleStep = PI2 / this.segments;
    var maxRatio = 0;
    for(i = 0; i < this.segments; i++) {
      angle += angleStep;
      cos = Math.cos(angle);
      sin = Math.sin(angle);
      x = cos * this.width * 0.5 + this.canvasWidth * 0.5;
      y = sin * this.height * 0.5 + this.canvasHeight * 0.5;
      
      dist = Math.sqrt((localMouseX - x ) * (localMouseX - x ) + (localMouseY - y ) * ( localMouseY - y ));
      //enlever ca pour que ca fasse sur out tavu
      if(dist < 40) {
        var ratio = (1 - dist / 40);
        x += cos * Math.random() * 20 * ratio;
        y += sin * Math.random() * 20 * ratio;
        if(maxRatio < ratio) maxRatio = ratio;
      }
      this.ctx.lineTo(x, y);
    }
    var grd=this.ctx.createLinearGradient(this.canvasWidth * 0.5,this.canvasHeight * 0.5, localMouseX,localMouseY);
    grd.addColorStop(0.5,"rgba(242, 81, 81, 0)");
    // grd.addColorStop(0,"green");
    grd.addColorStop(1,"rgba(242, 81, 81, "+maxRatio+")");
    this.ctx.fillStyle=grd;
    this.ctx.fill();
    this.ctx.closePath();
  };

  this.redraw();
};


CircleWaves.prototype.constructor = CircleWaves;