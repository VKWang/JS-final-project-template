var bglmg = document.createElement("img");
bglmg.src = "images/map.png";

var enemy ={x:0,y:0}
var enemy = documant.createElement("img");
enemy.scr = "images/slime.gif";

var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,0,300);
  ctx.drawImage(enemy,enemy.x,enemy.y)
}
setTimeout(draw , 125);
