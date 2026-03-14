dd = document.getElementById("debugdisplay");
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
snake = [[25, 25], [24, 25], [23, 25], [22, 25], [21, 25]];
SIZE = 10;
let direction = 2; //1 = up 2 = right, 3 = down, 4 = left
function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.arc(x * SIZE, y * SIZE, SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function moveSnake() {
    if (direction === 2) {
        dd.innerHTML = "right," + snake[snake.length - 1]
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0] + 1, temporary[1]]; //move the temp to the right
        snake.pop()
        snake.unshift(temporary)
        dd.innerHTML = "Right," + snake
    }
    if (direction === 3) {
        dd.innerHTML = "Down," + snake[snake.length - 1]
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0], temporary[1] + 1]; //move the temp to the right
        snake.pop()
        snake.unshift(temporary)
        dd.innerHTML = "Down," + snake
    }
    if (direction === 1) {
        dd.innerHTML = "Up," + snake[snake.length - 1]
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0], temporary[1] - 1]; //move the temp to the right
        snake.pop()
        snake.unshift(temporary)
        dd.innerHTML = "Up," + snake
    }
    if (direction === 4) {
        dd.innerHTML = "Left," + snake[snake.length - 1]
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0] - 1, temporary[1]]; //move the temp to the left
        snake.pop()
        snake.unshift(temporary)
        dd.innerHTML = "Left," + snake
    }
    for (var i = 0; i < snake.length; i++) {
        drawCircle(snake[i][0], snake[i][1], "green");
    }
}
function keydown(event) {
    if (event.key === "ArrowUp" && direction !== 3) {
        direction = 1;
    } else if (event.key === "ArrowDown" && direction !== 1) {
        direction = 3;
    } else if (event.key === "ArrowLeft" && direction !== 2) {
        direction = 4;
    } else if (event.key === "ArrowRight" && direction !== 4) {
        direction = 2;
    }
}
interval = setInterval(game, 100)
document.addEventListener("keydown", keydown);
function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();

}