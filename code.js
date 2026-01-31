console.log("Javascript successfully connected.");
canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
function mousetracker(event) {
    let x = event.pageX;
    let y = event.pageY;
    let display = document.getElementById("coordinates");
    display.innerHTML = "X: " + x + " Y: " + y;
}
drawing = false;
function canvasmousetracker(event) {
    let rect = canvas.getBoundingClientRect();
    x = event.offsetX;
    y = event.offsetY;
    let display2 = document.getElementById("offsetCoordinates");
    display2.innerHTML = "Offset X: " + x + " Offset Y: " + y;
}
function startdraw(event) {
    drawing = true;
}
function stopdraw(event) {
    drawing = false;
}
canvas.addEventListener("mousemove", canvasmousetracker);
document.addEventListener("mousemove", mousetracker);
canvas.addEventListener("mousedown", startdraw);
canvas.addEventListener("mouseup", stopdraw);
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (drawing) {
        ctx.fillRect(x, y, 50, 50);
    }
    requestAnimationFrame(animate);
}
animate();
