var bglmg = document.createElement("img");
bglmg.src = "images/map.png";



var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,10,1);
}
setTimeout(draw , 125);
