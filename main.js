var bglmg = document.createElement("img");
bglmg.src = "images/map.png";

var btnImg = document.createElement("img");
btnImg.scr = "images/tower.png";

var enemy ={x:400,y:400};
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
}
setInterval(draw,1000/60);
