var bgImg = document.createElement("img");
bgImg.src = "images/map.png";


var FPS = 20;


var canvas = document.getElementById("game-canvas");


var ctx = canvas.getContext("2d");


function draw(){
  ctx.drawImage(bgImg,0,0);
};


setInterval(draw , 1000/FPS);
