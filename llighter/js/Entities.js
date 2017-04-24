var player;
var monsters = {};

Entity = function(type, id, x, y, witdh, height, img) {
    var self = {
        type: type,
        id: id,
        x: x,
        y: y,
        width: width,
        height: height,
        img: img,
    };

    self.update = function() {
        self.updatePosition();
        self.draw();
    }

    // TODO: 이해 필요
    self.draw = function(){
		ctx.save();
		var x = self.x - player.x;
		var y = self.y - player.y;
		
		x += WIDTH/2;
		y += HEIGHT/2;
		
		x -= self.width/2;
		y -= self.height/2;
		
		ctx.drawImage(self.img,
			0,0,self.img.width,self.img.height,
			x,y,self.width,self.height
		);
		
		ctx.restore();
	}

    self.getDistance = function(entity2){	//return distance (number)
		var vx = self.x - entity2.x;
		var vy = self.y - entity2.y;
		return Math.sqrt(vx*vx+vy*vy);
	}

    self.testCollision = function(entity2){	//return if colliding (true/false)
		var rect1 = {
			x:self.x-self.width/2,
			y:self.y-self.height/2,
			width:self.width,
			height:self.height,
		}
		var rect2 = {
			x:entity2.x-entity2.width/2,
			y:entity2.y-entity2.height/2,
			width:entity2.width,
			height:entity2.height,
		}
		return testCollisionRectRect(rect1,rect2);
		
	}

    self.updatePosition = function(){
		self.x += self.spdX;
		self.y += self.spdY;
				
		if(self.x < 0 || self.x > currentMap.width){
			self.spdX = -self.spdX;
		}
		if(self.y < 0 || self.y > currentMap.height){
			self.spdY = -self.spdY;
		}
	}
	return self;
}

var player = function (name, x, y, img) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.img = img;
}

player("test", 1, 2, 3);
console.log(player);

Player = function(){
	var self = Actor('player','yunha',50,40,30,5,50,70,Img.player,10,1);
	
	self.updatePosition = function(){
		if(self.pressingRight)
			self.x += 10;
		if(self.pressingLeft)
			self.x -= 10;	
		if(self.pressingDown)
			self.y += 10;	
		if(self.pressingUp)
			self.y -= 10;	
		
		//ispositionvalid
		if(self.x < self.width/2)
			self.x = self.width/2;
		if(self.x > currentMap.width-self.width/2)
			self.x = currentMap.width - self.width/2;
		if(self.y < self.height/2)
			self.y = self.height/2;
		if(self.y > currentMap.height - self.height/2)
			self.y = currentMap.height - self.height/2;
	}
	
	self.pressingDown = false;
	self.pressingUp = false;
	self.pressingLeft = false;
	self.pressingRight = false;
	return self;
	
}

Actor = function(type,id,x,y,spdX,spdY,width,height,img,hp,atkSpd){
	var self = Entity(type,id,x,y,spdX,spdY,width,height,img);
	
	self.hp = hp;
	self.atkSpd = atkSpd;
	self.attackCounter = 0;
	self.aimAngle = 0;
	
	var super_update = self.update;
	self.update = function(){
		super_update();
		self.attackCounter += self.atkSpd;
	}
	
	self.performAttack = function(){
		if(self.attackCounter > 25){	//every 1 sec
			self.attackCounter = 0;
			generateBullet(self);
		}
	}
	
	self.performSpecialAttack = function(){
		if(self.attackCounter > 50){	//every 1 sec
			self.attackCounter = 0;
			/*
			for(var i = 0 ; i < 360; i++){
				generateBullet(self,i);
			}
			*/
			generateBullet(self,self.aimAngle - 5);
			generateBullet(self,self.aimAngle);
			generateBullet(self,self.aimAngle + 5);
		}
	}

	
	return self;
}

Enemy = function(id,x,y,spdX,spdY,width,height){
	var self = Actor('enemy',id,x,y,spdX,spdY,width,height,Img.enemy,10,1);
	enemyList[id] = self;
}

randomlyGenerateEnemy = function(){
	//Math.random() returns a number between 0 and 1
	var x = Math.random()*currentMap.width;
	var y = Math.random()*currentMap.height;
	var height = 64;	//between 10 and 40
	var width = 64;
	var id = Math.random();
	var spdX = 5 + Math.random() * 5;
	var spdY = 5 + Math.random() * 5;
	Enemy(id,x,y,spdX,spdY,width,height);
	
}