const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.style.background = "#C7F6AA";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
width = canvas.width;
height = canvas.height;

let ballx = 2;
let bally = -2 ;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let r = 40;
const velocity = 10;

function colorBall(){
    let color = '#';
    let letters = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.randon) * 16)]; 
    }
    return color;
}

function drawBalls () {
 
    let color = colorBall();

    ctx.beginPath();
    ctx.arc(x,y,r,0,2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}



function draw(){
    ctx.clearRect(0,0, width, height);
    drawBalls()
    if (y + bally < r) {
        bally = -bally;
    }
    if (y + bally > height-r) {
        bally = -bally;
    }
    if (x + ballx < r) {
        ballx = -ballx;
    } 
    if (x + ballx > width-r) {
        ballx = -ballx;
    }
    x += ballx;
    y += bally;

}

setInterval(
    draw, 10);
