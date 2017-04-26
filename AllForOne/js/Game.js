var canvas = document.getElementById("village");
var context = canvas.getContext("2d");

var myPlayer = new Player('player01', 'yunha', UNIT*4 ,UNIT*2, player, EAST_DIRECTION);
var mapList = [];

var init_talk = ['Acorn 아카데미에 온 것을 환영하네.. 우리학원에 등록을 하고 싶다고? 그렇다면 간단한 프로젝트몬들을 길러야하네. 프로그래밍 마을의 모든 임무를 완수해서 프로젝트몬을 키우고 오게!', 
				'꼬마야 뭘 사고 싶니?',
				'HTML마을에 온 것을 환영하네 젊은 친구.. 내가 도움이 필요한데 좀 도와주겠는가...?',
				'청년 뭘 사고 싶소?',
				'여기는 CSS 마을이에요! 제 부탁 한가지만 들어주시겠어요?',
				'아저씨 뭐 줄까?',
				'여기는 Javascript 마을이네.. 아주 위험하지...부탁 좀 들어주겠나?',
				'취준생 지우는 세계최고의 프로그래밍 개발자가 되고 싶어 한다. 부족한 프로그래밍 실력을 키우기 위해 에이콘아카데미에 등록하려고 찾아가는데.... ',	// 오프닝멘트
				'엄청난 프로젝트몬을 수집했군. 이제 넌 쓸모가 없어졌다. 가지고 있는 프로젝트몬을 나에게 넘겨라!'
				];
// 상점 옵션
var market_talk = ['[1] 다음에 올께요.', '[2] 민트 캔디 구입',  '[3] 몬스터볼 구입',  '[4] 몬스터 치료',  '[5] 몬스터 방생'];
// 퀘스트 옵션
var quest_choice = '[1] 싫어요! [2]그럴께요! ';
var temp = [];

for(var idx = 0; idx < init_talk.length; idx++) {
	temp[idx] = init_talk[idx].split('');
	console.log(temp[idx]);
}

mapList.push(new Map('00', academy, 640, 640, map_init));
mapList.push(new Map('01', village00, 1280, 1280, map00));
mapList.push(new Map('02', village01, 1280, 1280, map01));
mapList.push(new Map('03', village02, 1280, 1280, map02));
mapList.push(new Map('04', bossmap, 640, 640, map_boss));

// Current map index
var nowMap = mapList[0];


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

/**
 * TODO: dialogMode 값이 어떤식으로 매핑되어있는지 추가 필요
 * Mode
 * 0 : 대화 창이 없는 일반 상태
 * 1 : 일반 대화 상태
 * 2 : 상점 거래
 * 3 : 퀘스트 상태
 */
var dialogMode=0;
var battleCountDown = 4;


createOpening(temp[7]);


document.addEventListener('keyup', (event) => {
  if (event.keyCode === SPACE_BAR && dialogMode == 0) {
	switch(npcDetection()) {
		case MAP_ACADEMY_YANG:
			chat.style="block";
			createDiag( temp[0] );
			dialogMode=1;
			break;
		case MAP_00_STORE_NPC:
			chat.style="block";
			createDiag( temp[1] );
			option.style="block";
			dialogMode=2;
			// 상점은 2번으로 별 방법을 다했는데 안되서 그냥 상점은 dialogMode을 2로배정
			
			break;
		case MAP_00_QUEST_NPC:
			chat.style="block";
			createDiag( temp[2] );
			option.style="block";
			dialogMode=3;
			// 퀘스트는 dialogMode 3으로
			break;
		case MAP_01_STORE_NPC:
			chat.style="block";
			createDiag( temp[3] );
			option.style="block";
			dialogMode=2;
			break;
		case MAP_01_QUEST_NPC:
			chat.style="block";
			createDiag( temp[4] );
			option.style="block";
			dialogMode=3;
			break;
		case MAP_02_STORE_NPC:
			chat.style="block";
			createDiag( temp[5] );
			option.style="block";
			dialogMode=2;
			break;
		case MAP_02_QUEST_NPC:
			chat.style="block";
			createDiag( temp[6] );
			option.style="block";
			dialogMode=3;
			break;
		case MAP_BOSS_NPC:
			chat.style="block";
			createDiag( temp[8] );
			dialogMode=1;
			break;
			

	}
  } else if(event.keyCode === KEYBOARD_1) {
	  clearDiag();
	  // currentMode값을 0으로 변경(opening에 사용)
	  currentMode = 0;
	  $("body").css("background","white");	  
  }
//상점은 2번으로 별 방법을 다했는데 안되서 그냥 상점은 dialogMode을 2로배정  
// 상점.... 정리가 안되도 그냥 한다 작동이 되니까!
// mapBattleFunctions.js에서 store()함수 끌고옴
// *2키-민트 *3키-포켓볼 *4키-치료 *5키-방생 
  if(dialogMode == 2){
	  switch(event.keyCode){
	  case KEYBOARD_2: store("mint"); break;
	  case KEYBOARD_3: store("pokeBall"); break;
	  case KEYBOARD_4: store("heal"); break;
	  case KEYBOARD_5: store("makeMonFree"); break;
		  
	  }
  }
// 퀘스트. dialogMode=3이고 2번 눌렀을때 퀘스트대화창발생 
// 퀘스트는 심각한 오류가 있음. 2번키누르면 퀘스트 수락인데 이게 중복으로 계속 발생
// 예를 들어 스테이지 2퀘스트가 몬스터볼 보상으로 얻는건데 2번키계속누르면 무한으로 얻을수 있음  
  if(dialogMode == 3 && event.keyCode == KEYBOARD_2 ){
	  switch(npcDetection()){
	  case MAP_00_QUEST_NPC: getQuest(1); $('#option').html("[1] 감사합니다!"); break;
	  case MAP_01_QUEST_NPC: getQuest(2); $('#option').html("[1] 감사합니다!"); break;
	  case MAP_02_QUEST_NPC: getQuest(3); $('#option').html("[1] 감사합니다!"); break;
	  }
	  
  }
}, false);


// A키 눌렀을 때
document.addEventListener('keyup', (event) => {
  if (event.keyCode === KEYBOARD_A) {
	currentMode = 4;
  }
}, false);

// @return : 가고자 하는 방향에 장애물(바위, NPC, 등.)이 있는지 판별한다.
function collisionDetection() {
	let isCollide = false;

	if(upPressed == true) {
		if( (myPlayer.y < MOVE_U )
			|| nowMap.matrix[ Math.ceil( (myPlayer.y - UNIT) / UNIT) ][((myPlayer.x-(myPlayer.x%UNIT)) / UNIT)] >= 100
			|| nowMap.matrix[ Math.ceil( (myPlayer.y - UNIT) / UNIT) ][ Math.ceil(myPlayer.x / UNIT) ] > 100 ){
			isCollide = true;
		}
	}

	if(downPressed == true) {
		if( (myPlayer.y > (19 * UNIT - MOVE_U) )
			|| nowMap.matrix[ ( (myPlayer.y-(myPlayer.y%UNIT)+UNIT) / UNIT) ][ ( (myPlayer.x - (myPlayer.x%UNIT) ) / UNIT)] >= 100 
			|| nowMap.matrix[ ( (myPlayer.y-(myPlayer.y%UNIT)+UNIT) / UNIT) ][ Math.ceil( myPlayer.x / UNIT ) ] > 100 ){
			isCollide = true;
		}
	}

	if(leftPressed == true) {
		if( (myPlayer.x <= 0)
			|| nowMap.matrix[((myPlayer.y-(myPlayer.y%UNIT)) / UNIT)][ Math.ceil((myPlayer.x-UNIT) / UNIT) ] >= 100
			|| nowMap.matrix[ Math.ceil(myPlayer.y / UNIT) ][ Math.ceil((myPlayer.x-UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	if(rightPressed == true) {
		if( (myPlayer.x > (19 * UNIT - MOVE_U) )
			|| nowMap.matrix[((myPlayer.y-(myPlayer.y%UNIT)) / UNIT)][((myPlayer.x-(myPlayer.x%UNIT) + UNIT) / UNIT)] >= 100
			|| nowMap.matrix[ Math.ceil(myPlayer.y / UNIT) ][((myPlayer.x-(myPlayer.x%UNIT) + UNIT) / UNIT)] > 100 ){
			isCollide = true;
		}
	}

	return isCollide;

}

// @return : NPC를 만났다면 NPC번호를 전달, 안만났다면 -1을 전달
function npcDetection() {
	let mapValue = nowMap.matrix[Math.ceil(myPlayer.y/UNIT)-1][Math.ceil(myPlayer.x/UNIT)];
	
	// TODO: return이 두개인것은 좋지 않지만 일단 이것 하나만 따로 해야하기 때문에 return을 사용함
	let mapValue2 = nowMap.matrix[Math.ceil(myPlayer.y/UNIT)][Math.ceil(myPlayer.x/UNIT)+1];
	if(mapValue2 == MAP_02_STORE_NPC) {
		return mapValue2;
	}

	return (mapValue >= 501 && mapValue <= 508) ? mapValue : -1;	
}


// @return : 포켓몬을 만날 수 있는 지역에 있다면 포켓몬 번호를 전달, 일반 지역이면 -1을 전달
function pokemonDetction() {
	let mapValue = nowMap.matrix[Math.ceil(myPlayer.y/UNIT)][Math.ceil(myPlayer.x/UNIT)];

	// 전투에서 상대할 포켓몬 정하기
	switch(mapValue) {
		case MAP_00_POKEMON:
			battle_OpponentPokemon = 0;
			break;
		case MAP_01_POKEMON1:
			battle_OpponentPokemon = 1;
			break;
		case MAP_01_POKEMON2:
			battle_OpponentPokemon = 2;
			break;
		case MAP_02_POKEMON1:
			battle_OpponentPokemon = 3;
			break;
		case MAP_02_POKEMON2:
			battle_OpponentPokemon = 4;
			break;
	}
	
	return (mapValue >= 50 && mapValue < 60) ? mapValue : -1;
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

function changeMap(){
	let mapValue = nowMap.matrix[Math.ceil(myPlayer.y / UNIT)][Math.ceil(myPlayer.x / UNIT)];

	switch(mapValue) {
		case MAP_ACADEMY_TO_00:
			nowMap = mapList[1];
			setPosition(5, 6);
			break;
		case MAP_00_TO_ACADEMY:
			nowMap = mapList[0];
			setPosition(5, 8);
			break;
		case MAP_00_TO_01:
			nowMap = mapList[2];
			setPosition(1, 16);
			break;
		case MAP_01_TO_00:
			nowMap = mapList[1];
			setPosition(18, 12);
			break;
		case MAP_01_TO_02:
			nowMap = mapList[3];
			setPosition(3, 18);
			break;
		case MAP_02_TO_01:
			nowMap = mapList[2];
			setPosition(13, 1);
			break;
		case MAP_02_TO_BOSS:
			nowMap = mapList[4];
			setPosition(1, 8);
			break;
		case MAP_BOSS_TO_02:
			nowMap = mapList[3];
			setPosition(18, 17);
			break;
	}
}

/**
 * 
 * @param {*} x : 캐릭터의 x좌표상의 현재 위치
 * @param {*} y : 캐릭터의 y좌표상의 현재 위치
 */
function setPosition(x, y) {
	myPlayer.x = x * UNIT;
	myPlayer.y = y * UNIT;
}

function draw(){
	
	var x = MAP_WIDTH/2 - myPlayer.x;
	var y = MAP_HEIGHT/2 - myPlayer.y;
	context.drawImage(nowMap.img,0,0,nowMap.width,nowMap.height,x,y,nowMap.width,nowMap.height);
	context.drawImage(myPlayer.img, IMG_U*motionIdx, IMG_U*myPlayer.direction, 
						IMG_U, IMG_U, MAP_WIDTH/2, MAP_HEIGHT/2, UNIT, UNIT);

	if(pokemonDetction() > 0 && battleCountDown >=0) {
		context.font="30px Comic Sans MS";
		context.fillStyle = "red";
		context.textAlign = "center";
		context.fillText(battleCountDown, MAP_WIDTH/2, MAP_HEIGHT/2);
	} else if(pokemonDetction() > 0 && battleCountDown < 0) {
		// 현재 모드 전투 모드로 변경
		currentMode = 1;
	}
	
	console.log(`실제 캐릭터 위치 : (${Math.floor(myPlayer.x/UNIT)}, ${Math.floor(myPlayer.y/UNIT)})`);
	//  requestAnimationFrame(draw);
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
		case MAP_00_STORE_NPC:
		case MAP_01_STORE_NPC:
		case MAP_02_STORE_NPC:
			$('#option').html(market_talk[0]+market_talk[1]+market_talk[2]+"<br>"+market_talk[3]+market_talk[4]);
			break;
		case MAP_00_QUEST_NPC:
		case MAP_01_QUEST_NPC:
		case MAP_02_QUEST_NPC:
			$('#option').text($('#option').text()+quest_choice);
			break;
	}

}

//	오프닝 멘트 창 출력
function createOpening ( dialog ) {
	for(k = 0; k < dialog.length; k++) {
		(function(k){
			setTimeout(function(){
			// (2) 50*k시간 마다 글자 하나를 dialog에 표시하겠다. 	
				$('#opening').text($('#opening').text()+dialog[k]);
			}, 50*k);
		}(k));
	}
}	

function clearDiag() {
	$("#dialog").html("");
	chat.style.display="none"

	$("#option").html("");
	option.style.display="none"
	$("#opening").html("");
	opening.style.display="none"

	dialogMode=0;
}

var update = setInterval(function fps(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	if(currentMode == 0) {
		draw();
		move();
		changeMap();
		pokemonDetction();
	} else if(currentMode == 1) {
		yEventBattle();
		currentMode = 3;	// 대전 중
	} else if(currentMode == 4) {
		draw();
	}
	

}, 51);

// 캐릭터 움직임 표현
setInterval(function motionFps(){
	motionIdx=(motionIdx+1) % 4
}, 150);

// 전투지역 카운트다운 활성화
setInterval(function() {
	if(pokemonDetction() > 0) {
		battleCountDown--;
	} else {
		battleCountDown = 4;
	}
}, 1000);