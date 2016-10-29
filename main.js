var bgImg = document.createElement("img");
bglmg.src = "images/map.png";

var enemy ={x:430,y:80};
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

var btnImg = document.createElement("img");
btnImg.src = "images/tower-btn.png";

var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(btnImg,578,418,62,62);
  ctx.drawImage(towerImg,cursor.x,cursor.y);
}

setInterval(draw,1000/60);
  
var isBuilding = false;
var tower = {};
var cursor = {x:0 , y:0};
$("#game-canvas").mousemove(function(event){
  cursor={
    x:event.offsetX,y:event.offsetY
  }
});

$("#game-canvas").on(click , function(){
  if(isCollided(cursor.x,cursor.y,640-62,480-62,62,62)){
    if(isBuilding){
      isBuilding = false;
    }else if(){
      isBuilding = true;
    }
    ;};

function isCollided(pointX,pointY,targetX,targetY,targetWidth,targetLenth){
  if(   pointX >= targetX
     && pointX <= targetX+targetWidth
     && pointY >= targetY
     && pointY <= targetY+targetLenth){
    return true;
  } else {
    return false;
  }
}
