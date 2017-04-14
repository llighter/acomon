// INIT
var canvas = document.getElementById("startVillage");
var context = canvas.getContext("2d");
var map=[
	[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,2,2,0,0,0,0],
	[0,0,0,0,0,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var grass=new Image();
var road01=new Image();
var rock=new Image();
var player = new Image();

grass.src='./img/tileImage.png';
road01.src='./img/tileImage.png';
rock.src='./img/tileImage.png';
player.src='./img/mon01.png';

// Map coordinate
var mapX=0;
var mapY=0;

// Charactor coordinate
var charX=0;
var charY=0;

// Charactor direction
var charPos = 3;

function key(){
	if(event.keyCode==37){
		if( map[(charY/64)][((charX-64)/64)]==2 || (charX<=0) ){
			charPos=0;
		}else{
			charX-=64;
			charPos=0;
		}
	}
	if(event.keyCode==38){
		if( map[((charY-64)/64)][(charX/64)]==2 || (charY<=0) ){
			charPos=1;
		}else{
			charY-=64;
			charPos=1;
		}
	}
	if(event.keyCode==39){
		if( map[(charY/64)][((charX+64)/64)]==2 || (charX>=1216) ){
			// �������� ����Ʈ(����?)
			charPos=2;
		}else{
			charX+=64;
			charPos=2;
		}
	}
	if(event.keyCode==40){
		if( (charY>=576) || map[((charY+64)/64)][(charX/64)]==2 ){
			charPos=3;
		}else{
			charY+=64;
			charPos=3;
		}
	}	
}

function drawMap(){
	mapX=0;
	mapY=0;
	
	for(var i=0 ; i < map.length ; i++){
		for(var j=0 ; j < map[i].length ; j++){
		
			if(map[i][j]==0){
				context.drawImage(grass, 0, 32, 64, 64, mapX, mapY, 64, 64);
			}
			if(map[i][j]==1){
				context.drawImage(road01, 64, 32, 64, 64, mapX, mapY, 64, 64);
			}
			if(map[i][j]==2){
				context.drawImage(rock, 192, 32, 64, 64, mapX, mapY, 64, 64);
			}
			mapX+=64;
		}
		mapX=0;
		mapY+=64;
	}
	
	
	
	
	
	
	if(charPos==0){
		context.drawImage(player, 0, 64, 64, 64, charX, charY, 64, 64);
	}
	if(charPos==1){
		context.drawImage(player, 0, 192, 64, 64, charX, charY, 64, 64);
	}
	if(charPos==2){
		context.drawImage(player, 0, 128, 64, 64, charX, charY, 64, 64);
	}
	if(charPos==3){
		context.drawImage(player, 0, 0, 64, 64, charX, charY, 64, 64);
	}
	
	
}

setInterval(function fps(){

	
	
	
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	drawMap();

	
	
	
	
}, 50);