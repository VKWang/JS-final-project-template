var bglmg = document.createElement("img");
bglmg.src = "images/map.png";

var btnImg = document.createElement("img")
btnImg.scr = "images/tower-btn.png"

var enemy ={x:0,y:0};Element("img");
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(btnImg,400,400,10,10);
}
setTimeout(draw , 125);
