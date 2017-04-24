// INIT
var canvas = document.getElementById("village");
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

var sand = new Image();
var grass = new Image();
var stone = new Image();
var road01 = new Image();
var player = new Image();
var monster = new Image();
var monster2 = new Image();
var sandStone = new Image();
var sandRoad01 = new Image();
var currentVillage = new Image();
var nextVillage = new Image();

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
currentVillage.src = './img/genMap01.png';
nextVillage.src = './img/genMap02.png';


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

var myPlayer = new Player('player01', 'yunha', 0,0, player, EAST_DIRECTION);


// Charactor coordinate
myPlayer.x = 0;
myPlayer.y = 0;

// EAST IS DEFAULT DIRECTION
myPlayer.direction = EAST_DIRECTION;

// Current map index
var nowMap = map00;
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
		if( (myPlayer.y < MOVE_U )
			|| nowMap[ Math.ceil( (myPlayer.y - UNIT) / UNIT) ][((myPlayer.x-(myPlayer.x%UNIT)) / UNIT)] > 100
			|| nowMap[ Math.ceil( (myPlayer.y - UNIT) / UNIT) ][ Math.ceil(myPlayer.x / UNIT) ] > 100 ){
			isCollide = true;
		}
	}

	if(downPressed == true) {
		if( (myPlayer.y > (19 * UNIT - MOVE_U) )
			|| nowMap[ ( (myPlayer.y-(myPlayer.y%UNIT)+UNIT) / UNIT) ][ ( (myPlayer.x - (myPlayer.x%UNIT) ) / UNIT)] > 100 
			|| nowMap[ ( (myPlayer.y-(myPlayer.y%UNIT)+UNIT) / UNIT) ][ Math.ceil( myPlayer.x / UNIT ) ] > 100 ){
			isCollide = true;
		}
	}

	if(leftPressed == true) {
		if( (myPlayer.x <= 0)
			|| nowMap[((myPlayer.y-(myPlayer.y%UNIT)) / UNIT)][ Math.ceil((myPlayer.x-UNIT) / UNIT) ] > 100
			|| nowMap[ Math.ceil(myPlayer.y / UNIT) ][ Math.ceil((myPlayer.x-UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	if(rightPressed == true) {
		if( (myPlayer.x > (19 * UNIT - MOVE_U) )
			|| nowMap[((myPlayer.y-(myPlayer.y%UNIT)) / UNIT)][((myPlayer.x-(myPlayer.x%UNIT) + UNIT) / UNIT)] > 100
			|| nowMap[ Math.ceil(myPlayer.y / UNIT) ][((myPlayer.x-(myPlayer.x%UNIT) + UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	return isCollide;

}

function npcDetection() {
	let isNpcDetected = false;

	if(spacePressed == true) {
		switch(myPlayer.direction) {
			// TODO : add detail detection logic
			case NORTH_DIRECTION:
			case SOUTH_DIRECTION:
			case WEST_DIRECTION:
			case EAST_DIRECTION:
				if(nowMap_npc[Math.ceil(myPlayer.y/UNIT)][Math.ceil(myPlayer.x/UNIT)] > 100) {
					isNpcDetected = true;
				}
				break;
		}
	}

	return isNpcDetected;
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
	// map01에서 맵이동
	// TODO : Need to find obscure location to move next map
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==99 ){
		nowMap=map01;
		myPlayer.x= (0*UNIT);
		myPlayer.y= (0*UNIT);
		currentVillage = nextVillage;
	}
}

function draw(){

	var x = MAP_WIDTH/2 - myPlayer.x;
	var y = MAP_HEIGHT/2 - myPlayer.y;
	context.drawImage(currentVillage,0,0,1280,1280,x,y,1280,1280);
	context.drawImage(myPlayer.img, IMG_U*motionIdx, IMG_U*myPlayer.direction, IMG_U, IMG_U, MAP_WIDTH/2, MAP_HEIGHT/2, UNIT, UNIT);

	
	
	if(npcDetection()) {
		chat.style="block";
		createDiag( individual[0] );
	} else {
		move();
		console.log(`실제 캐릭터 위치 : (${Math.floor(myPlayer.x/UNIT)}, ${Math.floor(myPlayer.y/UNIT)})`);
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