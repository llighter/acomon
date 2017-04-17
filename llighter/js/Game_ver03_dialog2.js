// INIT
var canvas = document.getElementById("startVillage");
var context = canvas.getContext("2d");

var map00=[
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,0,55,0,0,0,0,101,0,0,0,0,0],
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



// �쁽�옱留� �꽑�뼵
var nowMap;
nowMap = map00;



const UNIT = 64;
const IMG_U = 96;
const MAPIMG_U = 64;
const MOVE_U = 16;

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

// character motion

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

// Character coordinate
var charX = 0;
var charY = 0;
//var nowX = charX-(charX%UNIT);
//var nowY = charY-(charY%UNIT);






// Character direction
var charDirection = SOUTH_DIRECTION;
// dialog창 -yoda-
var chat=document.getElementById("dialog");

function key(){
	if(event.keyCode == ARROW_LEFT){
		if( (charX <= 0)
			|| nowMap[((charY-(charY%UNIT)) / UNIT)][ Math.ceil((charX-UNIT) / UNIT) ] > 100
			|| nowMap[ Math.ceil(charY / UNIT) ][ Math.ceil((charX-UNIT) / UNIT)] > 100 ){
		}else{
			charX -= MOVE_U;
		}
        charDirection = WEST_DIRECTION;

	}
	if(event.keyCode == ARROW_UP){
		if( (charY < MOVE_U )
			|| nowMap[ Math.ceil( (charY - UNIT) / UNIT) ][((charX-(charX%UNIT)) / UNIT)] > 100
			|| nowMap[ Math.ceil( (charY - UNIT) / UNIT) ][ Math.ceil(charX / UNIT) ] > 100 ){
		}else{
			charY -= MOVE_U;
		}
        charDirection = NORTH_DIRECTION;
	}
	if(event.keyCode == ARROW_RIGHT){
		if( (charX > (19 * UNIT - MOVE_U) )
			|| nowMap[((charY-(charY%UNIT)) / UNIT)][((charX-(charX%UNIT) + UNIT) / UNIT)] > 100
			|| nowMap[ Math.ceil(charY / UNIT) ][((charX-(charX%UNIT) + UNIT) / UNIT)] > 100 ){
		}else{
			charX += MOVE_U;
		}
        charDirection = EAST_DIRECTION;
	}
	if(event.keyCode == ARROW_DOWN){
		if( (charY > (19 * UNIT - MOVE_U) )
			|| nowMap[ ( (charY-(charY%UNIT)+UNIT) / UNIT) ][ ( (charX - (charX%UNIT) ) / UNIT)] > 100 
			|| nowMap[ ( (charY-(charY%UNIT)+UNIT) / UNIT) ][ Math.ceil( charX / UNIT ) ] > 100 ){
		}else{
			charY += MOVE_U;
		}
        charDirection = SOUTH_DIRECTION;
	}
	
	// npc 앞에 있다는 가정하에 npc를 보고 엔터 누르면 dialog 생성
	if(event.keyCode==13){
		if(nowMap[charY/UNIT][charX/UNIT]==55 && charDirection == SOUTH_DIRECTION && textOn==0){
			console.log(textOn);
			chat.style="block";
			createDiag( individual );
			textOn = 1;
			console.log(textOn);
		}else if(textOn == 1){
			console.log("이게 실행되?2");
			textSkip();
		}
		}else if(textOn == 3){
			console.log(textOn);
			console.log("이게 실행되?");
			textEnd();
		}
}
	
	// map01濡� �씠�룞
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

    // 10x10嶺뚮씭�뒭野껓옙 �솻洹ｋ샍�굢�띿�ゅ뜝占� 嶺뚮씭踰딉옙�뭿爾욃뜝占� �뜝�럥�냱�뜝�럥�닣,�뜝�럡�맟�뜝�럩�젧
    if( charX/UNIT < 5) {
        // 0,0 占쎈쐻占쎈윞�뙼占썲뜝�럥�맶�뜝�럥吏쀥뜝�럩援꿨뜝�럥鍮앾옙�쐻�뜝占� �뜝�럩�맳�뛾�룆梨룡뤃�뼹�쐻占쎈윥占쎄틯�뜝�럥�맶�뜝�럥�쑅占쎌젂�뜝占�.
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;
    } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
        // X占쎈쐻占쎈윥占쎄괴�뜝�럥�맶占쎈쐻�뜝占� �뜝�럥��耀붾굝梨멨뜝�룞�맀占쎌맶�뜝�럥吏쀥뜝�럩援뀐옙�쐻占쎈윥占쎄괵�뜝�럩�뮋�뜝�럥�솕�뜝�럩援� �뜝�럥�맶�뜝�럥�쑋�뜝�럥�듃�솾�꺂�뒩占쎌굨�뜝�럩�몝�뜝�럥�맶占쎈쐻�뜝占� 4�뜝�럥�맶�뜝�럥�쑅�뜝�룞�삕 �뜝�럥�맶�뜝�럥�쑋雅��굝�뺧옙�굲嶺뚮ㅏ�솇壤쏆�⑥쪎�넫�맦�럢�뜝�럥�맶�뜝�럥吏쀥뜝�럩援� 5�뜝�럥�맶�뜝�럥�쑅�뜝�룞�삕 �뜝�럩�맳�뛾�룆梨룡뤃�뼹�쐻占쎈윥占쎄틯�뜝�럥�맶�뜝�럥�쑅占쎌젂�뜝占�.
        x_start = (charX-(charX%UNIT))/UNIT - 5
        x_end = (charX-(charX%UNIT))/UNIT + 5
        x_char = (charX%UNIT) + 5 * UNIT;
    } else {    // X >= 16
        // 10 占쎈쐻占쎈윞�뙼占썲뜝�럥�맶�뜝�럥吏쀥뜝�럩援꿨뜝�럥鍮앾옙�쐻�뜝占� �뜝�럩�맳�뛾�룆梨룡뤃�뼹�쐻占쎈윥占쎄틯�뜝�럥�맶�뜝�럥�쑅占쎌젂�뜝占�.
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;
    }

    if(charY/UNIT < 5) {
        // 0,0 占쎈쐻占쎈윞�뙼占썲뜝�럥�맶�뜝�럥吏쀥뜝�럩援꿨뜝�럥鍮앾옙�쐻�뜝占� �뜝�럩�맳�뛾�룆梨룡뤃�뼹�쐻占쎈윥占쎄틯�뜝�럥�맶�뜝�럥�쑅占쎌젂�뜝占�.
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;
    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        // Y占쎈쐻占쎈윥占쎄괴�뜝�럥�맶占쎈쐻�뜝占� �뜝�럥��耀붾굝梨멨뜝�룞�맀占쎌맶�뜝�럥吏쀥뜝�럩援뀐옙�쐻占쎈윥占쎄괵�뜝�럩�뮋�뜝�럥�솕�뜝�럩援� �뜝�럥�맶�뜝�럥�쑋嶺뚮씧�맻占쎌맶�뜝�럥�쑅�뜏類㏃삕 4�뜝�럥�맶�뜝�럥�쑅�뜝�룞�삕 �뜝�럥�맶�뜝�럥�쑅�뜝�럥�뼀�뜝�럥�맶�뜝�럥�쑋�뜝�럡�뜲�뜝�럥�맶�뜝�럥�쑅�뜏類㏃삕 5�뜝�럥�맶�뜝�럥�쑅�뜝�룞�삕 �뜝�럩�맳�뛾�룆梨룡뤃�뼹�쐻占쎈윥占쎄틯�뜝�럥�맶�뜝�럥�쑅占쎌젂�뜝占�.
        y_start = (charY-(charY%UNIT))/UNIT - 5
        y_end = (charY-(charY%UNIT))/UNIT + 5
        y_char = (charY%UNIT) + (5 * UNIT);
    } else {    // Y >= 16
        // 10 占쎈쐻占쎈윞�뙼占썲뜝�럥�맶�뜝�럥吏쀥뜝�럩援꿨뜝�럥鍮앾옙�쐻�뜝占� �뜝�럩�맳�뛾�룆梨룡뤃�뼹�쐻占쎈윥占쎄틯�뜝�럥�맶�뜝�럥�쑅占쎌젂�뜝占�.
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;
    }
	
    // �댖怨뚰�쀦뤃酉귥삕�굢占� �뜝�럥�렊�뜝�럩逾� 嶺뚮씭踰뤷뜝�룞�삕占쎈뎄 �윜諛몄굡占쎈뉴�뼨�먯삕
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

	// dialog 정의 -yoda-
 	var text00 = '피곤피곤 피피피피피피피피피곤피피곤 관용이형 짱짱맨인듯 다하셨네 퍄퍄퍄 윤하도 짱짱. 주말동안 도움이 안되서 미안합니다 사랑합니다.  '; 
	// (1) text를 한단어씩 쪼갠다.
 	individual = text00.split('');
 	function textEnd(){
		charDirection = NORTH_DIRECTION;
		chat.style.display="none";
		$('#dialog').html("");
		textOn = 0;
 	}
 	function textSkip(){
 		스킵한다.
 		
 	}
 	
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
	var textOn=0;
	