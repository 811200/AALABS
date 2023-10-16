//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.x = x;
  this.y = y;
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {

}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {

}

// renders a bubble to the canvas
Bubble.prototype.render = function () {

}

//  update bubble every animation frame
Bubble.prototype.update = function () {

}

