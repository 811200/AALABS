function Mover(x, y, diam, col) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.col = col;
}


Mover.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();

}

Mover.prototype.checkEdges = function () {
  if (this.loc.x > canvas.width) this.loc.x = 0;
  if (this.loc.x < 0) this.loc.x = canvas.width;
  if (this.loc.y > canvas.height) this.loc.x = 0;
  if (this.loc.y < 0) this.loc.x = canvas.height;
}

Mover.prototype.render = function () {
  context.strokeStyle = this.col;
  if( this !== movers[0]){
    context.fillStyle = "rgba(22, 200, 255, 255)";
  }else{
    context.fillStyle = "rgba(22, 255, 100, 255)";
  }

  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  context.stroke();
  context.fill();
}

Mover.prototype.update = function () {

   if(this !== movers[0]){

    this.acc = JSVector.subGetNew( movers[0].loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.03);
    this.vel.add(this.acc);
    

   }
   this.vel.limit(7);
   this.loc.add(this.vel);
 
}