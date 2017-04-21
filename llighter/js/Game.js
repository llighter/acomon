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

const UNIT = 64;
const IMG_U = 96;
const MAPIMG_U = 64;
const MOVE_U = 8;

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
var startVillage = new Image();

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
startVillage.src = './img/genMap01.png';

// Map coordinate
var mapX = 0;
var mapY = 0;

// Charactor coordinate
var charX = 0;
var charY = 0;

// Current map index
var nowMap = map00;
var nowMap_npc = map00_npc;

var x_start = 0;
var x_end = 0;
var x_char = 0;
var y_start = 0;
var y_end = 0;
var y_char = 0;

var map_start_x = 0;
var map_start_y = 0;

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
	if(charX < 5 * UNIT) {
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;

		map_start_x = 0;

    } else if( charX >= (5 * UNIT) && charX < (16 * UNIT)) {
        x_start = (charX-(charX%UNIT))/UNIT - 5
        x_end = (charX-(charX%UNIT))/UNIT + 5
        x_char = (charX%UNIT) + 5 * UNIT;

		map_start_x = charX - 5*UNIT;

    } else {    // X >= 16
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;

		map_start_x = 10 * UNIT;

    }

	// if(charX/UNIT < 5) {
    //     x_start = 0;
    //     x_end = x_start + 10;
    //     x_char = charX;

	// 	map_start_x = 0;

    // } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
    //     x_start = (charX-(charX%UNIT))/UNIT - 5
    //     x_end = (charX-(charX%UNIT))/UNIT + 5
    //     x_char = (charX%UNIT) + 5 * UNIT;

	// 	map_start_x = charX - 5*UNIT;

    // } else {    // X >= 16
    //     x_start = 10;
    //     x_end = 20;
    //     x_char = charX - 10 * UNIT;

	// 	map_start_x = 10 * UNIT;

    // }

    if(charY/UNIT < 5) {
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;

		map_start_y = 0;

    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        y_start = (charY-(charY%UNIT))/UNIT - 5
        y_end = (charY-(charY%UNIT))/UNIT + 5
        y_char = (charY%UNIT) + (5 * UNIT);

		map_start_y = charY - 5*UNIT;

    } else {    // Y >= 16
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;

		map_start_y = 10 * UNIT;

    }

}

function moveMap(){
	// map01에서 맵이동
	// TODO : Need to find obscure location to move next map
	if( nowMap[Math.ceil(charY / UNIT)][Math.ceil(charX / UNIT)]==99 ){
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

		chat.style="block";
		createDiag( individual[0] );

		runMap = setInterval(function fps(){
			context.clearRect(0, 0, canvas.width, canvas.height);
			draw();
			moveMap();
		}, 51);
		
	}

	move();
	setMap();
	

	// context.drawImage(startVillage, x_start*UNIT, y_start*UNIT, 640, 640, 0, 0, 640, 640);
	context.drawImage(startVillage, map_start_x, map_start_y, 640, 640, 0, 0, 640, 640);

	context.drawImage(player, IMG_U*motionIdx, IMG_U*charDirection, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT);

	// for(var i = y_start; i < y_end ; i++){
	// 	for(var j=x_start, mapX = 0; j < x_end ; j++){
    //         switch(nowMap[i][j]) {
    //             case MAP_GRASS:
    //                 context.drawImage(grass, 0, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
    //                 break;
    //             case MAP_ROAD01:
    //                 context.drawImage(road01, 64, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
    //                 break;
    //             case MAP_STONE:
    //                 context.drawImage(stone, 192, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
    //                 break;
    //             case MAP_SAND:
    //                 context.drawImage(sand, 0, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
    //                 break;
    //             case MAP_SANDROAD01:
    //                 context.drawImage(sandRoad01, 64, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
    //                 break;
    //             case MAP_SANDSTONE:
    //                 context.drawImage(sandStone, 128, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
    //                 break;
    //         }
    //         mapX += UNIT;
	// 	}
	// 	mapY += UNIT;
	// }

	mapX=0;
	mapY=0;

	for(var i = y_start; i < y_end ; i++){
		for(var j=x_start, mapX = 0; j < x_end ; j++){
            switch(nowMap_npc[i][j]) {
                case MAP_NPC_MON:
                    context.drawImage(monster, UNIT*motionIdx, UNIT*monsterIdx, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
				case MAP_NPC_MON2:
                    context.drawImage(monster2, UNIT*motionIdx, UNIT*monsterIdx, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
            }
            mapX += UNIT;
		}
		mapY += UNIT;
	}

	//  requestAnimationFrame(draw);
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