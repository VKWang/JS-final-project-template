var bglmg = ducument.createElement("img");
bglmg.src = "images/map.png";
var canvas = document.getElementByid("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawlmage(bglmg,0,0);
}
seTimeout(draw , 125);
