console.log("Javascript successfully connected.");
function mousetracker(event) {
    let x = event.pageX;
    let y = event.pageY;
    let display = document.getElementById("coordinates");
    display.innerHTML = "X: " + x + " Y: " + y;
}
document.addEventListener("mousemove", mousetracker);