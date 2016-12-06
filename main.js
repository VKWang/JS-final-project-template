var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var btnImg = document.createElement("img");
btnImg.src = "images/tower-btn.png";
var towerImg = document.createElement("img");
tower.src = "images/tower.png";


var FPS = 20;
var btn = {
  x:578,
  y:418,
  width:64,
  height:64
};
var isBuilding = false;


var cursor = {
  x:0,
  y:0
};
$("#game-canvas").mousemove(function(event){
  cursor = {
    x:event.offsetX,
    y:event.offsetY
  };
});


var canvas = document.getElementById("game-canvas");


var ctx = canvas.getContext("2d");


function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(btnImg,btn.x,btn.y,btn.width,btn.height);
  ctx.drawImage(towerImgwa)
};


setInterval(draw , 1000/FPS);
