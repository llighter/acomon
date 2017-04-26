
var canvas = document.getElementById("village");
var context = canvas.getContext("2d");


var myPlayer = new Player('player01', 'yunha', UNIT*4 ,UNIT*2, player, EAST_DIRECTION);


// TODO : 아직 사용하지 않음
var mapList = [];
var monsterList = {};
mapList.push(new Map('00', academy, 640, 640, map_init));
mapList.push(new Map('01', village00, 1280, 1280, map00));
mapList.push(new Map('02', village01, 1280, 1280, map01));
mapList.push(new Map('03', village02, 1280, 1280, map02));
mapList.push(new Map('04', bossmap, 640, 640, map_boss));

// Current map index
var nowMap = mapList[0].mappingArray;

// dialog창 -yoda-
var chat=document.getElementById("dialog");
var option=document.getElementById("option");

/**
 * TODO: 순서 정리 필요 - 오프닝을 앞으로
 * Mode
 * 0 : 맵
 * 1 : 대전 돌입
 * 2 : 오프닝
 * 3 : 대전 중
 * 4 : 메뉴 창 오픈
 */
// 초기값 opening을 위해 2로 조정 opening멘트 끝나면 0으로 변경
var currentMode = 2;


var textOn=0;
var onPokemonZone = false;
var battleCountDown = 4;


document.addEventListener('keyup', (event) => {
  if (event.keyCode === 32 && textOn == 0) {
	switch(npcDetection()) {
		case 501:
			chat.style="block";
			createDiag( temp[0] );
			textOn=1;
			break;
		case 502:
			chat.style="block";
			createDiag( temp[1] );
			option.style="block";
			textOn=2;
			// 상점은 2번으로 별 방법을 다했는데 안되서 그냥 상점은 textOn을 2로배정
			
			break;
		case 503:
			chat.style="block";
			createDiag( temp[2] );
			option.style="block";
			textOn=3;
			// 퀘스트는 textOn 3으로
			break;
		case 504:
			chat.style="block";
			createDiag( temp[3] );
			option.style="block";
			textOn=2;
			break;
		case 505:
			chat.style="block";
			createDiag( temp[4] );
			option.style="block";
			textOn=3;
			break;
		case 506:
			chat.style="block";
			createDiag( temp[5] );
			option.style="block";
			textOn=2;
			break;
		case 507:
			chat.style="block";
			createDiag( temp[6] );
			option.style="block";
			textOn=3;
			break;

	}
  } else if(event.keyCode === KEYBOARD_1) {
	  clearDiag();
	  // currentMode값을 0으로 변경(opening에 사용)
	  currentMode = 0;
	  $("body").css("background","white");	  
  }
//상점은 2번으로 별 방법을 다했는데 안되서 그냥 상점은 textOn을 2로배정  
// 상점.... 정리가 안되도 그냥 한다 작동이 되니까!
// mapBattleFunctions.js에서 store()함수 끌고옴
// *2키-민트 *3키-포켓볼 *4키-치료 *5키-방생 
  if(textOn==2){
	  switch(event.keyCode){
	  case KEYBOARD_2: store("mint"); break;
	  case KEYBOARD_3: store("pokeBall"); break;
	  case KEYBOARD_4: store("heal"); break;
	  case KEYBOARD_5: store("makeMonFree"); break;
		  
	  }
  }
// 퀘스트. textOn=3이고 2번 눌렀을때 퀘스트대화창발생 
// 퀘스트는 심각한 오류가 있음. 2번키누르면 퀘스트 수락인데 이게 중복으로 계속 발생
// 예를 들어 스테이지 2퀘스트가 몬스터볼 보상으로 얻는건데 2번키계속누르면 무한으로 얻을수 있음  
  if(textOn==3 && event.keyCode == KEYBOARD_2 ){
	  switch(npcDetection()){
	  case 503: getQuest(1); $('#option').html("[1] ㅂㅂ"); break;
	  case 505: getQuest(2); $('#option').html("[1] ㅂㅂ"); break;
	  case 507: getQuest(3); $('#option').html("[1] ㅂㅂ"); break;
	  }
	  
  }
}, false);


// A키 눌렀을 때
document.addEventListener('keyup', (event) => {
  if (event.keyCode === KEYBOARD_A) {
	currentMode = 4;
  }
}, false);

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
	} else if(nowMap[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)] == 502) {
		npcId = 502;
	} else if(nowMap[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)] == 503) {
		npcId = 503;
	} else if(nowMap[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)] == 504) {
		npcId = 504;
	} else if(nowMap[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)] == 505) {
		npcId = 505;
	} else if(nowMap[Math.ceil(myPlayer.y/UNIT)][Math.ceil(myPlayer.x/UNIT)+1] == 506) {
		npcId = 506;
	} else if(nowMap[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)] == 507) {
		npcId = 507;
	}

	return npcId;
}

function pokemonDetction() {
	var currentValue = nowMap[Math.ceil(myPlayer.y/UNIT)][Math.ceil(myPlayer.x/UNIT)];
	
	if(currentValue >= 50 && currentValue < 60) {
		onPokemonZone = true;
	} else {
		onPokemonZone = false;
	}
	return currentValue;
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
		setPosition(5, 6);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==91 ){
		nowMap=map_init;
		currentVillage = academy;
		setPosition(5, 8);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==99 ){
		nowMap=map01;
		currentVillage = village01;
		setPosition(1, 16);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==98 ){
		nowMap=map00;
		currentVillage = village00;
		setPosition(18, 12);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==97 ){
		nowMap=map02;
		currentVillage = village02;
		setPosition(3, 18);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==96 ){
		nowMap=map01;
		currentVillage = village01;
		setPosition(13, 1);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==95 ){
		nowMap=map_boss;
		currentVillage = bossmap;
		setPosition(1, 8);
	}
	if( nowMap[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)]==94 ){
		nowMap=map02;
		currentVillage = village02;
		setPosition(18, 17);
	}
}

function setPosition(x, y) {
	myPlayer.x = x * UNIT;
	myPlayer.y = y * UNIT;
}

function draw(){
	
	var x = MAP_WIDTH/2 - myPlayer.x;
	var y = MAP_HEIGHT/2 - myPlayer.y;
	context.drawImage(currentVillage,0,0,1280,1280,x,y,1280,1280);
	context.drawImage(myPlayer.img, IMG_U*motionIdx, IMG_U*myPlayer.direction, IMG_U, IMG_U, MAP_WIDTH/2, MAP_HEIGHT/2, UNIT, UNIT);

	// move();

	if(onPokemonZone && battleCountDown >=0) {
		context.font="30px Comic Sans MS";
		context.fillStyle = "red";
		context.textAlign = "center";
		context.fillText(battleCountDown, MAP_WIDTH/2, MAP_HEIGHT/2);
	} else if(onPokemonZone && battleCountDown < 0) {
		// 현재 모드 전투 모드로 변경
		currentMode = 1;
	}
	

	console.log(`실제 캐릭터 위치 : (${Math.floor(myPlayer.x/UNIT)}, ${Math.floor(myPlayer.y/UNIT)})`);
	//  requestAnimationFrame(draw);
}


var init_talk = ['Acorn 아카데미에 온 것을 환영하네.. 자네는 이제 개발자가 되기 위한 모험을 떠날 걸세 내가 바쁜 관계로 지금 바로 출발하게!', 
				'꼬마야 뭘 사고 싶니?',
				'여기는 HTML 마을이란다.. 퀘스트 있는데 할래?',
				'청년 뭘 사고 싶소?',
				'여기는 CSS 마을이에요 ㅎㅎ퀘스트 있는데 할래?',
				'아저씨 뭐 줄까?',
				'여기는 Javascript 마을이네.. 아주 위험하지..퀘스트 있는데 할래?',
				'오프닝 멘트입니다 아 귀찮다 귀찮아 워어어어어어엉어엉어어~~~',	// 오프닝멘트
				];

var market_talk = '[1] 다음에 올께요..    [2] 민트 캔디 구입    [3] 몬스터볼 구입   [4] 치료    [5] 몬스터 방생 ';
// 퀘스트 선택창
var quest_choice = '[1] ㄴㄴ [2]ㅇㅇ ';
var temp = [];

for(var idx = 0; idx < init_talk.length; idx++) {
	temp[idx] = init_talk[idx].split('');
	console.log(temp[idx]);
}

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

	switch(npcDetection()) {
		case 502:
		case 504:
		case 506:
			$('#option').text($('#option').text()+market_talk);
			break;
		case 503:
		case 505:
		case 507:
			$('#option').text($('#option').text()+quest_choice);
			break;
	}

}
//	오프닝 멘트 창 출력
function createOpen ( dialog) {
	for(k = 0; k < dialog.length; k++) {
		(function(k){
			setTimeout(function(){
			// (2) 50*k시간 마다 글자 하나를 dialog에 표시하겠다. 	
				$('#opening').text($('#opening').text()+dialog[k]);
			}, 50*k);
		}(k));
	}
}	
	createOpen(temp[7]);

function clearDiag() {
	$("#dialog").html("");
	chat.style.display="none"
	textOn=0;

	$("#option").html("");
	option.style.display="none"
	$("#opening").html("");
	opening.style.display="none"
}

var update = setInterval(function fps(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	if(currentMode == 0) {
		draw();
		move();
		moveMap();
		pokemonDetction();
	} else if(currentMode == 1) {
		yEventBattle();
		currentMode = 3;	// 대전 중
		// clearInterval(update);
	} else if(currentMode == 4) {
		draw();
	}
	

}, 51);
//  draw();

setInterval(function motionFps(){
	motionIdx=(motionIdx+1) % 4
}, 150);

var countDown =  setInterval(function() {
	if(onPokemonZone == true) {
		battleCountDown--;
	} else {
		battleCountDown = 4;
	}
}, 1000)