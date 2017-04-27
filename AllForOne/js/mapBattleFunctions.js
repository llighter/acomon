/*ㅁㅁ ㅁㅁ
* 학원에서....Apr27,2017
 * 			13:03
 * 			dev by JB
 * MS969
 * */
$(document).ready(function(){

 });

// 포켓몬세계 전체 몬스터리스트.
mapPokemons = [];

//					    몬북고유번호지정,id,  name 	  	  ,lv,exp,hp,att,방어,상성    //@@//
mapPokemons.push(new WorldPokemon(0, "HTML",		1, 0, 50, 13, 1, 0, "url('img/rd/myMon_01a.gif')","url('img/rd/myMon_01b.png')","url('img/rd/myMon_01c.png')" ));  // 세계 몬스터도감 id는 순서대로 넣어줄것.
mapPokemons.push(new WorldPokemon(1, "CSS", 		1, 0, 52, 15, 2, 1, "url('img/rd/myMon_02a.gif')","url('img/rd/myMon_02b.png')","url('img/rd/myMon_02c.png')")); 
mapPokemons.push(new WorldPokemon(2, "SQL", 		1, 0, 54, 17, 2, 2, "url('img/rd/myMon_03a.gif')","url('img/rd/myMon_03b.png')","url('img/rd/myMon_03c.png')")); 
mapPokemons.push(new WorldPokemon(3, "Javascript",  1, 0, 56, 15, 3, 3, "url('img/rd/myMon_04a.gif')","url('img/rd/myMon_04b.png')","url('img/rd/myMon_04c.png')")); 
mapPokemons.push(new WorldPokemon(4, "JAVA", 		1, 0, 58, 14, 3, 4, "url('img/rd/myMon_05a.gif')","url('img/rd/myMon_05b.png')","url('img/rd/myMon_05c.png')")); 	//property: "물","바람","풀","불","흙"
mapPokemons.push(new WorldPokemon(5, "AJAX", 		1, 0, 68, 19, 3, 1, "url('img/rd/myMon_06a.gif')","url('img/rd/myMon_06b.png')","url('img/rd/myMon_06c.png')"));   
		// ### 맵팀: 보스는 흙속성이니깐 물속성에 약함, 너무강해서 태그해야함. >> 퀘스트줄때 힌트제공?

// 내포켓몬북에 있는 몬스터리스트.
var pokemons =[];
var propertyNames = ["물","바람","풀","불","흙"];  //###맵팀?? 이름??;;;
var skillNames = ["물폭탄던지기!","바람베기!","덩쿨채찍!","화염폭탄!","지진일으키기!"]; //###맵팀?? 이름??;;;
var effectTimes;
var skill2Names = ["reflect","sharpen","paralyze","burn","shieldOn"]; 
var bookNumber = 0;

//								몬북고유번호지정,id,  name 	  ,lv,exp,hp,att,방어,상성,현재상태
pokemons.push(new MyPokemon((bookNumber++), 2, "SQL",		2, 0, 54, 17, 2, 2 ,"normal", "url('img/rd/myMon_03a.gif')","url('img/rd/myMon_03b.png')","url('img/rd/myMon_03c.png')" ));  // 일반공격이 1이면 스킬1공격은 최소 1.2 최대1.7랜덤
pokemons.push(new MyPokemon((bookNumber++), 3, "Javascript",2, 0, 56, 15, 3, 3 ,"normal", "url('img/rd/myMon_04a.gif')","url('img/rd/myMon_04b.png')","url('img/rd/myMon_04c.png')"));  // 
pokemons.push(new MyPokemon((bookNumber++), 1, "CSS",		2, 0, 52, 15, 2, 1 ,"normal", "url('img/rd/myMon_02a.gif')","url('img/rd/myMon_02b.png')","url('img/rd/myMon_02c.png')" ));  // 포켓몬번호 이름 체력 기본공격력 기본방어력
pokemons.push(new MyPokemon((bookNumber++), 4, "JAVA", 		2, 0, 58, 14, 3, 4 ,"normal", "url('img/rd/myMon_05a.gif')","url('img/rd/myMon_05b.png')","url('img/rd/myMon_05c.png')" ));  
pokemons.push(new MyPokemon((bookNumber++), 0, "HTML", 		2, 0, 50, 13, 1, 0 ,"normal", "url('img/rd/myMon_01a.gif')","url('img/rd/myMon_01b.png')","url('img/rd/myMon_01c.png')" ));  
//mapPokemons    // id:0, name:"aa", lv:1, exp:0, hp: 50, att:13, property:"물"
// jb < yn < gy < jw < jh < jb  ... 먹이사슬 외에는 평범하게고우.


// 지우상태.  //### 레벨이나 경험치 만들어야하나???
var jiwoo = {name: "한지우", age: 16 , mint:5, pokeBall:4, golds:30000};
$(".whyStatusNamebox").html("이름: "+jiwoo.name + "<br/> 나이: "+jiwoo.age )
.css({"font-size": "30pt", "font-weight": "bolder"});
$(".whyStatusMoneybox").html("소유 골드: "+ jiwoo.golds +"골드 "+"<br/> 민트: "+ jiwoo.mint +"개 <br/>몬스터볼: "+ jiwoo.pokeBall+ "개")
.css({"font-size": "20pt", "font-weight": "bolder"});
//console.log("jiwoo.mint "+jiwoo.mint +"  jiwoo.pokeBall "+ jiwoo.pokeBall);

var storage = {mint:0, pokeBall:0, golds:0};  //++ 포켓몬 상태창으로  .status = "창고보관" 인경우 클릭못하게..??
console.log("storage.mint "+storage.mint +"  storage.pokeBall "+ storage.pokeBall);


//맵에서 몬스터와 만날경우. - 나,상대는 랜덤설정.
var rand1;
var rand2;
var myMonid;

function goBattle(){ //#### 맵팀: 야생 포켓몬과의 만날때 시작부분.
noRepeatRand();  // 내가 뽑는 몬스터도 랜덤. 상대몬스터도 랜덤.으로 만들어놧음. 조율가능.
winOrLoseResult = false;
encounter(rand1,rand2);  // 나와 상대의 특정 몬스터를 넣고싶을땐  이놈 건드리면됨..
/////
}
goBattle();

function noRepeatRand(){
rand1 = parseInt(Math.random() * 5);
rand2 = parseInt(Math.random() * mapPokemons.length );
//console.log("rand1 : "+rand1 +"   rand2 : "+ rand2);
	while(rand1 == rand2){
		noRepeatRand();
	}
}
function encounter( randID1 , randID2 ){
	myMon = mapPokemons[randID1];
	worldMon = mapPokemons[randID2];
	
	for(var myIdx =0; myIdx< pokemons.length; myIdx++){ 
		// 섞여있을 내 몬북리스트에서 지정된 몬스터의 id와 같은 몬스터를 검색.
		if(pokemons[myIdx].id == myMon.id){
//			console.log("converted list num: "+myIdx);
			myMonid = pokemons[myIdx];  // mapMyMon = myMon.id  mapBattle -> actions
			console.log(myMonid);
			console.log(worldMon);
			break;
		}
	}
}

// 현재 소유한 몬스터북 보기.
/*function checkPokemonBook(bookNumber){  // bookNumber = listCount-1;
	console.log(bookNumber);
	// mapPokemons// id:0, name:"aa", lv:1, exp:0, hp: 50, att:13, property:"물"
	//propertyNames = ["물","바람","풀","불","흙"]  "물"<"바람"<"풀"<"불"<"흙"<"물"
	console.log("=================");
	console.log("bookNo: "+ pokemons[bookNumber].bookNo );
	console.log("id: "+ pokemons[bookNumber].id 
			+ " property: " + propertyNames[pokemons[bookNumber].property]);
	console.log("name: "+ pokemons[bookNumber].name);
	console.log("lv: "+ pokemons[bookNumber].lv);
	console.log("exp: "+ pokemons[bookNumber].exp);
	console.log("hp: "+ pokemons[bookNumber].hp + " / initHp: "+pokemons[bookNumber].initHp );
	console.log("att: "+ pokemons[bookNumber].att);
	console.log("shield: "+ pokemons[bookNumber].shield);
	console.log("skill: "+ skillNames[pokemons[bookNumber].property]);
	if(pokemons[bookNumber].lv > 1){
		console.log("hidden- skill: "+ skill2Names[pokemons[bookNumber].property]);
	}
	
	console.log("status: "+ pokemons[bookNumber].status);
	console.log("=================");
}*/
function checkPokemonBook(){  // bookNumber = listCount-1;
	for(var idx =0; idx< pokemons.length; idx++){
		$(".whyMyAcomonImg").eq(idx).css({'background-image':pokemons[idx].img00});
		$(".whyMyAcomonValue:eq("+idx+") .whyMyAcomonValueText:eq(0)").html(pokemons[idx].name);
		$(".whyMyAcomonValue:eq("+idx+") .whyMyAcomonValueText:eq(1)").html(pokemons[idx].lv);
		$(".whyMyAcomonValue:eq("+idx+") .whyMyAcomonValueText:eq(2)").html(pokemons[idx].hp);
		$(".whyMyAcomonValue:eq("+idx+") .whyMyAcomonValueText:eq(3)").html(pokemons[idx].status);
	}
}
checkPokemonBook();

function checkJiwooBag(){     //###가방보기는 이런식으로 뗴어내면 됨.
console.log("===== 가방검사 ======");
console.log("jiwoo.mint: " + jiwoo.mint);
console.log("jiwoo.pokeBall: " + jiwoo.pokeBall);
console.log("jiwoo.golds: " + jiwoo.golds);
console.log("====== END ======"); 
}

/////////////////////////////////////////////
/////////////////////////////////////////////
// 상점이용하기.  #### 맵팀: 아무래도 npc가 말걸면서 대화창에 가격표 보여주는게 좋을듯 싶다.
function store(wantedService){
	var storeMsg = "충분한 골드를 가지고 있지않습니다! \n다음에 이용해주세요!";
	
	console.log("jiwoo.mint "+jiwoo.mint +"  jiwoo.pokeBall "+ jiwoo.pokeBall + "  jiwoo.golds "+jiwoo.golds);
	if(wantedService == "mint" && jiwoo.golds >= 3000){   //### 사실 금고에 돈이 잇으면 알아서 뽑아가게해도되는데..
		jiwoo.mint++;
		jiwoo.golds -= 3000; 
		storeMsg = "민트를 구입하셨습니다 :)" 

					+"<br/>현재 소유한 민트수량: " + jiwoo.mint
					+"<br/>현재 소유한 골드량: "+ jiwoo.golds;

	}
	else if(wantedService == "pokeBall" && jiwoo.golds >= 5000){
		jiwoo.pokeBall++;
		jiwoo.golds -= 5000; 
		storeMsg = "몬스터볼을 구입하셨습니다 :)" 

					+"<br/> 현재 소유한 몬스터볼 수량: " + jiwoo.pokeBall
					+"<br/> 현재 소유한 골드량: "+ jiwoo.golds;

	}
	else if(wantedService == "heal" && jiwoo.golds >= 4000){
		for(var inx =0; inx< pokemons.length; inx++){
			storeMsg = pokemons[inx].name + ": "+ pokemons[inx].hp;
			pokemons[inx].hp = pokemons[inx].initHp;
			storeMsg += " -> "+ pokemons[inx].hp;
			storeMsg +="<br/> status:"+ pokemons[inx].status;
			pokemons[inx].status = "normal";
			storeMsg += " -> "+ pokemons[inx].status;
			console.log(storeMsg);
		}
		jiwoo.golds -= 4000;
		$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10 + " / "+myMonid.initHp);
		storeMsg =" 민영화 치료비 4천골드 ㅠㅠ.." + jiwoo.golds+"골드 보유";
	}
	else if(wantedService == "makeMonFree"){
		var listNo =0 ;
		for(bookNo in pokemons){  //### 맵팀: 대화창에 리스트 출력.
			$("#dialog").html("보유 포켓몬: list"+ (++listNo) +" 몬스터이름: " + pokemons[bookNo].name);
		}
		var findListNo =0 ;
		var removeMon = prompt("지우실 포켓몬 이름은...","");
		for(bookNo in pokemons){  
			if(pokemons[bookNo].name == removeMon){
				findListNo = parseInt(bookNo);  
				//console.log(findListNo + " ??? " + pokemons[findListNo].name);
				break;
			}
		}
		var confirmRemove = prompt("확실히 " + removeMon+"을 보내시겠습니까? yes/no","no");
		if( (confirmRemove == "yes") && (jiwoo.golds >= 12800) ){
			pokemons.splice(findListNo,1);
			storeMsg = "유기처리비용 12만 8천원/1마리 입니다! ";
			storeMsg += "<br/> 지우씨는 특별히 90% 할인해줄게요!";

			jiwoo.golds -= 12800;
			storeMsg +="소유골드: " + jiwoo.golds;
			for(var inx =0; inx <pokemons.length; inx++){
				pokemons[inx].bookNo = inx; 
			}
			
		}
		else if( (confirmRemove != "yes") && (jiwoo.golds >= 12800) ){
			storeMsg = "잘생각하셨어요 :) ";
		}

		listNo =0 ; //### 테스트용...
		for(bookNo in pokemons){  
			console.log("보유 포켓몬: list"+ (++listNo) +" 몬스터이름: " + pokemons[bookNo].name);
		} /////////
		checkPokemonBook();
	}
	$(".whyStatusMoneybox").html("소유 골드: "+ jiwoo.golds +"골드 "+"<br/> 민트: "+ jiwoo.mint +"개 <br/>몬스터볼: "+ jiwoo.pokeBall+ "개");
	$("#dialog").html(storeMsg);
}


/////////////////////////
///////////////////////// ### 맵팀과 연동// 확인을 못해봐서 밑에부분 아마 버그덩어리.
////////////////////////

const FIRST_MEET = 0;
const BEFORE_QUEST = 1;
const ING_QUEST = 2;
const DONE_QUEST = 3;
const END_QUEST = 4;

var quest = [];		//questNo, questContent, 		questNeeds, questDone, reward
quest.push(new QuestList(0, "\"셋중 아무거나 골라보시게\" "			,FIRST_MEET , false, "고른 포켓몬을 소유."));
quest.push(new QuestList(1, "\"불속성 몬스터를 2마리 쓰러트리시게.\" "	,FIRST_MEET , false, "4000골드."));  //###속성 random()?
quest.push(new QuestList(2, "\"몬스터북에 3마리 이상 소유하시게.\" " 	,FIRST_MEET , false, "몬스터볼 3개." ));
quest.push(new QuestList(3, "\"민트를 3개 가져다 주시게.\" "			,FIRST_MEET , false, "10000골드" )); 

// 변경 하기 전 세이브
// var questNow = 0;
// function getQuest_old(questId){  //### 맵팀: 퀘스트를 주는 npc
// 	var questShow = "";
// 	if(questNow == 1 && quest[1].questNeeds <= 0){  // 퀘스트 1(불속성2마리잡기) 완료할시.
// 		questShow = "오호.. 자네 생각보다 쓸만하구만!! 인물이야! 하하하하!!";
// 		questShow += "<br/>받기전 골드: " + jiwoo.golds;
// 		jiwoo.golds+= 4000;
// 		questShow += "<br/>4000 골드를 받았다. 현재 골드: " + jiwoo.golds;
// 		quest[1].questDone = true;
// 		questNow++;
// 		$('#option').html("[1] 감사합니다!");
// 	}
// 	if(questNow == 2 && pokemons.length >= quest[2].questNeeds){ // 퀘스트 2(소유몬스터 6마리) 완료할시.
// 		questShow = "벌써 이렇게나!!! 자네 배우는게 빠르구만! 하하하하!!";
// 		questShow += "<br/>받기전 몬볼수: " + jiwoo.pokeBall;
// 		jiwoo.pokeBall += 3;
// 		questShow += "<br/>몬볼 3개를 받았다. 현재 몬볼수: " + jiwoo.pokeBall;
// 		quest[2].questDone = true;
// 		questNow++;
// 		$('#option').html("[1] 감사합니다!");
// 	}
// 	if(questNow == 3 && jiwoo.mint >= quest[3].questNeeds){ // 퀘스트 3(민드3개 헌납) 완료할시.
// 		questShow = "벌써 이렇게나!!! 자네 배우는게 빠르구만! 하하하하!!";
// 		questShow += "<br/>받기전 골드: " + jiwoo.golds;
// 		jiwoo.mint -= 3;
// 		jiwoo.golds+= 10000;
// 		questShow += "<br/>4000 골드를 받았다. 현재 골드: " + jiwoo.golds;
// 		quest[3].questDone = true;
// 		questNow++;
// 		$('#option').html("[1] 감사합니다!");
// 	}
// 	if(quest[questNow].questDone == false ){   // 완료 못할시 퀘스트 내용과 보상을 보여줄것.
// 		questShow = "다음의 내용을 해결해주면 되네!";
// 		questShow += "<br/> 퀘스트 내용: "+ quest[questNow].questContent;
// 		questShow += "<br/> 퀘스트 보상: "+ quest[questNow].reward;
// 		$('#option').html("[1] 알겠습니다!");

// 	}
// 	$("#dialog").html(questShow);
// }

function questProcess(questId){  //### 맵팀: 퀘스트를 주는 npc
	var questShow = "";
	
	if(questId == 0 && (quest[questId].questStatus == FIRST_MEET)) {
		questShow = `Acorn 아카데미에 온 것을 환영하네.. 우리학원에 등록을 하고 싶다고? 
				그렇다면 에이코몬들을 길러야하네. 프로그래밍 마을의 모든 임무를 완수해서 
				에이코몬을 키우고 오게! 원한다면 에이코몬을 하나 줄 수 있는데 받을텐가?`;
		// TODO: 무조건 퀘스트를 받아야 하는 상황으로 설정해놓았음
		quest[questId].questStatus = BEFORE_QUEST;
		$('#option').html("'[1] 싫어요! [2]그럴께요!");
	} else if(questId == 0 && (quest[questId].questStatus == BEFORE_QUEST)) {
		questShow = "다음의 내용을 해결해주면 되네!";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = ING_QUEST;
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 0 && (quest[questId].questStatus == ING_QUEST)) {
		questShow = "뭐하고 있나! 아직도 안하다니..";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = pokemons[pokemons.length-1] ? DONE_QUEST : ING_QUEST; // 퀘스트 완료 여부 체크
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 0 && (quest[questId].questStatus == DONE_QUEST)) {
		// TODO: 퀘스트 성공 시 처리 필요
		questShow = "자 이제 어서 출발하게..";
		$('#option').html("[1] 알겠습니다!");
	}

	if(questId == 1 && (quest[questId].questStatus == FIRST_MEET)) {
		questShow = 'HTML마을에 온 것을 환영하네 젊은 친구.. 내가 도움이 필요한데 좀 도와주겠는가...?';
		quest[questId].questStatus = BEFORE_QUEST;
		$('#option').html("'[1] 싫어요! [2]그럴께요!");
	} else if(questId == 1 && (quest[questId].questStatus == BEFORE_QUEST)) {
		questShow = "다음의 내용을 해결해주면 되네!";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = ING_QUEST;
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 1 && (quest[questId].questStatus == ING_QUEST)) {
		questShow = "뭐하고 있나! 아직도 안하다니..";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = (1 == 1) ? DONE_QUEST : ING_QUEST; // TODO: 일단 무조건 된다는 가정
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 1 && (quest[questId].questStatus == DONE_QUEST)) {
		questShow = "오호.. 자네 생각보다 쓸만하구만!! 인물이야! 하하하하!!";
		questShow += "<br/>받기전 골드: " + jiwoo.golds;
		jiwoo.golds+= 4000;
		questShow += "<br/>4000 골드를 받았다. 현재 골드: " + jiwoo.golds;
		quest[questId].questDone = true;
		quest[questId].questStatus = END_QUEST;
		$('#option').html("[1] 감사합니다!");
	} else if(questId == 1 && (quest[questId].questStatus == END_QUEST)) {
		questShow = "자 이제 어서 출발하게..";
		$('#option').html("[1] 알겠습니다!");
	}

	
	if(questId == 2 && (quest[questId].questStatus == FIRST_MEET)) {
		questShow = '여기는 CSS 마을이에요! 제 부탁 한가지만 들어주시겠어요?';
		quest[questId].questStatus = BEFORE_QUEST;
		$('#option').html("'[1] 싫어요! [2]그럴께요!");
	} else if(questId == 2 && (quest[questId].questStatus == BEFORE_QUEST)) {
		questShow = "다음의 내용을 해결해주면 되네!";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = ING_QUEST;
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 2 && (quest[questId].questStatus == ING_QUEST)) {
		questShow = "뭐하고 있나! 아직도 안하다니..";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = (1 == 1) ? DONE_QUEST : ING_QUEST; // TODO: 일단 무조건 된다는 가정
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 2 && (quest[questId].questStatus == DONE_QUEST)) {
		questShow = "벌써 이렇게나!!! 자네 배우는게 빠르구만! 하하하하!!";
		questShow += "<br/>받기전 몬볼수: " + jiwoo.pokeBall;
		jiwoo.pokeBall += 3;
		questShow += "<br/>몬볼 3개를 받았다. 현재 몬볼수: " + jiwoo.pokeBall;
		quest[questId].questDone = true;
		quest[questId].questStatus = END_QUEST;
		$('#option').html("[1] 감사합니다!");
	} else if(questId == 2 && (quest[questId].questStatus == END_QUEST)) {
		questShow = "자 이제 어서 출발하게..";
		$('#option').html("[1] 알겠습니다!");
	}

	if(questId == 3 && (quest[questId].questStatus == FIRST_MEET)) {
		questShow = '여기는 Javascript 마을이네.. 아주 위험하지...부탁 좀 들어주겠나?';
		quest[questId].questStatus = BEFORE_QUEST;
		$('#option').html("'[1] 싫어요! [2]그럴께요!");
	} else if(questId == 3 && (quest[questId].questStatus == BEFORE_QUEST)) {
		questShow = "다음의 내용을 해결해주면 되네!";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		$('#option').html("[1] 알겠습니다!");
		quest[questId].questStatus = ING_QUEST;
	} else if(questId == 3 && (quest[questId].questStatus == ING_QUEST)) {
		questShow = "뭐하고 있나! 아직도 안하다니..";
		questShow += "<br/> 퀘스트 내용: "+ quest[questId].questContent;
		questShow += "<br/> 퀘스트 보상: "+ quest[questId].reward;
		quest[questId].questStatus = true ? DONE_QUEST : ING_QUEST; // TODO: 일단 무조건 된다는 가정
		$('#option').html("[1] 알겠습니다!");
	} else if(questId == 3 && (quest[questId].questStatus == DONE_QUEST)) {
		questShow = "벌써 이렇게나!!! 자네 배우는게 빠르구만! 하하하하!!";
		questShow += "<br/>받기전 골드: " + jiwoo.golds;
		jiwoo.mint -= 3;
		jiwoo.golds+= 10000;
		questShow += "<br/>4000 골드를 받았다. 현재 골드: " + jiwoo.golds;
		quest[questId].questDone = true;
		quest[questId].questStatus = END_QUEST;
		$('#option').html("[1] 감사합니다!");
	} else if(questId == 3 && (quest[questId].questStatus == END_QUEST)) {
		questShow = "자 이제 어서 출발하게..";
		$('#option').html("[1] 알겠습니다!");
	}

	$("#dialog").html(questShow);
}

function storeProcess(storeId) {
	var storeShow = "";
	var market_talk = ['[1] 다음에 올께요.', '[2] 민트 캔디 구입',  '[3] 몬스터볼 구입',  '[4] 몬스터 치료',  '[5] 몬스터 방생'];
	switch(storeId) {
		case 0:
			storeShow = '꼬마야 뭘 사고 싶니?';
			$('#option').html(market_talk[0]+market_talk[1]+market_talk[2]+"<br>"+market_talk[3]+market_talk[4]);
			break;
		case 1:
			storeShow = '청년 뭘 사고 싶소?';
			$('#option').html(market_talk[0]+market_talk[1]+market_talk[2]+"<br>"+market_talk[3]+market_talk[4]);
			break;
		case 2:
			storeShow = '아저씨 뭐 줄까?';
			$('#option').html(market_talk[0]+market_talk[1]+market_talk[2]+"<br>"+market_talk[3]+market_talk[4]);
			break;
	}

	$("#dialog").html(storeShow);
}

/*
function checkWorldBook(bookNumber){
	mapMonBkNo = mapPokemons[bookNumber];
	console.log("=================");
	console.log("bookNo: "+ mapMonBkNo.bookNo );
	console.log("id: "+ mapMonBkNo.id 
			+ " property: " + propertyNames[mapMonBkNo.property]);
	console.log("name: "+ mapMonBkNo.name);
	console.log("hp: "+ mapMonBkNo.hp);
	console.log("att: "+ mapMonBkNo.att);
	console.log("shield: "+ mapMonBkNo.shield);
	console.log("skill: "+ skillNames[mapMonBkNo.property]);
	console.log("=================");
	
}*/

function quest0(meetingMonId){   // 맵팀: quest0(~~);함수의 위치: 고를수있는 3가지 몬스터에게 각각 0,1,2...
	// meetingMonId는 collision이 일어날 몬스터의 id..
	if(quest[0].questNeeds != 0){  // collision id==0 일때.
		var getThisMon = mapPokemons[meetingMonId];
		//checkWorldBook(meetingMonId);  //### 맵팀: 뽑기전 몬스터 상태확인창.
		if(confirm(getThisMon.name + "은 어떤가? 한번 키워볼텐가?")){
			pokemons.push(new MyPokemon(
					pokemons.length,
					getThisMon.id,
					getThisMon.name,
					getThisMon.lv ,
					getThisMon.exp ,
					getThisMon.hp,
					getThisMon.att,
					getThisMon.property,
					"normal",  // status =0 // 정상.
					getThisMon.img00,   //@@//
					getThisMon.img01,
					getThisMon.img02
			));
			checkPokemonBook();
			console.log(pokemons[pokemons.length-1]);  //### 확실히 받앗는지 확인.
			quest[0].questNeeds--;
			if(quest[0].questNeeds ==0 ){ 
				// console.log("다음 퀘스트를 받으려면 퀘스트npc에게 완료보고 하시게!! 하하하하!");
				$("#dialog").html("다음 퀘스트를 받으려면 퀘스트npc에게 완료보고 하시게!! 하하하하!");
				$('#option').html("[1] 알겠습니다!");
				// 보상은 이미 받은상태이므로 패스.
				quest[0].questDone = true;
				questId++;
			}
		}
		else{
				$("#dialog").html("다른 에이코몬은 어떤가?");
		}
	}
	else{
		// console.log("자넨 이미 받은거같은데? 다음 퀘스트를 하려면 퀘스트npc를 찾아가시게!!!");
		$("#dialog").html("자넨 이미 받은거같은데? 다음 퀘스트를 하려면 퀘스트npc를 찾아가시게!!!");
		$('#option').html("[1] 알겠습니다!");
	}
}


////////////////
////////////////
////////////////












