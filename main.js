var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var btnImg = document.createElement("img");
btnImg.src = "images/tower-btn.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";
var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif";
var crosshairImg = document.createElement("img");
crosshairImg.src = "images/crosshair.png";


function Enemy(){
  this.x = 96;
  this.y = 448;
  this.path = 0;
  this.hp = 10;
  this.move = function (){
    if(isCollided(enemyPath[this.path].x,enemyPath[this.path].y,this.x,this.y,64/FPS,64/FPS)){
      this.x = enemyPath[this.path].x;
      this.y = enemyPath[this.path].y;
      this.path++;
      if(this.path === enemyPath.length-1){
        this.hp = 0;
       if(health > 0){
         health = health-10;
       }
      }
  }else if(this.path <= enemyPath.length && health > 0){
      this.x = this.x + enemyPath[this.path].speedx / FPS;
      this.y = this.y + enemyPath[this.path].speedy / FPS;
    }
  }
}
function lifeOfTree(){
  ctx.fillStyle = hpColor;
  if(health > 100){
    hpColor = "white";
  }else if(health > 30){
    hpColor = "orange";
  }else{
    hpColor = "red";
  }
}
function Tower(x,y){
  this.width = 32;
  this.height = 32;
  this.x = x;
  this.y = y;
  this.range = 96;
  this.fireRate = 16;
  this.countDownTime = 0;
  this.damage = 2;
  this.aimingEnemyId = null;
  this.searchEnemy = function(){
    for(var i=0;i<enemies.length;i++){
      var distance = Math.sqrt(
        Math.pow(this.x-enemies[i].x,2)+Math.pow(this.y-enemies[i].y,2)
      );
      if(distance <= this.range){
        this.aimingEnemyId = i;
        this.countDownTime -= 1;
        if(this.countDownTime <= 0 && this.aimingEnemyId != null){
          this.shoot(i);
          this.countDownTime = this.fireRate;
        }
        return;
      }
      this.aimingEnemyId = null;
    }
  };
  this.shoot = function(id){
    ctx.beginPath(id);
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(enemies[id].x+16,enemies[id].y+16);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
    enemies[id].hp -= this.damage;
  };
};


var health = 200;
var hpColor = "white";
var FPS = 64;
var clock = 0;
var isBuilding = false;
var btn = {
  x:578,
  y:418,
  width:64,
  height:64
};
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
var enemy = new Enemy();
var enemies = [];
var tower = new Tower();
var towers = [];
var newTower = new Tower();


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
    }else{
      isBuilding = true;
    }
  }else if(isBuilding){
    for(var i=0;i<=towers.length;i++){
      if(i==towers.length){
        var towerId = i;
        towers.push(newTower);
        towers[towerId].x = cursor.x-(cursor.x%32);
        towers[towerId].y = cursor.y-(cursor.y%32);
        isBuilding = false;
        return;
      }
    }
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
  ctx.fillText("HP:"+health,468,57);
  ctx.font = "25px Arial";
  lifeOfTree();
  if((clock % 100) == 0 && health > 0){
    var newEnemy = new Enemy();
    enemies.push(newEnemy);
  }
  for(var i=0;i<enemies.length;i++){
    for(var t=1;(t-1)<towers.length;t++){
      if(towers[t-1].aimingEnemyId != null){
      var id = tower.aimingEnemyId;
      ctx.drawImage(crosshairImg,enemies[id].x,enemies[id].y,32,32);
    }else{
      tower.aimingEnemyId = null;
    }
  }
  }
  for(var i=0;i<enemies.length;i++){
    if(enemies[i].hp <= 0){
      enemies.splice[i,1];
    }else{
      enemies[i].move();
      ctx.drawImage(slimeImg,enemies[i].x,enemies[i].y);
    }
  }
  for(var i=1;i<=towers.length;i++){
    var towerId = i-1;
    towers[towerId].searchEnemy();
    ctx.drawImage(towerImg,tower.x,tower.y,tower.width,tower.height)
  }
  if(isBuilding){
    ctx.drawImage(towerImg,cursor.x-(cursor.x%32),cursor.y-(cursor.y%32),32,32);
  }
  clock++;
}


setInterval(draw , 1000/FPS);
//for_help_nick66551
