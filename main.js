var bgImg = document.createElement("img");
bgImg.src = "images/map.png";

var btnImg = document.createElement("img");
btnImg.src = "images/tower-btn.png";

var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif";

var enemy = {x:96,y:448}; 

var enemyPath = [
                 {x:96,y:448},
                 {x:96,y:64},
                 {x:384,y:64}
];

var isBuilding = false;
var tower = {};
var cursor = {x:0,y:0};
$("#game-canvas").mousemove(function(event){
  cursor={
    x:event.offsetX,y:event.offsetY
  }
});

$("#game-canvas").on("click" , function(){
  if(isCollided(cursor.x,cursor.y,640-64,480-64,64,64)){
    if(isBuilding){
      isBuilding = false;
    }
     else{
     isBuilding = true;
     }
  }else if(isBuilding){
      tower.x=cursor.x-(cursor.x%32);
      tower.y=cursor.y-(cursor.y%32);
      isBuilding = false;
    }
});;

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

var canvas = document.getElementById("game-canvas");

var ctx = canvas.getContext("2d");

function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(btnImg,578,418,64,64);
  ctx.drawImage(towerImg,cursor.x,cursor.y);
  if(isBuilding){
    ctx.drawImage(towerImg,tower.x,tower.y);
  }
  ctx.drawImage(slimeImg,96,448);
}

setInterval(draw,1000/60);
