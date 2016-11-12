var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var btnImg = document.createElement("img");
btnImg.src = "images/tower-btn.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";
var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif";


var enemyPath = [
  {x:96,y:448,speedx:0,speedy:0},
  {x:96,y:64,speedx:0,speedy:-64},
  {x:384,y:64,speedx:64,speedy:0},
  {x:384,y:192,speedx:0,speedy:64},
  {x:224,y:192,speedx:-64,speedy:0},
  {x:224,y:320,speedx:0,speedy:64},
  {x:544,y:320,speedx:64,speedy:0},
  {x:544,y:96,speedx:0,speedy:-64},
  {x:0,y:0,speedx:0,speedy:0}
];
function Enemy(){
  this.x = 96;
  this.y = 448;
  this.path = 0;
  this.move = function (){
    if(isCollided(enemyPath[this.path].x,enemyPath[this.path].y,this.x,this.y,64/FPS,64/FPS)){
      this.x = enemyPath[this.path].x;
      this.y = enemyPath[this.path].y;
      this.path++;
      if(this.path == (enemyPath.length)-1){
        health = health - 10;
      }
  }else if(this.path <= enemyPath.length){
      this.x = this.x + enemyPath[this.path].speedx / FPS;
      this.y = this.y + enemyPath[this.path].speedy / FPS;
    }
  }
}


var FPS = 64;
var clock = 0;
var btn = {
  x:578,
  y:418,
  width:64,
  height:64
};
var isBuilding = false;
var tower = {
  width:32,
  height:32
};
var health = 200;
var enemy = new Enemy();
var enemies = [];

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
  ctx.drawImage(btnImg, btn.x, btn.y, btn.width, btn.height);
  ctx.fillText(health+"/200HP", 10, 32);
  ctx.font = "22px Arial";
  ctx.fillStyle = "white";
  if((clock % 100) == 0){
    var newEnemy = new Enemy();
    enemies.push(newEnemy);
  }
  for(var i=0;i<enemies.length;i++){
    enemies[i].move();
    ctx.drawImage(slimeImg,enemies[i].x,enemies[i].y);
  }
  ctx.drawImage(towerImg,tower.x,tower.y,tower.width,tower.height);
  if(isBuilding){
    ctx.drawImage(towerImg,cursor.x-(cursor.x%32),cursor.y-(cursor.y%32),32,32);
  }
  clock++;
}


setInterval(draw , 1000/FPS);
//for_help_nick66551
