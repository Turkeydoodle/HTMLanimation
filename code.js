console.log("Javascript successfully connected.");
canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext("2d");
function mousetracker(event) {
    let x = event.pageX;
    let y = event.pageY;
    let display = document.getElementById("coordinates");
    display.innerHTML = "X: " + x + " Y: " + y;
}
function canvasmousetracker(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.offsetX;
    let y = event.offsetY;
    let display2 = document.getElementById("offsetCoordinates");
    display2.innerHTML = "Offset X: " + x + " Offset Y: " + y;
}
canvas.addEventListener("mousemove", canvasmousetracker);
document.addEventListener("mousemove", mousetracker);