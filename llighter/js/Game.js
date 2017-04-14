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
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0],
	[1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0],
	[0,0,0,0,1,1,0,0,1,0,0,0,0,0,2,2,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,0,0,0,0,0,2,0,0,0,0,0],
	[0,0,2,0,0,0,0,1,1,2,2,2,2,2,2,0,0,0,0,0],
	[0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

const UNIT = 64;
const IMG_U = 96;
const MAPIMG_U = 64;

const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

const EAST_DIRECTION = 0;
const WEST_DIRECTION = 1;
const SOUTH_DIRECTION = 2;
const NORTH_DIRECTION = 3;

// map[] : value 2 -> stone
const MAP_GRASS = 0;
const MAP_ROAD01 = 1;
const MAP_STONE = 2;

var grass = new Image();
var road01 = new Image();
var rock = new Image();
var player = new Image();

// 캐릭터 모션값

const MOTION00 = 0;
const MOTION01 = 1;
const MOTION02 = 2;
const MOTION03 = 3;
var motionIdx = MOTION00;


grass.src = './img/tileImage.png';
road01.src = './img/tileImage.png';
rock.src = './img/tileImage.png';
player.src = './img/eagle.png';

// Map coordinate
var mapX = 0;
var mapY = 0;

// Charactor coordinate
var charX = 0;
var charY = 0;

// Charactor direction
var charDirection = SOUTH_DIRECTION;

function key(){
	if(event.keyCode == ARROW_LEFT){
		if( (charX <= 0) || map[(charY / UNIT)][((charX - UNIT) / UNIT)] == MAP_STONE ){
		}else{
			charX -= UNIT;
		}
        charDirection = WEST_DIRECTION;

	}
	if(event.keyCode == ARROW_UP){
		if( (charY <= 0) || map[((charY - UNIT) / UNIT)][(charX / UNIT)] == MAP_STONE ){
		}else{
			charY -= UNIT;
		}
        charDirection = NORTH_DIRECTION;
	}
	if(event.keyCode == ARROW_RIGHT){
		if( (charX >= 19 * UNIT) || map[(charY / UNIT)][((charX + UNIT) / UNIT)] == MAP_STONE ){
		}else{
			charX += UNIT;
		}
        charDirection = EAST_DIRECTION;
	}
	if(event.keyCode == ARROW_DOWN){
		if( (charY >= 19 * UNIT) || map[((charY + UNIT) / UNIT)][(charX / UNIT)] == MAP_STONE ){
		}else{
			charY += UNIT;
		}
        charDirection = SOUTH_DIRECTION;
	}

    console.log(`[Absolute coordinate] (X, Y) = (${charX / UNIT}, ${charY / UNIT})`);
    
}

function drawMap(){
	mapX=0;
	mapY=0;

    let x_start = 0;
    let x_end = 0;
    let x_char = 0;

    let y_start = 0;
    let y_end = 0;
    let y_char = 0;

    if(charX/UNIT <= 4) {
        // 0,0 遺��꽣 洹몃┛�떎.
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;
    } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
        // X瑜� 湲곗��쑝濡� �쇊履쎌� 4�뿴 �삤瑜몄そ�� 5�뿴 洹몃┛�떎.
        x_start = charX/UNIT - 5
        x_end = charX/UNIT + 5
        x_char = 5 * UNIT;
    } else {    // X >= 16
        // 10 遺��꽣 洹몃┛�떎.
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;
    }

    if(charY/UNIT <= 4) {
        // 0,0 遺��꽣 洹몃┛�떎.
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;
    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        // Y瑜� 湲곗��쑝濡� �쐞�뒗 4�뿴 �븘�옒�뒗 5�뿴 洹몃┛�떎.
        y_start = charY/UNIT - 5
        y_end = charY/UNIT + 5
        y_char = 5 * UNIT;
    } else {    // Y >= 16
        // 10 遺��꽣 洹몃┛�떎.
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;
    }
	
	for(var i = y_start; i < y_end ; i++){
		for(var j=x_start, mapX = 0; j < x_end ; j++){
            switch(map[i][j]) {
                case MAP_GRASS:
                    context.drawImage(grass, 0, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_ROAD01:
                    context.drawImage(road01, 64, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_STONE:
                    context.drawImage(rock, 192, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
            }
            mapX += UNIT;
		}
		mapY += UNIT;
	}

    switch(charDirection) {
        case SOUTH_DIRECTION:
        	switch(motionIdx){
        		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        	}
            break;
        case WEST_DIRECTION:
        	switch(motionIdx){
        		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        	}
            break;
        case EAST_DIRECTION:
<<<<<<< HEAD
            context.drawImage(player, 0, 2 * UNIT, UNIT, UNIT, x_char, y_char, UNIT, UNIT);
            break;
        case NORTH_DIRECTION:
            context.drawImage(player, 0, 3 * UNIT, UNIT, UNIT, x_char, y_char, UNIT, UNIT);
=======
        	switch(motionIdx){
        		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
        	}
            break;
        case NORTH_DIRECTION:
        	switch(motionIdx){
	    		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
	    		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
	    		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
	    		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
	    	}
>>>>>>> 359b74c1520a98ca4658d4bb9d6ff2bc0e4d6e5b
            break;
    }

}

setInterval(function fps(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawMap();
}, 51);
setInterval(function motionFps(){
	motionIdx=(motionIdx+1)%4
}, 150);