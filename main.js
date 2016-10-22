var bglmg = document.createElement("img");
bglmg.src = "images/map.png";

var btnImg = document.createElement("img");
btnImg.src = "images/tower-btn.png";

var enemy ={x:430,y:80};
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

$("#game-canvas").mousemove(function(event){
  cursor=("x:"+event.offsetX+"y:"+event.offsetY);
});
}
var cursor = {x:0 , y:0}

var towerImg = document.createElement("img");
towerImg.src = "img/tower.png";

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(btnImg,578,418,62,62);
  ctx.drawImage(towerImg,cursor.x,cursor.y);
}
setInterval(draw,1000/60);
