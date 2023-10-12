
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

let movers = []

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    let numMax = 50;
    loadMovers(numMax);
    animate();
}


// every animation cycle
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(200,100,100)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    runMovers();
  
    requestAnimationFrame(animate); // next cycle
}

function loadMovers(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = 10;
        movers[i] = new Mover(x, y, r, false, false);


    }
}

function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}



