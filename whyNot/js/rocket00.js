$(function(){

});

var YMenuList={};

var yMl1st=null;	// yMenuList배열 1차 좌표 // 
var yMl2nd=null;	// yMenuList배열 2차 좌표
var yMl3rd=null;	// yMenuList배열 3차 좌표
var yMl4th=null;	// yMenuList배열 4차 좌표


var yakeyState=1;	// 미니맵에서 전투가 발생했다는 가정==1 설정.
var yzkeyState="";
var yLocationNth;	// 메뉴내 좌표 이동을 class:nth-child를이용하려다보니 생긴숫자;


//맵팀과 합칠경우 함수줘서 설정값 줘야될듯.
document.addEventListener("keydown", ykeyRokect);

// 기본 키핸들러(추후 중복시 변경해야할 필요 있을 수 있음.)
// z=90, x=88, c=67 space=32, a=65
function ykeyRokect(event) {
    if(event.keyCode == 39) {
    }
    else if(event.keyCode == 37) {
    }
    if(event.keyCode == 40) {
        ykeyHanddown();
    }
    else if(event.keyCode == 38) {
        ykeyHandup();
    }
    if(event.keyCode == 90){ //z키
    	yzkeyHandenter();
    }
    if(event.keyCode == 65){ //a키
    	yakeyHandMenu();
    }	
}

var yLocation;
var yBclCount = 0;

function yakeyHandMenu(){
	if(yakeyState==1){
		YMenuList.ytestEvent();
	}else{
		console.log("메뉴키를 사용할수 없는상태입니다.")
	}
}

YMenuList.ytestEvent = function(){
//	$(".whyBottomCommand").css({display:"none"});  //맵팀
	$(".whyBottomCommand").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	yLocation = ".whyBcList"; //해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	yBclCount = 1; //nth-child가 1번부터 이므로 1을씀(첫번째 것에 호버?를 해야하므로.)
	yLocationNth = yLocation+":nth-child("+yBclCount+")";		// 이줄 아랫줄 : 처음 창열릴때 위치확인용 색변경
	$(yLocationNth).css({background:"purple",color:"black"});
	yakeyState=0;	//akey값 초기화
	yMl1st=1;
	yMl2nd=1;
}

// z키가 눌릴때마다 특정위치에 대한 좌표값 주고 그걸 실행.
function yzkeyHandenter(){
	yzkeyState = yMl1st+""+yMl2nd;
	switch (yzkeyState) {
	case "11":
		yBcFight();		
		break;
	case "12":
		yBcAcomon();
		break;
	case "13":
		yBcItem();
		break;
	case "14":
		yBcRun();
		break;
	default:
		break;
	}

}

// 전투화면 각창 로딩
function yBcFight(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcFight").css({display:"block"});
	yBclCount = 1;
	yLocation=".whyBcSkill"
	yLocationNth = yLocation+":nth-child("+yBclCount+")";
	$(yLocationNth).css({background:"purple",color:"black"});
}
function yBcAcomon(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcAcomon").css({display:"block"});
	yBclCount = 1;
}
function yBcItem(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcItem").css({display:"block"});
	yBclCount = 1;
}
function yBcRun(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcRun").css({display:"block"});
	yBclCount = 1;
}




function ykeyHandup(){
	// 메뉴창 이동 up이동
	if (yBclCount > 1){
		yLocationNth = yLocation+":nth-child("+yBclCount+")";
		$(yLocationNth).css({background:"gold",color:"white"});	//키누르기 전 위치
		yBclCount -= 1;
		yLocationNth = yLocation+":nth-child("+yBclCount+")";		
		$(yLocationNth).css({background:"purple",color:"black"});//키누른 후 위치
		console.log(yLocationNth);
		yMl2nd--;
	}
}
function ykeyHanddown(){
	if (yBclCount < $(yLocation).length){
		yLocationNth = yLocation+":nth-child("+yBclCount+")";
		$(yLocationNth).css({background:"gold",color:"white"});
		yBclCount += 1;
		yLocationNth = yLocation+":nth-child("+yBclCount+")";
		$(yLocationNth).css({background:"purple",color:"black"});
		console.log(yLocationNth);
		yMl2nd++;
	}
}

