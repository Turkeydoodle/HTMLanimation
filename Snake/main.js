canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
snake = [[25, 25], [24, 25], [23, 25], [22, 25], [21, 25]];
SIZE = 10;
function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.arc(x * SIZE, y * SIZE, SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function moveSnake() {
    for (var i = 0; i < snake.length; i++) {
        drawCircle(snake[i][0], snake[i][1], "green");
    }
}
interval = setInterval(game, 100)
function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();

}