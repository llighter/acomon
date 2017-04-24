// INIT
var canvas = document.getElementById("village");
var context = canvas.getContext("2d");

var map_init = [
    [ 0, 0, 0,  0,  0,  0, 0, 0, 0, 210],
    [ 202, 203, 204, 0, 0, 0, 501, 0,205,2101],
    [ 2021, 2031,2041, 0, 0, 0, 0,206, 206,2102],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 211],
    [207, 0,207, 0,207, 0,207, 0,207, 2111],
    [2071,209,2071,209,2071, 0,2071,209,2071,211],
    [208, 0,208, 0,208, 0,208, 0,208, 2111],
    [207, 0,207, 0,207, 0,207, 0,207, 211],
    [2071,209,2071,209,2071, 0,2071,209,2071,2111],
    [208, 0,208, 0,208, 90,208, 0,208, 0]
];

var map_boss = [
    [ 301, 301, 301, 301, 301, 301, 301, 301, 301, 301],
    [ 301, 301,	0, 0, 0, 0, 0, 0, 301, 301],
    [ 301, 301, 0, 0, 303, 3021, 0, 0, 301, 301],
    [ 301, 301, 0, 0, 0, 0, 0, 0, 301, 301],
    [ 301, 301, 0, 0, 0, 0, 0, 0, 301, 301],
    [ 301, 301, 0, 0, 0, 0, 0, 0, 301, 301],
    [ 301, 301, 301, 301, 0, 0, 301, 301, 301, 301],
    [ 301, 301, 301, 301, 0, 0, 301, 301, 301, 301],
    [ 94, 0, 0, 0, 0, 0, 301, 301, 301, 301],
    [ 301, 301, 301, 301, 301, 301, 301, 301, 301, 301]
];

var map00=[
	   [154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154],
	   [154,  0,  0,210,100,100,100,100,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,154],
	   [154,  0,  0,100,100,100,100,100,  0,  0,  0, 50, 50, 50, 50, 50, 50,  0,  0,154],
	   [154,  0,  0,100,100,100,100,100,  0,  0,  0, 50, 50, 50, 50, 50, 50,  0,  0,154],
	   [154,  0,  0,100,100,100,100,100,  0,  0,  0, 50, 50, 50, 50, 50, 50,  0,  0,154],
	   [154,  0,  0,100,100,  91,100,100,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,154],
	   [154,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,200,100,  0,  0,154],
	   [154,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,100,100,155,  0,154],
	   [154,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,154],
	   [154,  0,  0,  0,  0,  1,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,154],
	   [154,  0,  0, 50, 50, 50, 50, 50,  0,  1,  1,  0,  0,230,100,  0,  0,  0,  0,154],
	   [154,  0,  0, 50, 50, 50, 50, 50,  0,  1,  1,  0,  0,100,100,  0,  0,  0,  0,154],
	   [154,  0,  0, 50, 50, 50, 50, 50,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 99],
	   [154,  0,220,100,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 99],
	   [154,  0,100,100,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,154],
	   [154,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,154],
	   [154,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 50, 50, 50, 50, 50, 50,154],
	   [154,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 50, 50, 50, 50, 50, 50,154],
	   [154,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 50, 50, 50, 50, 50, 50,154],
	   [154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154]

	];


var map01=[
	   [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,110, 97, 97,110,  3,  3,  3,  3],
	   [  3,  3,  3,  3,  3,  3,110,110,110,110,110,110,110,  5,  5,110,110,110,110,110],
	   [ 52, 52, 52,  3,  3,  3,110, 51, 51,  3,  3,  3,  3,  5,  5,  3,  3,  3,  3,110],
	   [ 52, 52, 52,  3,  3,  3,110, 51, 51,  3,  3,200,100,  5,  5,  3,  3,  3,  3,110],
	   [ 52, 52, 52,  3,  3,  3,110, 51, 51,  3,  3,100,100,  5,  5,  3,  3,  3,  3,110],
	   [ 52, 52, 52,  3,  3,  3,110,  3,  3,  3,  3,  3,  3,  5,  5,  3,  3,220,  3,110],
	   [ 52, 52, 52,  3,  3,  3,110,  3,230,100,  3,  3,  3,  5,  5,  3,  3,  3,  3,110],
	   [  3,  3,  3,  3,  3,  3,110,  3,100,100,  3,  3,  3,  5,  5,  3,  3,  3,  3,110],
	   [  3,  3,  3,  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3,  3,  3,  3,110],
	   [  3,  3,  3,  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3,240,  3,  3,110],
	   [  3,  3,  3,  3,  5,  3,110,  3,  3,  3,  3,  3,  3,  3,  3,  3,100,  3,  3,110],
	   [  3,  3,  3,  3,  5,  3,110,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,110],
	   [  3,  3,  3,  3,  5,  3,110,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,110],
	   [  3,  3,  3,  3,  5,  3,110,  3, 51, 51, 51, 51, 51,  3,  3,  3, 51, 51, 51,110],
	   [154,  3,  3,  3,  5,  3,110,  3, 51, 51, 51, 51, 51,  3,  3,  3, 51, 51, 51,110],
	   [154,154,  3,  3,  5,  3,110,  3, 51, 51, 51, 51, 51,  3,  3,  3, 51, 51, 51,110],
	   [ 98,  4,  4,  4,  5,  3,110,110,110,110,110,110,110,110,110,  3,110,110,110,110],
	   [ 98,  4,  4,  4,  4,  3,  3,  3,  3, 52, 52, 52, 52, 52, 52,  3,  3,  3,  3,  3],
	   [154,154,  3,  3,  3,  3, 52, 52,  3, 52, 52, 52, 52, 52, 52,  3,  3, 52, 52, 52],
	   [154,154,154,  3,  3,  3, 52, 52,  3,  3,  3,  3,  3,  3,  3,  3,  3, 52, 52, 52]

	];
	
	
var map02=[
	   [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
	   [152,230,100,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,156,155,152,152,152,152,152],
	   [152,100,100,156,  8,  8,  8,  8,  8,  8,  8,  7,  7,  7,  7,  7,  7,  7,  7,152],
	   [  7,  7,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  7,  7,152],
	   [  7,  7,  8,  8,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  8,  7,  7,152],
	   [  7,  7,  8,  8,  7,  7,  7,  7,152,152,  7,  7,  7,  7,  7,  7,  8,  7,  7,152],
	   [  7,  7,  8,  8, 53, 53, 53, 53,152,152,152,152,152,  7,  7,  7,  8,  7, 54, 54],
	   [  7,  7,  8,  8, 53, 53, 53,152,152,152,152,152,240,100,100,  7,  8,  7, 54, 54],
	   [  7,  7,  8,  8, 53, 53, 53,152,152,  7,  7,155,100,100,100,  7,  8,  7, 54, 54],
	   [  7,  7,  8,  8,152,152,152,152,152,  7,  7,  7,  7,  7,  7,  7,  8,  7, 54, 54],
	   [  7,  7,  8,  8,152,152,152,152,152, 53, 53,  7,  8,  8,  8,  8,  8,152,152,152],
	   [  7,  7,  8,  8,152,152,152,152,152, 53, 53,  7,  8,152,152,152,152,152,152,152],
	   [  7,  7,  8,  8,  8,  7,200,100,152, 53, 53,  7,  8,152,152,152,152,152,152,152],
	   [  7,  7,  7,  8,  8,  7,100,100,152,  7,  7,  8,  8,152,152,152,152,152,152,152],
	   [ 53, 53,  7,  8,  8,  8,  8,  7,152,  7,  7,  8,  7, 54, 54, 54, 54,  7,152,152],
	   [ 53, 53,  7,  8,  8,152,152,152,152,  7,  7,  8,  7, 54, 54, 54, 54,  7,152,152],
	   [ 53, 53,  7,  8,  8,152,152,  7,220,100,  7,  8,  7,  7,  7,  7,  7,  7,  7,152],
	   [ 53, 53,  7,  8,  8,152,152,  7,100,100,  7,  8,  8,  8,  8,  8,  8,  8,  8, 95],
	   [ 53, 53,  7,  8,  8,152,152,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  8, 95],
	   [152,152,152, 96, 96,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152]

	];	

var map00_npc=[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

const MAP_WIDTH = 640;
const MAP_HEIGHT = 640;
const MAP_GRASS = 0;
const MAP_ROAD01 = 1;
const MAP_STONE = 101;
const MAP_SAND = 3;
const MAP_SANDROAD01 = 4;
const MAP_SANDSTONE = 102;
const MAP_NPC_MON = 200;
const MAP_NPC_MON2 = 201;

var player = new Image();
var monster = new Image();
var monster2 = new Image();
var currentVillage = new Image();
var academy = new Image();
var village00 = new Image();
var village01 = new Image();
var village02 = new Image();
var bossmap = new Image();

// Charactor's direction
var motionIdx = 0;

// Monster's direction
var monsterIdx = 0;

player.src = './img/eagle.png';
monster.src = './img/mon00.png';
monster2.src = './img/mon01.png';
currentVillage.src = './img/map_academy_v2.png';
academy.src = './img/map_academy.png';
village00.src = './img/stage00.png';
village01.src = './img/stage01.png';
village02.src = './img/stage02.png';
bossmap.src = './img/bossmap.png';



function Player(id, name, x, y, img, direction) {
	this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.img = img;
	this.direction = direction;
}

function Monster(id, name, x, y, img) {
	this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.img = img;
}

function Map(id, img, width, height, mappingArray) {
	this.id = id;
	this.img = img;
	this.width = width;
	this.height = height;
	this.mappingArray = mappingArray;
}

var myPlayer = new Player('player01', 'yunha', UNIT*4 ,UNIT*2, player, EAST_DIRECTION);

var mapList = [];
var monsterList = {};

// Not Yet used...
mapList.push(new Map('00', academy, 640, 640, map_init));
mapList.push(new Map('01', village00, 1280, 1280, map00));
mapList.push(new Map('02', village01, 1280, 1280, map01));
mapList.push(new Map('03', village02, 1280, 1280, map02));
mapList.push(new Map('04', bossmap, 640, 640, map_boss));

// Current map index
var nowMap = mapList[0].mappingArray;
var nowMap_npc = map00_npc;

// dialog창 -yoda-
var chat=document.getElementById("dialog");

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

var spacePressed = false;

document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler, false);

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 32) {
    if(npcDetection() == 501) {
		chat.style="block";
		createDiag( temp[0] );
	}
  }
}, false);

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
	let isCollide = false;

	if(upPressed == true) {
		if( (myPlayer.y < MOVE_U )
			|| nowMap[ Math.ceil( (myPlayer.y - UNIT) / UNIT) ][((myPlayer.x-(myPlayer.x%UNIT)) / UNIT)] >= 100
			|| nowMap[ Math.ceil( (myPlayer.y - UNIT) / UNIT) ][ Math.ceil(myPlayer.x / UNIT) ] > 100 ){
			isCollide = true;
		}
	}

	if(downPressed == true) {
		if( (myPlayer.y > (19 * UNIT - MOVE_U) )
			|| nowMap[ ( (myPlayer.y-(myPlayer.y%UNIT)+UNIT) / UNIT) ][ ( (myPlayer.x - (myPlayer.x%UNIT) ) / UNIT)] >= 100 
			|| nowMap[ ( (myPlayer.y-(myPlayer.y%UNIT)+UNIT) / UNIT) ][ Math.ceil( myPlayer.x / UNIT ) ] > 100 ){
			isCollide = true;
		}
	}

	if(leftPressed == true) {
		if( (myPlayer.x <= 0)
			|| nowMap[((myPlayer.y-(myPlayer.y%UNIT)) / UNIT)][ Math.ceil((myPlayer.x-UNIT) / UNIT) ] >= 100
			|| nowMap[ Math.ceil(myPlayer.y / UNIT) ][ Math.ceil((myPlayer.x-UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	if(rightPressed == true) {
		if( (myPlayer.x > (19 * UNIT - MOVE_U) )
			|| nowMap[((myPlayer.y-(myPlayer.y%UNIT)) / UNIT)][((myPlayer.x-(myPlayer.x%UNIT) + UNIT) / UNIT)] >= 100
			|| nowMap[ Math.ceil(myPlayer.y / UNIT) ][((myPlayer.x-(myPlayer.x%UNIT) + UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	return isCollide;

}

function npcDetection() {
	let npcId = -1;
	if(nowMap[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)] == 501) {
		npcId = 501;
	}

	return npcId;
}

function move() {
	if(upPressed == true) {
		myPlayer.y -= collisionDetection() ? 0 : MOVE_U;
		myPlayer.direction = NORTH_DIRECTION;
	}

	if(downPressed == true) {
		myPlayer.y += collisionDetection() ? 0 : MOVE_U;
		myPlayer.direction = SOUTH_DIRECTION;
	}

	if(leftPressed == true) {
		myPlayer.x -= collisionDetection() ? 0 : MOVE_U;
		myPlayer.direction = WEST_DIRECTION;
	}

	if(rightPressed == true) {
		myPlayer.x += collisionDetection() ? 0 : MOVE_U;
		myPlayer.direction = EAST_DIRECTION;
	}
}

function moveMap(){

	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==90 ){
		nowMap=map00;
		currentVillage = village00;
		myPlayer.x= (5*UNIT);
		myPlayer.y= (6*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==91 ){
		nowMap=map_init;
		currentVillage = academy;
		myPlayer.x= (5*UNIT);
		myPlayer.y= (8*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==99 ){
		nowMap=map01;
		currentVillage = village01;
		myPlayer.x= (1*UNIT);
		myPlayer.y= (16*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==98 ){
		nowMap=map00;
		currentVillage = village00;
		myPlayer.x= (18*UNIT);
		myPlayer.y= (12*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==97 ){
		nowMap=map02;
		currentVillage = village02;
		myPlayer.x= (3*UNIT);
		myPlayer.y= (18*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==96 ){
		nowMap=map01;
		currentVillage = village01;
		myPlayer.x= (13*UNIT);
		myPlayer.y= (1*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==95 ){
		nowMap=map_boss;
		currentVillage = bossmap;
		myPlayer.x= (1*UNIT);
		myPlayer.y= (8*UNIT);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==94 ){
		nowMap=map02;
		currentVillage = village02;
		myPlayer.x= (18*UNIT);
		myPlayer.y= (17*UNIT);
	}
}

function draw(){

	var x = MAP_WIDTH/2 - myPlayer.x;
	var y = MAP_HEIGHT/2 - myPlayer.y;
	context.drawImage(currentVillage,0,0,1280,1280,x,y,1280,1280);
	context.drawImage(myPlayer.img, IMG_U*motionIdx, IMG_U*myPlayer.direction, IMG_U, IMG_U, MAP_WIDTH/2, MAP_HEIGHT/2, UNIT, UNIT);

	move();
	console.log(`실제 캐릭터 위치 : (${Math.floor(myPlayer.x/UNIT)}, ${Math.floor(myPlayer.y/UNIT)})`);
	//  requestAnimationFrame(draw);
}


var init_talk = ['Acorn 아카데미에 온 것을 환영하네.. 자네는 이제 개발자가 되기 위한 모험을 떠날 걸세 내가 자그마한 도움을 주려하는데 받아 주겠나?'];
var temp = [];

for(var idx = 0; idx < init_talk.length; idx++) {
	temp[idx] = init_talk[idx].split('');
	console.log(temp[idx]);
}

// // npc 대화 정의. 임의로 박사님(강사님), 상점, 던전1 미션주는npc, 던전2, 던전3, 짱짱보스jquery몬
// var talk = ['짱짱개발자가 되서 돌아와라!', '상점입니다.', 'h1몬 5마리 잡아오세요', 'div몬 10마리 잡아와라', '뒤지기시름 table몬5마리 잡아와라', '안녕? 난짱짱강한 최종보스 jquery몬이라고 한다!'];

// // 대화 한단어로 분할한 것 배열 정의
// var individual=[];

// // for문으로 각 npc별 대화를 모조리 한단어씩 쪼개버림.
// // 강사님은 index 0, 상점 index 1, 던전1미션 index2, 던전2미션 index3, 던전3미션 index4, 최종보스 index5
// for(z=0; z<talk.length; z++){
// 	individual[z] = talk[z].split(' ');
// };

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
	setTimeout(function(){
		$('#dialog').html("");
      	chat.style.display="none";  
	}, 50*k);

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
