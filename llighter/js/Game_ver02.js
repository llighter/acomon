// INIT
var canvas = document.getElementById("startVillage");
var context = canvas.getContext("2d");

var map00=[
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,0,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,101,101,101,101,101,101,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,99],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,101,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,1,1,0,0,1,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,101,0,0,0,0,1,1,101,101,101,101,101,101,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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



// 현재위치한 맵선언
var nowMap;
nowMap = map00;



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
const MAP_STONE = 101;
const MAP_SAND = 3;
const MAP_SANDROAD01 = 4;
const MAP_SANDSTONE = 102;

var grass = new Image();
var road01 = new Image();
var stone = new Image();
var sand = new Image();
var sandRoad01 = new Image();
var sandStone = new Image();

var player = new Image();

// 筌�癒��봼占쎄숲 筌뤴뫁�▼첎占�

const MOTION00 = 0;
const MOTION01 = 1;
const MOTION02 = 2;
const MOTION03 = 3;
var motionIdx = MOTION00;


grass.src = './img/tileImage.png';
road01.src = './img/tileImage.png';
stone.src = './img/tileImage.png';
sand.src = './img/tileImage.png';
sandRoad01.src = './img/tileImage.png';
sandStone.src = './img/tileImage.png';

player.src = './img/eagle.png';

// Map coordinate
var mapX = 0;
var mapY = 0;

var x_start = 0;
var x_end = 0;
var x_char = 0;

var y_start = 0;
var y_end = 0;
var y_char = 0;

// Charactor coordinate
var charX = 0;
var charY = 0;






// Charactor direction
var charDirection = SOUTH_DIRECTION;

function key(){
	if(event.keyCode == ARROW_LEFT){
		if( (charX <= 0) || nowMap[(charY / UNIT)][((charX - UNIT) / UNIT)] > 100 ){
		}else{
			charX -= UNIT;
		}
        charDirection = WEST_DIRECTION;

	}
	if(event.keyCode == ARROW_UP){
		if( (charY <= 0) || nowMap[((charY - UNIT) / UNIT)][(charX / UNIT)] > 100 ){
		}else{
			charY -= UNIT;
		}
        charDirection = NORTH_DIRECTION;
	}
	if(event.keyCode == ARROW_RIGHT){
		if( (charX >= 19 * UNIT) || nowMap[(charY / UNIT)][((charX + UNIT) / UNIT)] > 100 ){
		}else{
			charX += UNIT;
		}
        charDirection = EAST_DIRECTION;
	}
	if(event.keyCode == ARROW_DOWN){
		if( (charY >= 19 * UNIT) || nowMap[((charY + UNIT) / UNIT)][(charX / UNIT)] > 100 ){
		}else{
			charY += UNIT;
		}
        charDirection = SOUTH_DIRECTION;
	}
	
	// 맵이동
	if( nowMap[(charY / UNIT)][(charX / UNIT)]==99 ){
		nowMap=map01;
		charX= (0*UNIT);
		charY= (0*UNIT);
			
	}
	
	
	
	
    console.log(`[Absolute coordinate] (X, Y) = (${charX / UNIT}, ${charY / UNIT})`);
    
}

function drawMap(){
	mapX=0;
	mapY=0;

    // 10x10留뚰겮 蹂댁뿬吏� 留듭“嫄� �뙆�븙,�꽕�젙
    if(charX/UNIT <= 4) {
        // 0,0 占쎄껀�뜝�룞�삕�땻占� �윜諛몄굡占쎈탿�뜝�럥堉�.
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;
    } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
        // X占쎈ご�뜝占� �뼨轅명�ｅ뜝�룞�삕占쎈さ�슖�댙�삕 �뜝�럩�눁嶺뚯옕�윪�뜝占� 4�뜝�럥�� �뜝�럩沅롳옙紐댐쭗袁좉국�뜝�룞�삕 5�뜝�럥�� �윜諛몄굡占쎈탿�뜝�럥堉�.
        x_start = charX/UNIT - 5
        x_end = charX/UNIT + 5
        x_char = 5 * UNIT;
    } else {    // X >= 16
        // 10 占쎄껀�뜝�룞�삕�땻占� �윜諛몄굡占쎈탿�뜝�럥堉�.
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;
    }

    if(charY/UNIT <= 4) {
        // 0,0 占쎄껀�뜝�룞�삕�땻占� �윜諛몄굡占쎈탿�뜝�럥堉�.
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;
    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        // Y占쎈ご�뜝占� �뼨轅명�ｅ뜝�룞�삕占쎈さ�슖�댙�삕 �뜝�럩留꾢뜝�럥裕� 4�뜝�럥�� �뜝�럥�닡�뜝�럩�굥�뜝�럥裕� 5�뜝�럥�� �윜諛몄굡占쎈탿�뜝�럥堉�.
        y_start = charY/UNIT - 5
        y_end = charY/UNIT + 5
        y_char = 5 * UNIT;
    } else {    // Y >= 16
        // 10 占쎄껀�뜝�룞�삕�땻占� �윜諛몄굡占쎈탿�뜝�럥堉�.
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;
    }
	
    // 議곌굔�뿉 �뵲�씪 留듯��씪 洹몃━湲�
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
            }
            mapX += UNIT;
		}
		mapY += UNIT;
	}

    

}


function drawChar(){
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
        break;
	}
	
	
	
	

}










setInterval(function fps(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawMap();
	drawChar();
}, 51);
setInterval(function motionFps(){
	motionIdx=(motionIdx+1)%4
}, 150);