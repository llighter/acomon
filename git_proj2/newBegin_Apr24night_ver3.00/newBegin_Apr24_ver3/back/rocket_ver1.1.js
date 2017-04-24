$(function(){

});


// 기본 키 설정  //	방향키, a키:메뉴, z키:확인, x키:뒤로가기
document.addEventListener("keydown", ykeyRokect);

function ykeyRokect(event){
/*	키코드 알수 있는 코드.
 	if(event.keyCode){
		console.log(String.fromCharCode(event.keyCode)+":"+event.keyCode);
	}
*/
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
    if(event.keyCode == 65){ 	//a키 : 메뉴키
    	aPressed();
    }
    else if(event.keyCode == 90){ //z키 : 확인키
    	zPressed();
    }
    else if(event.keyCode == 88){ //x키 : 뒤로가기키
    	xPressed();
    }
}


function upPressed(){
	if (listCount>1){
					// menuLocClass[1] = 현재위치 자손 이름 ex) .classname
		menuLocNth = menuLocClass[1]+":nth-child("+listCount+")";	//이동전 위치
		$(menuLocNth).css({color:menuLocB4Css1});	// 저장된 css입히기
		$(menuLocNth).css({backgroundColor:menuLocB4Css2});	// 저장된 css입히기
		listCount -=1;		//다음 리스트
		menuLocNth = menuLocClass[1]+":nth-child("+listCount+")"; //이동후 위치
		menuLocB4Css1 = $(menuLocNth).css("color");	//이동후 위치에 있는 div css저장하기
		menuLocB4Css2 = $(menuLocNth).css("backgroundColor");	//이동후 위치에 있는 div css저장하기
		$(menuLocNth).css({background:"red",color:"black"});	//이동후 위치 색 넣기
	}
}

function downPressed(){
	if (listCount < $(menuLocClass[1]).length){
		menuLocNth = menuLocClass[1]+":nth-child("+listCount+")"; // 이동전 위치
		$(menuLocNth).css({color:menuLocB4Css1});	// 저장된 Color입히기
		$(menuLocNth).css({backgroundColor:menuLocB4Css2});	// 저장된 Color입히기
//		$(menuLocNth).css(menuLocB4Css2);	// 저장된 bgColor입히기
		listCount += 1;
		menuLocNth = menuLocClass[1]+":nth-child("+listCount+")"; // 이동후
		menuLocB4Css1 = $(menuLocNth).css("color");	//이동후 위치에 있는 div css저장하기
		menuLocB4Css2 = $(menuLocNth).css("backgroundColor");	//이동후 위치에 있는 div css저장하기
		$(menuLocNth).css({background:"red",color:"black"});	//이동후 위치 색 넣기
		}
}
function leftPressed(){
}
function rightPressed(){
}
// a키 발생시 함수
function aPressed(){
	yBcListbox();
	// 실행을 메뉴창으로 변경해야됨.
}
function zPressed(){
	switch (menuLocClass[3]+listCount){
	
	//재현,커멘드
	case "whyBcListbox1":	//@
		yBcList1();
		break;
	case "whyBcListbox2":	//@
		yBcList2();
		break;
	case "whyBcListbox3":	//@
		yBcList3();
		break;
	case "whyBcListbox4":	//@
		yBcList4();
		break;
	case "whyBcSkillbox1":	//@
		//yBcSkill1();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(몸통박치기
		turnEnd();
		break;
	case "whyBcSkillbox2":	//@
		//yBcSkill2();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(스킬공격
		turnEnd();
		break;
	case "whyBcSkillbox3":	//@
		//yBcSkill3();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(명상하기
		turnEnd();
		break;
	case "whyBcSkillbox4":	//@
		//yBcSkill4();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(빈칸
		turnEnd();
		break;
	case "whyBcAcomonbox1":	//@
		//whyBcAcomon1();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(포켓몬 1
		break;
	case "whyBcAcomonbox2":	//@
		//whyBcAcomon2();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(2
		turnEnd();
		break;
	case "whyBcAcomonbox3":	//@
		//whyBcAcomon3();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(3
		turnEnd();
		break;
	case "whyBcAcomonbox4":	//@
		//whyBcAcomon4();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(4
		turnEnd();
		break;
	case "whyBcAcomonbox5":	//@
		//whyBcAcomon5();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(5
		turnEnd();
		break;
	case "whyBcAcomonbox6":	//@
		//whyBcAcomon6();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(포켓몬 6
		turnEnd();
		break;
		
	case "whyBcItembox1":	//@
		//yBcItem1();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(아이템 1
		turnEnd();
		break;
	case "whyBcItembox2":	//@
		//yBcItem2();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(아이템 2
		turnEnd();
		break;
	case "whyBcItembox3":	//@
		//yBcItem3();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(아이템 3
		turnEnd();
		break;
	case "whyBcItembox4":	//@
		//yBcItem4();
		//재현: 이자리 주석만 지우고 함수 넣으면됨.(아이템 4
		turnEnd();
		break;
	}
}
function xPressed(){
}


var menuLocB4Loc; // menuLocClass[0]전 위치(z키 기준)
var menuLocClass = [];	//menuLocClass class이름 받기 위한 배열
function menuLocClassFun(loc){
	menuLocClass[0]="."+loc		//class이름을 css형태로 변환
	menuLocClass[1]="."+$("."+loc).children().attr("class");	//부른 class의 자손 class이름
	menuLocClass[2]="."+$("."+loc).next().attr("class");	//부른 class의 자손 class이름
	menuLocClass[3]=loc;		// 돌아가기 저장하기 위한 class
	menuLocClass[4]=$(loc).children().attr("class");		// 돌아가기 저장하기 위한 class
	//부른 class의 자손의 리스트 순서에 있는 class
}

var menuLocNth;
//z키 사용+칸의 색+up,down키 움직임
var listCount = 1; // 초기값:시작할때 가장 상위의 메뉴부터 시작하기때문에
// class이름을 jquery에서 쓰기위해 이름을 바꿔 주는 함수
//이동키 누르기전의 css를 저장함
/* 이따가 합치기로
function menuLocNthFun(loc){
	$(loc+":nth-child("+listCount+")").css(menuLocB4Css);
	}
*/
var menuLocB4Css1;	//color백업
var menuLocB4Css2;	//background백업


function yBcListbox(){
	$(".whyTopMap").css({display:"none"});  //맵팀 캔버스 끄기
	$(".whyBtmTextbox").css({display:"none"});  //맵팀 캔버스 끄기
	$(".whyTopBattle").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	$(".whyBtmCommand").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	menuLocClassFun("whyBcListbox")
	listCount = 1; //리스트 초기값 선언.
}

function yBcList1(){
	$(".whyBcListbox").css({display:"none"});  //맵팀 캔버스 끄기
	$(".whyBcSkillbox").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	menuLocClassFun("whyBcSkillbox")
	listCount = 1; //리스트 초기값 선언.
}
function yBcList2(){
	$(".whyBcListbox").css({display:"none"});  //맵팀 캔버스 끄기
	$(".whyBcAcomonbox").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	menuLocClassFun("whyBcAcomonbox")
	listCount = 1; //리스트 초기값 선언.
}
function yBcList3(){
	$(".whyBcListbox").css({display:"none"});  //맵팀 캔버스 끄기
	$(".whyBcItembox").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	menuLocClassFun("whyBcItembox")
	listCount = 1; //리스트 초기값 선언.
}
function yBcList4(){
	$(".whyBcListbox").css({display:"none"});  //맵팀 캔버스 끄기
	$(".whyBcRun").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
	menuLocClassFun("whyBcRun")
	listCount = 1; //리스트 초기값 선언.
}
function turnEnd(){
	$(".whyBcSkillbox").css({display:"none"});
	$(".whyBcAcomonbox").css({display:"none"});
	$(".whyBcItembox").css({display:"none"});
	$(".whyBcRun").css({display:"none"});
	$(".whyBcListbox").css({display:"block"});
	menuLocClassFun("whyBcListbox");
	listCount = 1;
}







/*
function yBcSkillbox(){
	console.log(menuLocClass[0]);
	$(menuLocClass[0]).css({display:"none"});
	console.log(menuLocClass[2]);
	$(menuLocClass[2]).css({display:"block"});
	alert("오오");
	menuLocClassFun(menuLocClass[4]);
	listCount = 1;
}
function whyBcSkill(){
	
}
*/








//z키를 눌렀을때 작동하는 메뉴이동


//기본 메뉴창 콜은 a키로 한다.
//메뉴창



/*
위치:싸우기		위치:공격4메뉴			위치:싸우기
싸우기메뉴 (확인). 4개의 공격메뉴중 1번 (취소) 싸우기 메뉴로 돌아간다

싸우기메뉴 (확인). 4개의 공격메뉴중 1번 (확인) 1번공격 실행
*/








