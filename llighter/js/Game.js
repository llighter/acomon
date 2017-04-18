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

const SOUTH_DIRECTION = 0;
const WEST_DIRECTION = 1;
const EAST_DIRECTION = 2;
const NORTH_DIRECTION = 3;

const MAP_GRASS = 0;
const MAP_ROAD01 = 1;
const MAP_STONE = 2;

var grass = new Image();
var road01 = new Image();
var rock = new Image();
var player = new Image();

// Charactor's direction
var motionIdx = 0;


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

// Current map index
var x_start = 0;
var x_end = 0;
var x_char = 0;
var y_start = 0;
var y_end = 0;
var y_char = 0; 

// EAST IS DEFAULT DIRECTION
var charDirection = EAST_DIRECTION;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

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
	}
}

// Check whether next move is blocked
function collisionDetection() {
	let detector = false;

	if(upPressed == true) {
		if((charY <= 0) || map[(charY / UNIT) - 1][(charX / UNIT)] == MAP_STONE) {
			detector = true;
		}
	}

	if(downPressed == true) {
		if((charY >= 19 * UNIT) || map[(charY / UNIT) + 1][(charX / UNIT)] == MAP_STONE) {
			detector = true;
		}
	}

	if(leftPressed == true) {
		if((charX <= 0) || map[(charY / UNIT)][(charX / UNIT) - 1] == MAP_STONE) {
			detector = true;
		}
	}

	if(rightPressed == true) {
		if((charX >= 19 * UNIT) || map[(charY / UNIT)][(charX / UNIT) + 1] == MAP_STONE) {
			detector = true;
		}
	}

	return detector;

}

function move() {
	if(upPressed == true) {
		charY -= collisionDetection() ? 0 : UNIT;
		charDirection = NORTH_DIRECTION;
	}

	if(downPressed == true) {
		charY += collisionDetection() ? 0 : UNIT;
		charDirection = SOUTH_DIRECTION;
	}

	if(leftPressed == true) {
		charX -= collisionDetection() ? 0 : UNIT;
		charDirection = WEST_DIRECTION;
	}

	if(rightPressed == true) {
		charX += collisionDetection() ? 0 : UNIT;
		charDirection = EAST_DIRECTION;
	}

	// console.log(`[Absolute coordinate] (X, Y) = (${charX / UNIT}, ${charY / UNIT})`);
}

function setMap() {
	if(charX/UNIT <= 4) {
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;
    } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
        x_start = charX/UNIT - 5
        x_end = charX/UNIT + 5
        x_char = 5 * UNIT;
    } else {    // X >= 16
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;
    }

    if(charY/UNIT <= 4) {
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;
    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        y_start = charY/UNIT - 5
        y_end = charY/UNIT + 5
        y_char = 5 * UNIT;
    } else {    // Y >= 16
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;
    }
}

function draw(){
	mapX=0;
	mapY=0;

	move();
	setMap();
	
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
	context.drawImage(player, IMG_U*motionIdx, IMG_U*charDirection, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT);

	// requestAnimationFrame(draw);
}

setInterval(function fps(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}, 51);
// draw();

setInterval(function motionFps(){
	motionIdx=(motionIdx+1) % 4
}, 150);