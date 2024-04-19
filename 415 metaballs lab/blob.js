
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

let particleSystems = [];
let mouseX, mouseY;
let canvas, context;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    
    loadSystem(1);
    animate();
}


// every animation cycle
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(200,100,100)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    runSystem();
  
    requestAnimationFrame(animate); // next cycle
}

function loadSystem(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = 10;

        particleSystems.push(new ParticleSystem(canvas.width/2, canvas.height/2))
    }

}

function runSystem() {
    for (let i = 0; i < particleSystems.length; i++) {
        particleSystems[i].run();
    }
}








