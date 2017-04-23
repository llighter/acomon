// INIT
var canvas = document.getElementById("startVillage");
var context = canvas.getContext("2d");

var map00=[
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,0,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,0,101,101,101,101,101,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,101,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,101,0,0,1,1,1,1,1,1,1,1,1,1,1,99],
	[0,0,0,0,0,101,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,101,0,101,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,101,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,101,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,1,1,0,0,1,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,101,0,0,0,0,1,1,101,101,101,101,101,101,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var map00_npc=[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

var map01=[
	[3,3,101,0,3,3,3,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,102,3,3,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[4,4,102,1,1,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,4,3,1,1,0,0,0,0,0,0,0,0,101,101,0,0,0,0],
	[101,101,4,3,0,1,1,1,0,0,0,0,0,0,101,0,0,0,0,0],
	[102,102,4,3,0,0,0,1,1,101,102,102,102,102,102,0,0,0,0,0],
	[0,0,4,3,0,0,0,0,1,0,0,0,0,0,3,3,3,0,0,0],
	[0,0,4,3,0,0,0,0,1,1,4,4,4,4,4,4,4,0,0,0],
	[0,0,4,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,4,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,4,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,4,4,4,3,3,3,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,4,0,1,1,0,0,1,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,4,0,0,1,1,1,1,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,4,0,0,0,0,1,1,5,5,5,101,101,101,0,0,0,0,0],
	[0,0,4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,102,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,102,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//맨 처음 건물안 
var map000 = [
    [ -1, -1, -1,  -1,  -1,  -1, -1, -1, -1, 210],
    [ 202, 203, 204, -1, -1, -1, -1, -1,205,2101],
    [ 2021, 2031,2041, -1, -1, -1, -1,206, 206,2102],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, 211],
    [207, -1,207, -1,207, -1,207, -1,207, 2111],
    [2071,209,2071,209,2071, -1,2071,209,2071,211],
    [208, -1,208, -1,208, -1,208, -1,208, 2111],
    [207, -1,207, -1,207, -1,207, -1,207, 211],
    [2071,209,2071,209,2071, -1,2071,209,2071,2111],
    [208, -1,208, -1,208, 98,208, -1,208, -1]
];

var map001 = [
    [ 301, 301, 301, 301, 301, 301, 301, 301, 301, 301],
    [ 301, 301, -3, -3, -3, -3, -3, -3, 301, 301],
    [ 301, 301, -3, -3, 303, 3021, -3, -3, 301, 301],
    [ 301, 301, -3, -3, -3, -3, -3, -3, 301, 301],
    [ 301, 301, -3, -3, -3, -3, -3, -3, 301, 301],
    [ 301, 301, -3, -3, -3, -3, -3, -3, 301, 301],
    [ 301, 301, 301, 301, -3, -3, 301, 301, 301, 301],
    [ 301, 301, 301, 301, -3, -3, 301, 301, 301, 301],
    [ -3, -3, -3, -3, -3, -3, 301, 301, 301, 301],
    [ 301, 301, 301, 301, 301, 301, 301, 301, 301, 301]
];

const UNIT = 64;
const IMG_U = 96;
const MAPIMG_U = 64;
const MOVE_U = 16;

const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const SPACE_BAR = 32;

const SOUTH_DIRECTION = 0;
const WEST_DIRECTION = 1;
const EAST_DIRECTION = 2;
const NORTH_DIRECTION = 3;

const MAP_GRASS = 0;
const MAP_ROAD01 = 1;
const MAP_STONE = 101;
const MAP_SAND = 3;
const MAP_SANDROAD01 = 4;
const MAP_SANDSTONE = 102;

const MAP_NPC_MON = 200;
const MAP_NPC_MON2 = 201;

var sand = new Image();
var grass = new Image();
var stone = new Image();
var road01 = new Image();
var player = new Image();
var monster = new Image();
var monster2 = new Image();
var sandStone = new Image();
var sandRoad01 = new Image();
// 바닥
var bottom = new Image();
// 가구
var appliance = new Image();
// 보스
var boss = new Image();
// 보스 맵타일
var b_tile = new Image();
var b_tile2 = new Image();



// Charactor's direction
var motionIdx = 0;

// Monster's direction
var monsterIdx = 0;

player.src = './img/eagle.png';
monster.src = './img/mon00.png';
monster2.src = './img/mon01.png';
sand.src = './img/tileImage.png';
grass.src = './img/tileImage.png';
stone.src = './img/tileImage.png';
road01.src = './img/tileImage.png';
sandStone.src = './img/tileImage.png';
sandRoad01.src = './img/tileImage.png';
bottom.src='./img/tileImage.png';
appliance.src='./img/appliance.png';
boss.src='./img/boss.png';
b_tile.src='./img/bossmap_1.PNG';
b_tile2.src='./img/b_tile02.png';


// Map coordinate
var mapX = 0;
var mapY = 0;

// Charactor coordinate
var charX = 0;
var charY = 0;

// Current map index
var nowMap = map000;
var nowMap_npc = map00_npc;

var x_start = 0;
var x_end = 0;
var x_char = 0;
var y_start = 0;
var y_end = 0;
var y_char = 0; 

// EAST IS DEFAULT DIRECTION
var charDirection = EAST_DIRECTION;

// dialog창 -yoda-
var chat=document.getElementById("dialog");

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

var spacePressed = false;

document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
	switch(e.keyCode) {
		case ARROW_LEFT:
			leftPressed = true;
			break;
		case ARROW_UP:
			upPressed = true;
			break;
		case ARROW_RIGHT:
			rightPressed = true;
			break;
		case ARROW_DOWN:
			downPressed = true;
			break;
		case SPACE_BAR:
			spacePressed = true;
			break;
	}
}

function keyUpHandler(e) {
    switch(e.keyCode) {
		case ARROW_LEFT:
			leftPressed = false;
			break;
		case ARROW_UP:
			upPressed = false;
			break;
		case ARROW_RIGHT:
			rightPressed = false;
			break;
		case ARROW_DOWN:
			downPressed = false;
			break;
		case SPACE_BAR:
			spacePressed = false;
			break;
	}
}

// Check whether next move is blocked
function collisionDetection() {
	let isCollide = false;

	if(upPressed == true) {
		if( (charY < MOVE_U )
			|| nowMap[ Math.ceil( (charY - UNIT) / UNIT) ][((charX-(charX%UNIT)) / UNIT)] > 100
			|| nowMap[ Math.ceil( (charY - UNIT) / UNIT) ][ Math.ceil(charX / UNIT) ] > 100 ){
			isCollide = true;
		}
	}

	if(downPressed == true) {
		if( (charY > (19 * UNIT - MOVE_U) )
			|| nowMap[ ( (charY-(charY%UNIT)+UNIT) / UNIT) ][ ( (charX - (charX%UNIT) ) / UNIT)] > 100 
			|| nowMap[ ( (charY-(charY%UNIT)+UNIT) / UNIT) ][ Math.ceil( charX / UNIT ) ] > 100 ){
			isCollide = true;
		}
	}

	if(leftPressed == true) {
		if( (charX <= 0)
			|| nowMap[((charY-(charY%UNIT)) / UNIT)][ Math.ceil((charX-UNIT) / UNIT) ] > 100
			|| nowMap[ Math.ceil(charY / UNIT) ][ Math.ceil((charX-UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	if(rightPressed == true) {
		if( (charX > (19 * UNIT - MOVE_U) )
			|| nowMap[((charY-(charY%UNIT)) / UNIT)][((charX-(charX%UNIT) + UNIT) / UNIT)] > 100
			|| nowMap[ Math.ceil(charY / UNIT) ][((charX-(charX%UNIT) + UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	return isCollide;

}

function npcDetection() {
	let isNpcDetected = false;

	if(spacePressed == true) {
		switch(charDirection) {
			// TODO : add detail detection logic
			case NORTH_DIRECTION:
			case SOUTH_DIRECTION:
			case WEST_DIRECTION:
			case EAST_DIRECTION:
				if(nowMap_npc[Math.ceil(charY/UNIT)][Math.ceil(charX/UNIT)] > 100) {
					isNpcDetected = true;
					chat.style="block";
					createDiag( individual[0] );
				}
				break;
		}
	}

	return isNpcDetected;
}

function move() {
	if(upPressed == true) {
		charY -= collisionDetection() ? 0 : MOVE_U;
		charDirection = NORTH_DIRECTION;
	}

	if(downPressed == true) {
		charY += collisionDetection() ? 0 : MOVE_U;
		charDirection = SOUTH_DIRECTION;
	}

	if(leftPressed == true) {
		charX -= collisionDetection() ? 0 : MOVE_U;
		charDirection = WEST_DIRECTION;
	}

	if(rightPressed == true) {
		charX += collisionDetection() ? 0 : MOVE_U;
		charDirection = EAST_DIRECTION;
	}

	// console.log(`[Absolute coordinate] (X, Y) = (${charX / UNIT}, ${charY / UNIT})`);
}

function setMap() {
	if(charX/UNIT < 5) {
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;
    } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
        x_start = (charX-(charX%UNIT))/UNIT - 5
        x_end = (charX-(charX%UNIT))/UNIT + 5
        x_char = (charX%UNIT) + 5 * UNIT;
    } else {    // X >= 16
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;
    }

    if(charY/UNIT < 5) {
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;
    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        y_start = (charY-(charY%UNIT))/UNIT - 5
        y_end = (charY-(charY%UNIT))/UNIT + 5
        y_char = (charY%UNIT) + (5 * UNIT);
    } else {    // Y >= 16
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;
    }
}

function moveMap(){
	// map01에서 맵이동
	// TODO : Need to find obscure location to move next map
	if( nowMap[Math.ceil(charY / UNIT)][Math.ceil(charX / UNIT)]==98 ){
		nowMap=map00;
		charX= (0*UNIT);
		charY= (0*UNIT);
	}else if( nowMap[Math.ceil(charY / UNIT)][Math.ceil(charX / UNIT)]==99 ){
		nowMap=map01;
		charX= (0*UNIT);
		charY= (0*UNIT);
	}
}

function draw(){
	mapX=0;
	mapY=0;

	if(npcDetection()) {
		clearInterval(runMap);



		runMap = setInterval(function fps(){
			context.clearRect(0, 0, canvas.width, canvas.height);
			draw();
			moveMap();
		}, 51);
		
	}

	move();
	setMap();
	
	for(var i = y_start; i < y_end ; i++){
		for(var j=x_start, mapX = 0; j < x_end ; j++){
            switch(nowMap[i][j]) {
                case MAP_GRASS:
                    context.drawImage(grass, 0, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_ROAD01:
                    context.drawImage(road01, 64, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_STONE:
                    context.drawImage(stone, 192, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_SAND:
                    context.drawImage(sand, 0, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_SANDROAD01:
                    context.drawImage(sandRoad01, 64, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_SANDSTONE:
                    context.drawImage(sandStone, 128, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break; 
                case -1:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	break;
                // 책장1	
                case 202:
                	context.drawImage(appliance, 288, 128, MAPIMG_U/2, MAPIMG_U, mapX, mapY, UNIT, UNIT*2);
                	break;
                // 책장2	
                case 203:
                	context.drawImage(appliance, 320, 128, MAPIMG_U/2, MAPIMG_U, mapX, mapY, UNIT, UNIT*2);
                	break;
                // 책장3	
                case 204:
                	context.drawImage(appliance, 256, 128, MAPIMG_U/2, MAPIMG_U, mapX, mapY, UNIT, UNIT*2);
                	break;
                // 강사 의자	
                case 205:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 160, 192, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
                // 강사 책상	
                case 206: 
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 96, 64, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
                // 학생 컴터	
                case 207:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 128, 192, MAPIMG_U/2, MAPIMG_U, mapX, mapY, UNIT, UNIT*2);
                	break;
                case 208:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 160, 226, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
                // 컴터 사이 사물함	
                case 209:
                	context.drawImage(appliance, 64, 256, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
               // 강사 컴
                case 210:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 448, 288, MAPIMG_U/2, MAPIMG_U, mapX, mapY, UNIT, UNIT*2);
                	break;
                case 2102:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 448, 352, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
                // 벽 블럭	
                case 211:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 320, 192, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
                case 2111:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(appliance, 320, 224, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
                case 98:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	break;
                case -2:
                	context.drawImage(bottom, 192, 320, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	break;
                case -3:
                	context.drawImage(b_tile, 0, 0, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	break;
                case 303:
                	context.drawImage(b_tile, 0, 0, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT*2, UNIT);
                	context.drawImage(boss, 168*motionIdx, 0, 168, 116, mapX, mapY, UNIT*2, UNIT);
                	break;
                case 301:
                	context.drawImage(b_tile, 0, 0, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                	context.drawImage(b_tile2, 96, 448, MAPIMG_U/2, MAPIMG_U/2, mapX, mapY, UNIT, UNIT);
                	break;
            }
            mapX += UNIT;
		}
		mapY += UNIT;
	}

	mapX=0;
	mapY=0;

	for(var i = y_start; i < y_end ; i++){
		for(var j=x_start, mapX = 0; j < x_end ; j++){
            switch(nowMap_npc[i][j]) {
                case MAP_NPC_MON:
           
                    break;
				case MAP_NPC_MON2:
         
                    break;
            }
            mapX += UNIT;
		}
		mapY += UNIT;
	}



//	 requestAnimationFrame(draw);
}


// npc 대화 정의. 임의로 박사님(강사님), 상점, 던전1 미션주는npc, 던전2, 던전3, 짱짱보스jquery몬
var talk = ['짱짱개발자가 되서 돌아와라!', '상점입니다.', 'h1몬 5마리 잡아오세요', 'div몬 10마리 잡아와라', '뒤지기시름 table몬5마리 잡아와라', '안녕? 난짱짱강한 최종보스 jquery몬이라고 한다!'];

// 대화 한단어로 분할한 것 배열 정의
var individual=[];

// for문으로 각 npc별 대화를 모조리 한단어씩 쪼개버림.
// 강사님은 index 0, 상점 index 1, 던전1미션 index2, 던전2미션 index3, 던전3미션 index4, 최종보스 index5
for(z=0; z<talk.length; z++){
	individual[z] = talk[z].split('');
};

// dialog창에 text 출력
function createDiag ( dialog ) {
	for(k = 0; k < dialog.length; k++) {
		(function(k){
			setTimeout(function(){
			// (2) 50*k시간 마다 글자 하나를 dialog에 표시하겠다. 	
				$('#dialog').text($('#dialog').text()+dialog[k]);
			}, 50*k);
		}(k));
	}
	
}

var runMap = setInterval(function fps(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	moveMap();
}, 51);
//  draw();

setInterval(function motionFps(){
	motionIdx=(motionIdx+1) % 4
}, 150);

setInterval(function motionFps(){
	monsterIdx=(monsterIdx+1) % 4
}, 3000);