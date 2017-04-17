$(function(){

});

/*	1장. 객체의 오의를 깨닫다. */
/*	2장. 주화입마에 빠지다. */
/*	3장. 코딩 ? 환골탈태 : 폐인 */

// 기본 키 설정 /위 아래,위위아래, 위 아래,
//	방향키,a키:메뉴, z키:ok, x키:back
document.addEventListener("keydown", ykeyRokect);
/*
var rightPressed=false;
var leftPressed=false;
var downPressed=false;
var upPressed=false;
var aPressed=false;
var zPressed=false;
var xPressed=false;
*/
function ykeyRokect(event){
	if(event.keyCode){
		console.log(String.fromCharCode(event.keyCode)+":"+event.keyCode);
	}
	if(event.keyCode == 38){
		upPressed();
    }
	else if(event.keyCode == 40){
		downPressed();
    }
    if(event.keyCode == 37){
    	leftPressed();
    }
    else if(event.keyCode == 39){
    	rightPressed();
    }
    if(event.keyCode == 65){ 	//a키
    	aPressed();
    }
    else if(event.keyCode == 90){ //z키
    	zPressed();
    }
    else if(event.keyCode == 88){ //x키
    	xPressed();
    }
}
/* 일단 보류(호버효과 나중에 추가 예정.)
function upPressed(){
	if (yListForm==1){
		// 직접 색변화방법.()
		if (yListCount > 1){
			yLocNth = "."+yWinLoc+":nth-child("+(yListCount)+")"; //키누르기 전 위치 제이쿼리 형태로 변환.
			$(yLocNth).css(yListBeforecss);	// 키누르기 전 위치에 전에 저장한 css를 입힘.
			yListCount -= 1;
			yLocNth = "."+yWinLoc+":nth-child("+yListCount+")";	//키누른후 위치 제이쿼리형태
			yListBeforecss = $(yLocNth).css();	//이동전의 색을 저장함
			$(yLocNth).css({background:"purple",color:"black"});//키누른 후 위치에 정해놓은 색입힘.
			console.log(yLocNth);
			여기서부터 추가변경해야됨.!!downPressed() 포함.!!
			yMl2nd--;
		}
	}
}

function downPressed(){
	if (yListForm==1){
		if (yListCount < $(yWinLoc).length){
			yLocationNth = "."+yWinLoc+":nth-child("+yBclCount+")";
			$(yLocationNth).css({background:"gold",color:"white"});
			yBclCount += 1;
			yLocationNth = yLocation+":nth-child("+yBclCount+")";
			$(yLocationNth).css({background:"purple",color:"black"});
			console.log(yLocationNth);
			yMl2nd++;
		}
	}
}
*/

function upPressed(){
	if(yListCount>1){
		yMouseY-=yMouseLoc[1];
		$("#whyMouse").css({top:yMouseY});
		yListCount--;
		console.log(yListCount);
	}
//	$("#whyMouse").offset(yMouseLoc[0]);
//	yMouseLoc[1]
}
function downPressed(){
	if(yListCount<$(yWinLoc[2]).length){
		yMouseY+=yMouseLoc[1];
		$("#whyMouse").css({top:yMouseY});
		yListCount++;
		console.log(yListCount);
	}
//	yMouseLoc[1]
}
function leftPressed(){
	
}

function rightPressed(){
	
}

// a키 발생시 함수
function aPressed(){
	console.log(yWinLoc[0]);
	if(yWinLoc[0] == "whyTopMap"){  //맵화면에서 활성화
		yBattle.yBtmCommand();		// 실행을 메뉴창으로 변경해야됨.
	}
	else{
		console.log("메뉴키를 사용할수 없는상태입니다.");
	}
	console.log(yWinLoc[0]);
}

function zPressed(){
	// yWinLoc값과yListCount를 이용해서 자동으로 값을 부를 방법이 있을꺼같은데..일단은 노가다 ㄱㄱ
	if(yWinLoc[0] == "whyBcListbox"){  // 공격하기 (큰 카테고리 들어가는 비교구문.)
		if(yListCount==1){   // 공격하기- 몸통박치기
			yBattle.yBcSkillbox();
		}
		else if(yListCount==2){  // 공격하기- 스킬어택
			yBattle.yBcAcomonbox();
		}
		else if(yListCount==3){  // 공격하기- 명상하기
			yBattle.yBcItembox();
		}
		else if(yListCount==4){  // 되돌아가기 버튼. 
			yBattle.yBcRun();
			aPressed();
		}
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){ // 가방뒤지기 (큰 카테고리 들어가는 비교구문.)
		yBattle.yBcSkill(yListCount);
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){ // 도감 살펴보기 (큰 카테고리 들어가는 비교구문.)
		yBattle.yBcSkill(yListCount);
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){ // 도망치기.
		yBattle.yBcSkill(yListCount);
	}
	
}

function xPressed(){
	$(".whyBcListbox").css({display:"block"});
	$(".whyBcSkillbox").css({display:"none"});
	$(".whyTopBattle").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	$(".whyBtmCommand").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가

}






// 변수들 전체 정의~!!!
var yWinLoc = [];	//현재 화면 위치(함수쪽? vs div? 결정해야됨.) /
yWinLoc[0] = "whyTopMap"; //임시로 배틀화면으로 초기값 설정놓음. 

function yWinLocFun(loc){
	yWinLoc[0] = loc;	//class이름
	yWinLoc[1] = "."+loc;	//.class이름
	yWinLoc[2] = "."+$("."+loc).children().attr("class"); //.(class자손이름)
//	yMouseLocFun(yWinLoc[2]);
	yMouseLoc[0] = $(yWinLoc[2]).offset();	// 커서가 갈곳 위치
	yMouseLoc[1] = $(yWinLoc[2]).height();	// 커서가 갈곳 높이
	yMouseLoc[2] = $(yWinLoc[2]).width();	// 커서가 갈곳 너비
	yMouseY = $(yWinLoc[2]).offset().top;	// 커서가 갈곳 top값
	yMouseX = $(yWinLoc[2]).offset().left;	// 커서가 갈곳 left값
	$("#whyMouse").offset(yMouseLoc[0]);	// 커서 위치
	$("#whyMouse").height(yMouseLoc[1]);	// 커서 높이
	$("#whyMouse").width(yMouseLoc[2]); 	// 커서 너비
}
var yMouseLoc=[]; // [0]offset(); [1]height(); [2]width(); 값을 취할것임.
var yMouseX;
var yMouseY;


/*	아직 사용안함... 뭔가 떠올를듯 떠오르지 않음.ㅠ
//함수 실행을 위한 함수 좌표.
//yFunLoc[0] = 전체화면,	yFunLoc[1] = 탑박스,	yFunLoc[2] = 바텀박스, yFunLoc[3] = 전체창, yFunLoc[3] = 전체창
//함수 실행용 좌표 항상 0번은 상위 클래스 좌표
var yFunLoc=[]; 
	yFunLoc[0]="whyMainBox";
	yFunLoc[1]=[];
		yFunLoc[1][0]="whyTopbox";
		yFunLoc[1][1]="whyTbBattle";
		yFunLoc[1][2]="event";
		yFunLoc[1][3]="map";
	yFunLoc[2]=[];
		yFunLoc[2][0]="whyBottombox";
		yFunLoc[2][1]="whyBtTextbox";
		yFunLoc[2][2]="whyBbCommand";
	yFunLoc[3]=[];
		yFunLoc[3][0]="whyAllbox";
	yFunLoc[4]=[];
		yFunLoc[4][0]="noname40";
*/

// 리스트 폼 0:디폴트, 1:list형, 2:table형
var yListForm = 0;
yListForm = 1; // 임시로 리스트 폼을 1로 해놓음.
// 리스트 카운트
var yListCount = 0;	//리스트 순서(nth기준)
//var yListBeforecss;	//그전 css속성
//var yLocNth;	// "."+yWinLoc+":nth-child("+(yListCount)+")";형태의 값
		
// 화면전환 함수 실행.
var yBattle={
	yBtmCommand : function(){
		$(".whyTopMap").css({display:"none"});  //맵팀 캔버스 끄기
		$(".whyBtmTextbox").css({display:"none"});  //맵팀 캔버스 끄기
		$(".whyTopBattle").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
		$(".whyBtmCommand").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
		yWinLocFun("whyBcListbox"); //커서 위치 및 현재 위치 함수 소환.
		yListCount = 1; //리스트 초기값 선언.
	},
	yBcSkillbox : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcSkillbox").css({display:"block"});
		yWinLocFun("whyBcSkillbox");
		yListCount = 1; 
	},
	yBcAcomonbox : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcAcomonbox").css({display:"block"});
		yWinLocFun("whyBcAcomonbox");
		yListCount = 1; 
	},
	yBcItembox : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcItembox").css({display:"block"});
		yWinLocFun("whyBcItembox");
		yListCount = 1; 
	},
	yBcRun : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcRun").css({display:"block"});
		yWinLocFun("whyBcRun")
		yListCount = 1;
	},
	yBcSkill : function(num){
		alert(num+"번째 스킬발동");
	}
};
	

var yMap={
	yTopMap : function(){	
		$(".whyTopBattle").css({display:"none"});
		$(".whyTopMap").css({display:"block"});  //맵팀 캔버스 끄기
	}
};





