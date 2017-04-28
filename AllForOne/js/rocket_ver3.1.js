/*ㅁㅁzz
 * 학원에서....Apr26,2017
 * 			14:40
 * 			dev by JB
 * MS949
 */
$(function(){
	yItemNum(); // 재현이꺼 초기값 읽어오기
});

var yPreView =".whyLodingbox"; //Undo하기 위한 저장값

var yLocClass = [];	//menuLocClass class이름 받기 위한 배열
yLocClass[0]="whyLodingbox"
function yLocClassFun(loc){
	yLocClass[0]=loc;		//class 제이쿼리형태로 선택
	yLocClass[1]=$("."+loc);   //class이름 listCount-1번째
	yLocClass[2]=$("."+loc+":nth-child("+yListCount+")");   //class이름 listCount-1번째
}

var yPreCss=[]; // 호버 효과를 위한 전상자 css 저장.

var yListCount = 1; // 리스트번호, 초기값:첫번째.
// 기본 키 설정  //	방향키, a키:메뉴, z키:확인, x키:뒤로가기
document.addEventListener("keydown", yKeyRokect);


function yKeyRokect(event){
// 	if(event.keyCode)console.log(String.fromCharCode(event.keyCode)+":"+event.keyCode);*/
	if(yKey){
		if(event.keyCode == 38){
			yUpPressed();
	    }
		else if(event.keyCode == 40){
			yDownPressed();
	    }
	    if(event.keyCode == 37){
	 	 }
	    else if(event.keyCode == 39){
	    }
	    else if(event.keyCode == 65){ 	//a키 : 메뉴키
	    	yAkeyPressed();
	    }
	    else if(event.keyCode == 32){ //z키 : 확인키 -> 스페이스로 바꿈.
	    	ySpacekeyPressed();
	    }
	    else if(event.keyCode == 88){ //x키 : 뒤로가기키
	    	yXkeyPressed();
	    }
	}
}

function yUpPressed(){
	if (yListCount > 1){
		yLocClass[2].css({'background-color':yPreCss[0],'color':yPreCss[1],'border':yPreCss[2],'font-weight':yPreCss[3]});
		yListCount -= 1;
		yLocClass[2]=$("."+yLocClass[0]+":nth-child("+yListCount+")");
		ySetCssFun();
	}
}
function yDownPressed(){
	if (yListCount < yLocClass[1].length){
		yLocClass[2].css({'background-color':yPreCss[0],'color':yPreCss[1],'border':yPreCss[2],'font-weight':yPreCss[3]});
		yListCount += 1;
		yLocClass[2]=$("."+yLocClass[0]+":nth-child("+yListCount+")");
		ySetCssFun();
	}
}

function ySetCssFun(){
	yPreCss[0] = yLocClass[2].css('background-color');
	yPreCss[1] = yLocClass[2].css('color');
	yPreCss[2] = yLocClass[2].css('border');
	yPreCss[3] = yLocClass[2].css('font-weight');
	yLocClass[2].css({background:'black',color:'gold',border:'2px solid white','font-weight':'bold'});
}
function yLeftPressed(){
}
function yRightPressed(){
}
// a키 발생시 함수
function yAkeyPressed(){
	switch (yPreView) {
	case ".whyLodingbox":
		yStartGame();
		break;
	case ".whyAllMap":	//맵화면상태
		yMapMenu();
		break;
	case '.whyBattle':
		console.log("배틀중에는 메뉴버튼을 사용할 수 없습니다.")
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
		yCmdList();
		break;
	case "whyMyItem":
		yCmdList();
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
	case "whyMyAcomonMenu":
		yMyAcomonSelectOff();
		break;	
	default:
		console.log("ERROR!! [CODE: E10,000bY_4s_8U ]")
		break;
	}
}
function ySpacekeyPressed(){
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
	case "whyMyAcomonMenu":	//@
		yMyAcomonMenuSelect();
		break;
	default:
		break;
	}
}

// 화면변화 전에 그전꺼 복원
function yPreCssFun(){
	yLocClass[2].css({'background-color':yPreCss[0],'color':yPreCss[1],'border':yPreCss[2],'font-weight':yPreCss[3]});
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
	$('.whyTextbox').css('z-index','10');
	yLocClassFun("whyMenu");
	ySetCssFun();
}
function yMapMenuOff(){
	yPreCssFun();
	$('.whyMenubox').css('z-index','10');
	$('.whyTextbox').css('z-index','10');
	yLocClassFun("whyAllMap");
	currentMode=0;
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

var yExListCount;
function yMyAcomonSelect(){
	yPreCssFun();
	$('.whyMyAcomonMenubox').css('top',
			( yListCount < 4 ? $('.whyMyAcomon').eq(yListCount-1).offset().top : 
				$('.whyMyAcomon').eq(yListCount-1).offset().top - 195));
	yExListCount = yListCount;
	yListCount = 1;
	checkPokemonBook();
	$('.whyMyAcomonMenubox').css({'z-index':'30'});
	$('.whyTextbox').css('z-index','30');
	yLocClassFun("whyMyAcomonMenu");
	ySetCssFun();
}
function yMyAcomonSelectOff(){
	yPreCssFun();
	yListCount = 1;
	$('.whyMyAcomonMenubox').css({'z-index':'10'});
	$('.whyMyAcomonMenubox').css('top',$('.whyMyAcomon').eq(1).offset().top);
	yLocClassFun("whyMyAcomon");
	ySetCssFun();
}

//	TODO 태그라인인데,, 다른거 눌러도 다 태그로됨.;;
function yMyAcomonMenuSelect(){
	
		if(yPreView == '.whyBattle'){
			tagMyMon(yExListCount-1);//재현 1번째 포켓몬 // pokemons[0]
			yAllyhp();
			yCmdList();
			yChangeAllyMon();
		}
		else{
			yTextmsg("지금은 <span style='color:#82b5f2'>태그</span> 할 수 없습니다.")
		}
		yItemNum();
}

function yCmdList(time){ 
	setTimeout(function(){
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
		$('.whyMyAcomonMenubox').css('z-index','10');
		$('.whyMyAcomonbox').css('z-index','10');
		$('.whyTextbox').css('z-index','10');
		$('.whyMyItembox').css('z-index','10');
		ySetCssFun();
	},time);
}

function yCmdMsg(time){ 
	setTimeout(function(){
		yPreCssFun();
		yListCount = 1;
		if(yPreView == '.whyAllMap'){
			$('.whyAllMap').css('z-index','20');
			$('.whyMenubox').css('z-index','30');
			$('.whyTextbox').css('z-index','10');
			yLocClassFun("whyMenu");
		}
		else if(yPreView == '.whyBattle'){
			$('.whyBattle').css('z-index','20');
			$('.whyCmdListbox').css('z-index','25');
			$('.whyTextbox').css('z-index','30');
			yLocClassFun("whyCmdList");
		}
		$('.whyMyAcomonMenubox').css('z-index','10');
		$('.whyMyAcomonbox').css('z-index','10');
		$('.whyMyItembox').css('z-index','10');
		ySetCssFun();
	},time);
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
	yTextmsg("");
	yLocClassFun("whyMyItem");
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

/* 전투시작 */ 
// 맵팀 => yEventBattle() => 
//전투화면 호출 // 실제로 중간 대화창이나, 기타 설정을 위해서 좀 늘어질듯..
function yEventBattle(){
	yPreView = '.whyBattle';
	yListCount = 1;
	$('.whyLodingbox').css('z-index','10'); // TODO 없어도되는거
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
	
	yKey = false;
//	$(".whyEnemyImg, .whyAllyImg").fadeIn();
	yAppearEnemyMon();
	yTextmsg("수풀에서 <span style='color:#FF6961'>"+newPokemon.name+"</span>(이)가 나왔다!!",100);
	setTimeout(function(){
		yAppearAllyMon();
		yTextmsg("가라~ <span style='color:#FF6961'>"+myMonid.name+"</span>몬!!<br>이번 프로젝트는 너로 정했다!!",100);
	},2000);
	yCmdList(4000);
	yKeyon(4000);
}



function yKeyon(time){
	setTimeout(function(){
		yKey=true;
		console.log("** 가능 *********************\t키 입력!")
	},time);
}
function yKeyoff(time){
	setTimeout(function(){
		yKey=false;
		console.log("** 불가능 *********************\t키 입력!")
	},time);
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
/*
function yCmdRun(){
	yPreCssFun();
	$('.whyCommand').css('z-index','10');
	$('.whyBattle').css('z-index','10');
	$('.whyCmdListbox').css('z-index','10');
	$('.whyAllMap').css('z-index','20');
	yLocClassFun("whyAllMap");
	yPreView = '.whyAllMap';
	currentMode = 0;
	battleCountDown = 4;
}
*/

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
		yBattleEnd("도망");
		break;
	default:
		break;
	}
}

function yMyItemSelect(){
	switch (yListCount) {
	case 1:
		if(yPreView == '.whyBattle'){
			yKeyoff();
			useItem("mint");
			enemyTurn(3500);
			yTurnEnd(7000);
		}
		else{
			useItem("mint");
		}
		break;
	case 2:
		if(yPreView == '.whyBattle'){
			yKeyoff();
			useItem("pokeBall");
			enemyTurn(4500);
			yTurnEnd(7000);
		}
		else{
			yTextmsg("지금은 <span style='color:#82b5f2'>몬스터볼</span>을 사용 할 수 없습니다.")
		}
		yItemNum();
		break;
	default:
		break;
	}
}


function yCmdSkillSelect(){
	switch (yListCount) {
	case 1:
		tackle();
		break;
	case 2:
		skillAttack();				//공격 스크립트
		break;
	case 3:
		meditation();				//공격 스크립트
		break;
	case 4:
		skillLv2Attack();
		break;
	default:
		break;
	}
	winOrLose();
	yKeyoff();
	enemyTurn(3500);
	yTurnEnd(7000);
}


function yItemNum(){
	$('.whyMyItem').eq(0).html("민트 x <span style='color:#82b5f2'>"+jiwoo.mint+"</span>");
	$('.whyMyItem').eq(1).html("몬스터볼 x <span style='color:#82b5f2'>"+jiwoo.pokeBall+"</span>");
}

function yTurnEnd(time){
	//console.log(yLocClass[0]+"의 "+yListCount+"번째함수")
	setTimeout(function (){
		if(!winOrLoseResult){
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
			winOrLose();
			yKeyon(100);
		}
	},time);
}










var yKey=true;

var viewHp;
var hpColor;
var yBlinkCondtion=true;
//  깜빡임효과.
//var turnCount=0;
// var imgClass;
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

yBlink();

//heal effect
function yAllyHealEffect(){
	$('.whyAllyHeal').fadeIn("slow","swing");
	$('.whyAllyHeal').delay(500).fadeOut("fast","swing");
}
function yAllyHealEffect2(){
	$('.whyAllyHeal2').fadeIn("slow","swing");
	$('.whyAllyHeal2').delay(500).fadeOut("fast","swing");
}


function yCatchNice(){
	$('.whyPocketBall').css({top:"350px",left:"-210px",width:'200px',height:'200px'}).fadeIn();
	$('.whyPocketBall').animate({left:"470px",top:"120px",width:'80px',height:'80px'},700);
	setTimeout(function (){$('.whyEnemyImg').fadeOut()},700);
	$('.whyPocketBall').animate({left:"460px",top:"110px",width:'100px',height:'100px'},700);
	$('.whyPocketBall').animate({left:"475px",top:"125px",width:'70px',height:'70px'},700);
	$('.whyPocketBall').animate({left:"470px",top:"120px",width:'80px',height:'80px'},700);
	$('.whyPocketBall').animate({top:"200px"},150);
	$('.whyPocketBall').animate({top:"150px"},80);
	$('.whyPocketBall').animate({top:"200px"},150);
	$('.whyPocketBall').animate({top:"180px"},80);
	$('.whyPocketBall').animate({top:"200px"},150);
	$('.whyPocketBall').animate({top:"190px"},80);
	$('.whyPocketBall').animate({top:"200px"},150);
}
function yCatchFail(){
	$('.whyPocketBall').css({top:"350px",left:"-210px",width:'200px',height:'200px'}).fadeIn();
	$('.whyPocketBall').animate({left:"470px",top:"120px",width:'80px',height:'80px'},700);
	setTimeout(function (){$('.whyEnemyImg').fadeOut()},700);
	$('.whyPocketBall').animate({left:"460px",top:"110px",width:'100px',height:'100px'},700);
	$('.whyPocketBall').animate({left:"475px",top:"125px",width:'70px',height:'70px'},700);
	$('.whyPocketBall').animate({left:"470px",top:"120px",width:'80px',height:'80px'},700);
	setTimeout(function (){$('.whyEnemyImg').fadeIn()},2800);
	$('.whyPocketBall').animate({left:"380px",top:"-60px",width:'60px',height:'60px'},300);
}

// 재현 태클이나,스킬공격에 넣으면됨.

function yAllyTackleEffect(){
	$('.whyAllyImg').animate({left:"-30px"},300);
	$('.whyAllyImg').animate({left:"150px"},300);
	$('.whyAllyImg').animate({left:"140px"},100);
	$('.whyAllyImg').animate({left:"150px"},100);
	$('.whyAllyImg').animate({left:"0px"},800);
}

function yAllyAttackEffect(){
	$('.whyAllyAttack').css({top:"260px",left:"220px",width:'60px',height:'60px'}).fadeIn();
	$('.whyAllyAttack').animate({top:"80px",left:"250px",width:'380px',height:'200px'},1000);
	$('.whyAllyAttack').fadeOut();
	yBlink('.whyEnemyImg');
}

function yEnemyAttackEffect(){
/*	애니매이션 부족으로 일단 접어놓음.
	$('.whyEnemyImg').css({'background-image':'url("img/rd/myMon_06d.gif")'});
	setTimeout(function(){$('.whyEnemyImg').css({'background-image':'url("img/rd/myMon_06c.png")'})},2730);
*/
	$('.whyEnemyAttack').css({top:"120px",left:"450px",width:'60px',height:'60px'}).fadeIn();
	$('.whyEnemyAttack').animate({top:"220px",left:"10px",width:'300px',height:'300px'},{duration:1000});
	$('.whyEnemyAttack').fadeOut();
// 깜빡임 효과(상대편이미지에 주기.적중시기준이지만 일단 전부 적용하는걸로.)
	yBlink('.whyAllyImg');
}

//hp변경 -> 이미지 변화
function yAllyhp(){
	viewHp = (myMonid.hp/myMonid.initHp)*100;
	if(viewHp>=50) hpColor = "#27d364";
	else if(viewHp<50 && viewHp>=25) hpColor = "#FFB347";
	else if(viewHp<25) hpColor = "#ff4b42";
	$('.whyAllyBarHp').css({width:viewHp+"%"});
	$('.whyAllyBarHp').css("background", hpColor);
}


function yEnemyhp(){
	viewHp = (newPokemon.hp/newPokemon.initHp)*100;
	if(viewHp>=50) hpColor = "#27d364";
	else if(viewHp<50 && viewHp>=25) hpColor = "#FFB347";
	else if(viewHp<25) hpColor = "#ff4b42";
	$('.whyEnemyBarHp').css({width:viewHp+"%"});
	$('.whyEnemyBarHp').css("background", hpColor);
}



function yAppearEnemyMon(){
		$('.whyEnemyImg').css({display:"block",left:'300px','background-image':newPokemon.img02});
		$('.whyEnemyImg').animate({left:'0px'},1000);
}	

function yAppearAllyMon(){
	$('.whyAllyImg').css({display:"block",left:'-300px','background-image':myMonid.img01});
	$('.whyAllyImg').animate({left:'0px'},1000);
}


function yChangeAllyMon(){
	$('.whyAllyImg').css({display:"block"});
	$('.whyAllyImg').animate({left:'-300px'},1000);
	setTimeout(function(){$('.whyAllyImg').css({'background-image':myMonid.img01})},1000);
	$('.whyAllyImg').animate({left:'0px'},1000);
	yTextmsg("가라!!"+myMonid.name+"몬!!!",500);
}


function yTextmsg(msg,time){ //settime까지 줄까??,time
	if(yPreView == '.whyBattle'){
		$('.whyCmdListbox').css('z-index','10');
		$('.whyCmdSkillbox').css('z-index','10');
		$('.whyTextbox').css('z-index','30');
	}
	else if(yPreView == '.whyAllMap' ){
		$('.whyTextbox').css('z-index','30');
	}
//	$('.whyText').html("");
	setTimeout(function(){$('.whyText').html(msg)},time);
}



function yBattleEnd(value){
	console.log("전투끝!!")
	switch (value) {
	case "HP승리":
		$(".whyEnemyImg").fadeIn();
		yTextmsg("<span style='color:#FF6961'>"+myMonid.name+
				"</span>(이)가 <span style='color:#FF6961'>"+newPokemon.name+"(을)를 처치했습니다!");
		expUp();
		break;
	case "HP패배":
		$(".whyAllyImg").fadeIn();
		yTextmsg("<span style='color:#FF6961'>"+newPokemon.name+
				"</span>에게 <span style='color:#FF6961'>"+myMonid.name+"(이)가 당했습니다.");
		yTextmsg("재시험 준비하세요.",2000);
		break;
	case "포획":
		yTextmsg("좋아~! 이제 최종 프로젝트와 싸울 준비를 해야겠군.",5000);
		break;
	case "도망":
		$('.whyAllyImg').animate({left:'-300px'},1000);
		yTextmsg("<span style='color:#FF6961'>"+newPokemon.name+
				"</span>은(는) 너무 어렵잖아...<br>다음 기회를 노리자.",2000);
		break;
	case "자멸":
		$(".whyEnemyImg").fadeIn();
		$(".whyAllyImg").fadeIn();
		yTextmsg("......",2000); //일단 주석처리해놓음.
		break;
	default:
		break;
	}
	setTimeout(function(){
		yPreCssFun();
		$('.whyCommand').css('z-index','10');
		$('.whyBattle').css('z-index','10');
		$('.whyCmdListbox').css('z-index','10');
		$('.whyAllMap').css('z-index','20');
		$('.whyTextbox').css('z-index','10');
		yLocClassFun("whyAllMap");
		yPreView = '.whyAllMap';
		yKeyon(100);
		currentMode = 0;
		battleCountDown = 4;
	},4000);
}














