/* const canvas = document.getElementById("myCanvas");
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
    let color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)+ ")";
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
    */
    

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    canvas.style.background = "#C7F6AA";

    //creating Ball object 
    function Ball(x, y, r, speedx, speedy, color){

        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        //"rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)+ ")";
        this.speedx = speedx;
        this.speedy = speedy;
    }

          //Draw Ball
    Ball.prototype.drawBalls = function() {
        
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.r,0,2 * Math.PI);
        ctx.fill();
    }    

    Ball.prototype.movePosition = function(){
        if((this.x + this.r) >= width || (this.x - this.r) <=0) {
            this.speedx = -this.speedx;
        }
        if((this.y + this.r) >= height || (this.y - this.r) <= 0){
            this.speedy = -this.speedy;
        }    

        this.x += this.speedx;
        this.y += this.speedy;

        }


    function rand (min, max) {
        const num =  Math.floor(Math.random() * (max - min + 1)) + min; 
        return num;
    }

    const balls = [];
    
    while(balls.length <35){

        //create new instance of Ball 
        let halfx = width/2;
        let halfy = height/2;

        let ball = new Ball(
            halfx, 
            halfy, 
            rand(20,50), 
            rand(-10,10), rand(-10, 10), 
            'rgb(' + rand(0,255) + ',' + rand(0,255) + ',' + rand(0,255) +  ',' + (Math.ceil(Math.random() * 10) / 10) + ')',
            );
        balls.push(ball);
    }
    

    function loop(){

        ctx.clearRect(0,0, width, height);


        for(let i = 0; i < balls.length; i++){
            balls[i].drawBalls();
            balls[i].movePosition();
        }

        //calls loop function repeatedly 
        window.requestAnimationFrame(loop);

    }
loop(); 