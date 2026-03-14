canvas = document.getElementById('canvas');
canvas.height = 500;
canvas.width = 500;
ctx = canvas.getContext('2d');
player = {
    x: 100,
    y: 100,
    size: 20,
    color: 'blue'
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}
function movePlayer(dx, dy) {
    player.x += dx;
    player.y += dy;
    draw();
}
draw()
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        movePlayer(0, -15);
    } else if (event.key === 'ArrowDown') {
        movePlayer(0, 15);
    } else if (event.key === 'ArrowLeft') {
        movePlayer(-15, 0);
    } else if (event.key === 'ArrowRight') {
        movePlayer(15, 0);
    }
});