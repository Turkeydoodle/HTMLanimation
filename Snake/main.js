dd = document.getElementById("debugdisplay");
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
snake = [[25, 25], [24, 25], [23, 25], [22, 25], [21, 25]];
SIZE = 10;
let ax = Math.floor(Math.random() * 50);
let ay = Math.floor(Math.random() * 50);
let direction = 2; //1 = up 2 = right, 3 = down, 4 = left
let appled = true;
function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.arc(x * SIZE, y * SIZE, SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function moveSnake() {
    if (direction === 2) {
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0] + 1, temporary[1]]; //move the temp to the right
        snake.pop()
        snake.unshift(temporary)
    }
    if (direction === 3) {
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0], temporary[1] + 1]; //move the temp to the right
        snake.pop()
        snake.unshift(temporary)
    }
    if (direction === 1) {
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0], temporary[1] - 1]; //move the temp to the right
        snake.pop()
        snake.unshift(temporary)
    }
    if (direction === 4) {
        let temporary = snake[0]; //temp for the head
        console.log(temporary)
        temporary = [temporary[0] - 1, temporary[1]]; //move the temp to the left
        snake.pop()
        snake.unshift(temporary)
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
function apple(x, y) {
    if (!appled) {
        x = Math.floor(Math.random() * 50);
        y = Math.floor(Math.random() * 50);
        appled = true;
    }
    ctx.beginPath();
    ctx.arc(x * SIZE, y * SIZE, SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function appletouched() {
    if (snake[0][0] === ax && snake[0][1] === ay) {
        snake.push(snake[snake.length - 1]);
        ax = Math.floor(Math.random() * 50);
        ay = Math.floor(Math.random() * 50);
        appled = false;
    }
}
interval = setInterval(game, 100)
document.addEventListener("keydown", keydown);
function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();
    apple(ax, ay);
    appletouched();
    dd.innerHTML = "Snake: " + snake.length;
}