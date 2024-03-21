let points = [];
// Global variables for geometry
let delaunay, voronoi;
// Image
let gloria;

// Load image before setup
function preload() {
  gloria = loadImage("gloria_pickle.jpg");
}

function setup() {
  createCanvas(600, 532);

  // Generate random points avoiding bright areas
  generateRandomPoints(6000);


  delaunay = calculateDelaunay(points);
  voronoi = delaunay.voronoi([0, 0, width, height]);
}

function draw() {
  background(255);

  displayPoints();

  updatePoints();
}

function generateRandomPoints(n) {
  for (let i = 0; i < n; i++) {
    let x = random(width);
    let y = random(height);
    let col = gloria.get(x, y);
    if (random(100) > brightness(col)) {
      points.push(createVector(x, y));
    } else {
      i--;
    }
  }
}


function displayPoints() {
  for (let v of points) {
    stroke(0);
    strokeWeight(4);
    point(v.x, v.y);
  }
}


function updatePoints() {

  let polygons = voronoi.cellPolygons();
  let cells = Array.from(polygons);

  let centroids = new Array(cells.length);
  let weights = new Array(cells.length).fill(0);
  for (let i = 0; i < centroids.length; i++) {
    centroids[i] = createVector(0, 0);
  }

  gloria.loadPixels();
  let delaunayIndex = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let index = (i + j * width) * 4;
      let r = gloria.pixels[index + 0];
      let g = gloria.pixels[index + 1];
      let b = gloria.pixels[index + 2];
      let bright = (r + g + b) / 3;
      let weight = 1 - bright / 255;
      delaunayIndex = delaunay.find(i, j, delaunayIndex);
      centroids[delaunayIndex].x += i * weight;
      centroids[delaunayIndex].y += j * weight;
      weights[delaunayIndex] += weight;
    }
  }

  for (let i = 0; i < centroids.length; i++) {
    if (weights[i] > 0) {
      centroids[i].div(weights[i]);
    } else {
      centroids[i] = points[i].copy();
    }
  }
 

  for (let i = 0; i < points.length; i++) {
    points[i].lerp(centroids[i], 0.1);
  }

  delaunay = calculateDelaunay(points);
  voronoi = delaunay.voronoi([0, 0, width, height]);
}


function calculateDelaunay(points) {
  let pointsArray = [];
  for (let v of points) {
    pointsArray.push(v.x, v.y);
  }
  return new d3.Delaunay(pointsArray);
}




