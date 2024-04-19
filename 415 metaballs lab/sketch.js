function Particle(x, y, r, col, lifespan) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.acc = new JSVector(0, 0.01);
  this.lifespan = lifespan;
  this.col = col;
  this.r = r;

}


Particle.prototype.run = function () {
  this.update();
  this.render();

}

Particle.prototype.render = function () {
  let ctx = context;

  ctx.strokeStyle = this.col;
  ctx.fillStyle = this.col;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
  ctx.stroke();
  ctx.fill();

  // ctx.save();
  // ctx.translate(this.loc.x, this.loc.y);
  // ctx.rotate(this.vel.getDirection() + Math.PI / 2);
  // ctx.beginPath()
  // ctx.strokeStyle = this.col;
  // ctx.moveTo(0, -10)
  // ctx.lineTo(-5, 5);
  // ctx, lineTo(0, 0);
  // ctx.lineTo(5, 5);
  // ctx.closePath();
  // ctx.stroke();
  // ctx.fill();
  // ctx.restore();
  // ctx.beginPath()
  // ctx.strokeStyle = this.col;
  // ctx.fillStyle = this.col;
  // ctx.rect(this.loc.x, this.loc.y, this.r, this.r)
  // ctx.closePath();
  // ctx.stroke();
  // ctx.fill();

}

Particle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(5);
  this.loc.add(this.vel);
  
  
  this.lifespan--;


}