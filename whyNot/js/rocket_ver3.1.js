/*ㅁㅁ
 * 학원에서....Apr25,2017
 * 			20:30
 * 			dev by JW
 */

var viewHp;
var hpColor;
var yBlinkCondtion=true;
//  깜빡임효과.
var turnCount=0;
var imgClass;
function yBlink(imgClass){
	blinkCount=0;
	yBlinkCondtion=false;
	Blink = setInterval(function(){
		blinkCount++;
		if(blinkCount>5){
			$(imgClass).toggle();
		}
		if(blinkCount==11){
			clearInterval(Blink);
			yBlinkCondtion=true
		}
	},250);
}


//heal effect
function yAllyHealEffect(){
	$('.whyAllyHeal').fadeIn("slow","swing");
	$('.whyAllyHeal').delay(500).fadeOut("fast","swing");
}

// 재현 태클이나,스킬공격에 넣으면됨.
function yAllyAttackEffect(){
	$('.whyAllyAttack').css({top:"260px",left:"220px",width:'60px',height:'60px'}).fadeIn();
	$('.whyAllyAttack').animate({top:"80px",left:"250px",width:'380px',height:'200px'},1000);
	$('.whyAllyAttack').fadeOut();
	yBlink('.whyEnemyImg');
}

function yEnemyAttackEffect(){
	$('.whyEnemyImg').css({'background-image':'url("img/monZ_01.gif")'});
	setTimeout(function(){$('.whyEnemyImg').css({'background-image':'url("img/monZ_00.png")'})},2730);
	$('.whyEnemyAttack').css({top:"120px",left:"450px",width:'60px',height:'60px'}).fadeIn();
	$('.whyEnemyAttack').animate({top:"220px",left:"10px",width:'300px',height:'300px'},{duration:1000});
	$('.whyEnemyAttack').fadeOut();
// 깜빡임 효과(상대편이미지에 주기.적중시기준이지만 일단 전부 적용하는걸로.)
	yBlink('.whyAllyImg');
}


//hp변경 -> 이미지 변화
function yAllyhp(){
	viewHp = (myMonid.hp/myMonid.initHp)*100;
	if(viewHp>=50) hpColor = "green";
	else if(viewHp<50 && viewHp>=25) hpColor = "gold";
	else if(viewHp<25) hpColor = "red";
	$('.whyAllyBarHp').css({width:viewHp+"%"});
	$('.whyAllyBarHp').css("background", hpColor);
}


function yEnemyhp(){
	viewHp = (newPokemon.hp/newPokemon.initHp)*100;
	if(viewHp>=50) hpColor = "green";
	else if(viewHp<50 && viewHp>=25) hpColor = "gold";
	else if(viewHp<25) hpColor = "red";
	$('.whyEnemyBarHp').css({width:viewHp+"%"});
	$('.whyEnemyBarHp').css("background", hpColor);
}

//var yPause=false;
function yTextmsg(msg){
	if(yPreView == '.whyBattle'){
		$('.whyCmdListbox').css('z-index','10');
		$('.whyCmdSkillbox').css('z-index','10');
		$('.whyTextbox').css('z-index','30');
	}
	$('.whyText').html(msg);
}





var yPreView; //Undo하기 위한 저장값

var yLocClass = [];	//menuLocClass class이름 받기 위한 배열
yLocClass[0]="whyLodingbox"
function yLocClassFun(loc){
	yLocClass[0]=loc;		//class 제이쿼리형태로 선택
	yLocClass[1]=$("."+loc);   //class이름 listCount-1번째
	yLocClass[2]=$("."+loc+":nth-child("+yListCount+")");   //class이름 listCount-1번째
/*	스크롤이동 일단보류0
	yLocClass[3]=yLocClass[1].height();
	yLocClass[11]=yLocClass[1].parent("div");  			 //부모 요소 class
	yLocClass[13]=yLocClass[11].height();
	console.log(yLocClass[3]+","+yLocClass[13]);
*/
	
/*
	yLocClass[10]=$(loc).children().attr("class");			// 돌아가기 저장하기 위한 class
	yLocClass[11]=$("."+$("."+loc).children().attr("class"));	//부른 class의 자손 class이름
	//부른 class의 자손의 리스트 순서에 있는 class
*/
}

var yPreCss=[]; // 호버 효과를 위한 전상자 css 저장.

var yListCount = 1; // 리스트번호, 초기값:첫번째.
// 기본 키 설정  //	방향키, a키:메뉴, z키:확인, x키:뒤로가기
document.addEventListener("keydown", ykeyRokect);

function ykeyRokect(event){
// 	if(event.keyCode)console.log(String.fromCharCode(event.keyCode)+":"+event.keyCode);*/

	if(event.keyCode == 38){
		yUpPressed();
    }
	else if(event.keyCode == 40){
		yDownPressed();
    }
    if(event.keyCode == 37){
    //	yLeftPressed();
    }
    else if(event.keyCode == 39){
    //	yRightPressed();
    }
    else if(event.keyCode == 65){ 	//a키 : 메뉴키
    	yAkeyPressed();
    }
    else if(event.keyCode == 90){ //z키 : 확인키
    	yZkeyPressed();
    }
    else if(event.keyCode == 88){ //x키 : 뒤로가기키
    	yXkeyPressed();
    }
    else if(event.keyCode == 89){ //y키 : 뒤로가기키
    	nextMsg=true;
    }
}
/* 스크롤이동 일단보류1
var moveScrollNum;
moveScrollNum = (yLocClass[13]) / (yLocClass[3]);
*/
function yUpPressed(){
	if (yListCount > 1){
		yLocClass[2].css({'background-color':yPreCss[0],'color':yPreCss[1]});
		yListCount -= 1;
		yLocClass[2]=$("."+yLocClass[0]+":nth-child("+yListCount+")");
		ySetCssFun();
	}
/* 스크롤이동 일단보류2
	if (moveScrollNum < (yListCount-1) ){
		console.log("됨");
		yLocClass[11].stop().animate( { scrollTop : '+='+yLocClass[3] } )
	}
*/
}
function yDownPressed(){
	if (yListCount < yLocClass[1].length){
		yLocClass[2].css({'background-color':yPreCss[0],'color':yPreCss[1]});
		yListCount += 1;
		yLocClass[2]=$("."+yLocClass[0]+":nth-child("+yListCount+")");
		ySetCssFun();
	}
}
function yLeftPressed(){
}
function yRightPressed(){
}
// a키 발생시 함수
function yAkeyPressed(){
	switch (yLocClass[0]) {
	case "whyLodingbox":
		yStartGame();
		break;
	case "whyAllMap":	//맵화면상태
		yMapMenu();
		break;
	default:
		console.log("ERROR!! [CODE: E10,000bY_4s_8U ]")
		break;
	}
}

function yXkeyPressed(){
	switch (yLocClass[0]) {
	case "whyMenu":
		yMapMenuOff();
		break;
	case "whyMyAcomon":
		yMyAcomonOff();
		break;
	case "whyMyItem":
		yMyItemOff();
		break;
	case "whyStatus":
		yStatusOff();
		break;
	case "whyReport":
		yReportOff();
		break;
	case "whyCmdSkill":
		yCmdSkillOff();
		break;	
	default:
		console.log("ERROR!! [CODE: E10,000bY_4s_8U ]")
		break;
	}
}
function yZkeyPressed(){
	switch (yLocClass[0]){
	case "whyMenu":	//@
		yMapMenuSelect();
		break;
	case "whyCmdList":	//@
		yCmdListSelect();
		break;
	case "whyMyAcomon":	//@
		yMyAcomonSelect();
		break;
	case "whyMyItem":	//@
		yMyItemSelect();
		break;
	case "whyCmdSkill":	//@
		yCmdSkillSelect();
		break;
	default:
		break;
	}
}

// 해당 divCSS 읽어오기
function ySetCssFun(){
	yPreCss[0] = yLocClass[2].css('background-color');
	yPreCss[1] = yLocClass[2].css('color');
	yLocClass[2].css({background:'black',color:'gold'});
}
// 화면변화 전에 그전꺼 복원
function yPreCssFun(){
	yLocClass[2].css({'background-color':yPreCss[0],'color':yPreCss[1]});
}
/* 게임 시작 */
// 게임 시작시 로딩화면에서 시작 화면으로 전환
function yStartGame(){
	yLocClassFun("whyAllMap");
	$('.whyLodingbox').css('z-index','10');
	$('.whyAllMap').css('z-index','20');
	yPreView = '.whyAllMap';
}
// 맵에서 a키 눌렀을때 메뉴 오픈, 클로즈
function yMapMenu(){
	yListCount = 1;
	$('.whyMenubox').css('z-index','30');
	$('.whyTextbox').css('z-index','30');
	yLocClassFun("whyMenu");
	ySetCssFun();
}
function yMapMenuOff(){
	yPreCssFun();
	$('.whyMenubox').css('z-index','10');
	$('.whyTextbox').css('z-index','10');
	yLocClassFun("whyAllMap");
}


function yMyAcomon(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','10');
		$('.whyMenubox').css('z-index','10');
	}
	else if(yPreView == '.whyBattle'){
		$('.whyBattle').css('z-index','10');
		$('.whyCmdListbox').css('z-index','10');
	}
	checkPokemonBook();
	$('.whyMyAcomonbox').css('z-index','20');
	$('.whyTextbox').css('z-index','30');
	yLocClassFun("whyMyAcomon");
	ySetCssFun();
}
function yMyAcomonOff(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','20');
		$('.whyMenubox').css('z-index','30');
		yLocClassFun("whyMenu");
	}
	else if(yPreView == '.whyBattle'){
		$('.whyBattle').css('z-index','20');
		$('.whyCmdListbox').css('z-index','30');
		yLocClassFun("whyCmdList");
	}
	$('.whyMyAcomonbox').css('z-index','10');
	$('.whyTextbox').css('z-index','10');
	ySetCssFun();
}

function yMyItem(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyMenubox').css('z-index','10');
	}
	else if(yPreView == '.whyBattle'){
		$('.whyCmdListbox').css('z-index','10');
	}
	$('.whyTextbox').css('z-index','30');
	$('.whyMyItembox').css('z-index','30');
	yLocClassFun("whyMyItem");
	ySetCssFun();
}
function yMyItemOff(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','20');
		$('.whyMenubox').css('z-index','30');
		yLocClassFun("whyMenu");
	}
	else if(yPreView == '.whyBattle'){
		$('.whyCmdListbox').css('z-index','30');
		yLocClassFun("whyCmdList");
	}
	$('.whyTextbox').css('z-index','10');
	$('.whyMyItembox').css('z-index','10');
	ySetCssFun();
}
function yStatus(){
	yPreCssFun();
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','10');
		$('.whyMenubox').css('z-index','10');
		$('.whyTextbox').css('z-index','10');
	}
	$('.whyStatusbox').css('z-index','30');
	
	yLocClassFun("whyStatus");
}
function yStatusOff(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','20');
		$('.whyMenubox').css('z-index','30');
		yLocClassFun("whyMenu");
	}
	$('.whyStatusbox').css('z-index','10');
	ySetCssFun();
}
function yReport(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','10');
		$('.whyMenubox').css('z-index','10');
		$('.whyTextbox').css('z-index','10');
		yLocClassFun("whyReport");
	}
	$('.whyReportBox').css('z-index','30');
	ySetCssFun();
}
function yReportOff(){
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','20');
		$('.whyMenubox').css('z-index','30');
		yLocClassFun("whyMenu");
	}
	$('.whyReportBox').css('z-index','10');
	ySetCssFun();
}

/* 전투 시작 */
//전투화면 호출 // 실제로 중간 대화창이나, 기타 설정을 위해서 좀 늘어질듯..
function yEventBattle(){
	yPreView = '.whyBattle';
	yListCount = 1;
	$('.whyAllMap').css('z-index','10');
	$('.whyMenubox').css('z-index','10');
	$('.whyTextbox').css('z-index','10');
	$('.whyBattle').css('z-index','20');
	$('.whyCommand').css('z-index','20');
	$('.whyCmdListbox').css('z-index','30');
	yLocClassFun("whyCmdList");
	yAllyhp();
	yEnemyhp();
	ySetCssFun();
}


function yCmdSkill(){
	yPreCssFun();
	yListCount = 1;
	$('.whyCmdListbox').css('z-index','10');
	$('.whyCmdSkillbox').css('z-index','30');
	yLocClassFun("whyCmdSkill");
	ySetCssFun();
}
function yCmdSkillOff(){
	yPreCssFun();
	yListCount = 1;
	$('.whyCmdSkillbox').css('z-index','10');
	$('.whyCmdListbox').css('z-index','30');
	yLocClassFun("whyCmdList");
	ySetCssFun();
}

//도망치기 현재 100%확률로 도망. 바로화면전환. 확률을 준다면,
// 위 커멘드 셀렉터와 아래 함수 사이에 끼어넣으면 될듯.
function yCmdRun(){
	yPreCssFun();
	$('.whyCommand').css('z-index','10');
	$('.whyBattle').css('z-index','10');
	$('.whyCmdListbox').css('z-index','10');
	$('.whyAllMap').css('z-index','20');
	yLocClassFun("whyAllMap");
	yPreView = '.whyAllMap';
}


// 리스트상태에서 선택~

function yMapMenuSelect(){
	switch (yListCount) {
	case 1:
		yMyAcomon();
		break;
	case 2:
		yMyItem();
		break;
	case 3:
		yStatus();
		break;
	case 4:
		yReport();
		break;
	default:
		break;
	}
}


function yCmdListSelect(){
	switch (yListCount) {
	case 1:
		yCmdSkill();
		break;
	case 2:
		yMyAcomon();
		break;
	case 3:
		yMyItem();
		break;
	case 4:
		yCmdRun();
		break;
	default:
		break;
	}
}


function yMyAcomonSelect(){
	switch (yListCount) {
	case 1:
		tagMyMon(yListCount-1);//재현 1번째 포켓몬 // pokemons[0]
		turnEnd();  //실행할 함수에 넣으면됨
		break;
	case 2:
		tagMyMon(yListCount-1);//재현 1번째 포켓몬 // pokemons[0]
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 3:
		tagMyMon(yListCount-1);//재현 1번째 포켓몬 // pokemons[0]
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 4:
		tagMyMon(yListCount-1);//재현 1번째 포켓몬 // pokemons[0]
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 5:
		tagMyMon(yListCount-1);//재현 1번째 포켓몬 // pokemons[0]
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 6:
		checkPokemonBook(yListCount-1);//재현 6번째 포켓몬
			// pokemons[5]  << 처음엔 없음. 새로운 몬스터 포획하면 보일몬스터.
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	default:
		break;
	}
}


function yMyItemSelect(){
	//## 종원이형에게 멘트// 3,4,5,6은 일단 잠시 상점이용으로 대체해놧어요.
	
	switch (yListCount) {
	case 1:
		useItem("mint");//재현 1번째 아이템
		turnEnd();  //실행할 함수에 넣으면됨
		break;
	case 2:
		useItem("pokeBall");//재현 2번째 아이템
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 3:
		checkJiwooBag();//재현 3번째 아이템
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 4:
		store("mint");//재현 4번째 아이템
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 5:
		store("pokeBall");//재현 5번째 아이템
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 6:
		store("heal");//재현 6번째 아이템
		turnEnd();	//실행할 함수에 넣으면됨
		break;
	case 6:
		store("makeMonFree");//재현 7번째 아이템
		turnEnd();	//실행할 함수에 넣으면됨
		break;
		
	// 아이템 버그 및 수량 부족.. 방법 모색중.
	default:
		break;
	}
}

function yCmdSkillSelect(){
	switch (yListCount) {
	case 1:
		setTimeout(function (){		//공격 턴
			yTextmsg(myMonid.name+"몬 몸통박치기!!");
			tackle();				//공격 스크립트
			yAllyAttackEffect();	//공격 시각효과
	    	yEnemyhp();				//공격 hp시각효과
		},200)
		setTimeout(function (){	//방어 턴
			 propertyBonus();
			yTextmsg(myMonid.name+"몬이 "+((newPokemon.att - myMonid.shield).toFixed(1))+"만큼 피해를 받았다!!");	
			 propertyBonusRelease();
			enemyTurn();
			yEnemyAttackEffect();	
			yAllyhp();		
		},4000)
		setTimeout(function (){turnEnd();},7000);  //실행할 함수에 넣으면됨
		break;
	case 2:
		setTimeout(function (){		//공격 턴
			yTextmsg(myMonid.name+"몬 \""+ skillNames[myMonid.property]+"\"발동!!");
			skillAttack();				//공격 스크립트
			yAllyAttackEffect();	//공격 시각효과
	    	yEnemyhp();				//공격 hp시각효과
		},200)
		setTimeout(function (){	//방어 턴
			propertyBonus();
			yTextmsg(myMonid.name+"몬이 "+((newPokemon.att - myMonid.shield).toFixed(1))+"만큼 피해를 받았다!!");	
			 propertyBonusRelease();	
			enemyTurn();
			yEnemyAttackEffect();	
			yAllyhp();		
		},4000)
		setTimeout(function (){turnEnd();},7000);  //실행할 함수에 넣으면됨
		break;
	case 3:
		setTimeout(function (){		//공격 턴
			yTextmsg(myMonid.name+"몬 명상하기!!");
			meditation();				//공격 스크립트
			yAllyHealEffect();	//공격 시각효과
			yAllyhp();				//공격 hp시각효과
		},200)
		setTimeout(function (){	//방어 턴
			propertyBonus();
			yTextmsg(myMonid.name+"몬이 "+((newPokemon.att - myMonid.shield).toFixed(1))+"만큼 피해를 받았다!!");	
			 propertyBonusRelease();		
			enemyTurn();
			yEnemyAttackEffect();	
			yAllyhp();		
		},4000)
		setTimeout(function (){turnEnd();},7000);  //실행할 함수에 넣으면됨
		break;
	case 4:
		setTimeout(function (){		//공격 턴
			yTextmsg(myMonid.name+"몬 \""+ skill2Names[myMonid.property]+"\"발동!!");
			skillLv2Attack();				//공격 스크립트
			yAllyAttackEffect();	//공격 시각효과
	    	yEnemyhp();				//공격 hp시각효과
		},200)
		setTimeout(function (){	//방어 턴
			if(myMonid.property == 0)
				yTextmsg( myMonid.name+ "이 "+skill2Names[myMonid.property]+" 상태이다.");		
			else if(myMonid.property == 1)
				yTextmsg( myMonid.name+ "이 "+skill2Names[myMonid.property]+" 상태이다.");		
			else if(myMonid.property == 2)
				yTextmsg( newPokemon.name+ "이 "+skill2Names[myMonid.property]+"상태이다.");		
			else if(myMonid.property == 3)
				yTextmsg( newPokemon.name+ "이 "+skill2Names[myMonid.property]+"상태이다.");		
			else if(myMonid.property == 4)
				yTextmsg( myMonid.name+ "이 "+skill2Names[myMonid.property]+" 상태이다.");	
			enemyTurn();
			yAllyhp();		
		},4000)
		setTimeout(function (){turnEnd();},7000);  //실행할 함수에 넣으면됨
		break;
	default:
		break;
	}
}


function turnEnd(){
	//console.log(yLocClass[0]+"의 "+yListCount+"번째함수")
	yPreCssFun();
	yListCount = 1;
	if(yPreView == '.whyAllMap'){
		$('.whyAllMap').css('z-index','20');
		$('.whyMenubox').css('z-index','30');
		$('.whyTextbox').css('z-index','30');
		yLocClassFun("whyMenu");
	}
	else if(yPreView == '.whyBattle'){
		$('.whyBattle').css('z-index','20');
		$('.whyCommand').css('z-index','20');
		$('.whyCmdListbox').css('z-index','30');
		$('.whyTextbox').css('z-index','10');
		yLocClassFun("whyCmdList");
	}
	$('.whyMyAcomonbox').css('z-index','10');
	$('.whyMyItembox').css('z-index','10');
	$('.whyCmdSkillbox').css('z-index','10');
	ySetCssFun();
}


