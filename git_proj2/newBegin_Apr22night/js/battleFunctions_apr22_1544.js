/*ㅁㅁ
 * 집에서....Apr22,2017
 * 			15:44
 * 			dev by JB
 * 
 * 금_작업) 
 * 상성(+데미지, -데미지)효과 부여.
 * 월드몬(맵전체 몬스터리스트)를 복사본과 싸우게끔 객체생성.. 다시만나도 싱싱한녀석만남.
 * 
 * 토_ 작업) actions -> battleFunctions로 rename.
 * 상점 이용구축. - 구축은 했음.. 아직 UI가 힘든상황이라, 아이템1,2,3,4쪽에 아이템사용과 상점이용을 겸하고있음.
 * 방생(포켓몬버리기) 구축 wantedService("makeMonFree"); - .splice로 배열원소를 통째로 날림. 
 *
 * 
 * #### 해야할것.
 * 보관.  
 * 골드, 민트, 포켓볼 넣고 뺼수잇게.
 * 
 * 포멧몬창고/// 보류. 포켓몬 버리기와 비슷한데.. ;;;;;; 살려종.
 * ++ 포켓몬storage라면 객체함수 또 만들어야하는뎁... 차라리 상태: 창고보관 -> disabled 이라고할까..
 * 
 * 레벨2 -기술타입() - .status가 반드시 있어야함.
 * 
 * *****퀘스트 **** mapBattlefunction
 * + 첫몬스터를 골라라. (mapBattle_ quest0 함수참고)
 * + 불속성 몇마리 쓰러트려라. (battleFunction_ winOrLose함수참고) 남은 포획수: @@마리.
 * + 3마리 몬스터북에 보유해라..
 * + 
 * 
 * */

var newPokemon = {   // 때려잡을 적 "몬스터 복사본", 몬볼로 잡는것은 세계몬스터 새걸로 가져옴.
		// ### 종원이형: newPokemon.name, lv, hp, att property 이런식으로 가져가면 되요!
		id: worldMon.id, 
		name: worldMon.name, 
		lv: worldMon.lv, 
		hp: worldMon.hp, 
		att: worldMon.att, 
		property: worldMon.property, 
		status: 0,
		
		initHp: worldMon.hp
		};
//	console.log("worldMon.id "+worldMon.id);
//	console.log("newPokemon.id: "+newPokemon.id);
/*
var noExists = true;
for(id in pokemons){
	if( worldMon.id == id ){
		noExists = false;
	}
//	console.log("alreadyExists  "+ noExists);
}
if(noExists){
	pokemons.push(new MyPokemon(worldMon.name, worldMon.lv, worldMon.exp, worldMon.hp, worldMon.att, worldMon.property )); 
	console.log("worked");
}
*/
function propertyBonus(){
	var showMsg = "상성이없음.";
	if((myMonid.property+1)%5 == newPokemon.property){
		showMsg = "\t newPokemon myMonid.att "
		showMsg += "\n상성전\t"+newPokemon.att + "  \t"+ myMonid.att;
		newPokemon.att = Number((newPokemon.att * 1.1).toFixed(1));
		myMonid.att = Number((myMonid.att * 0.9).toFixed(1));
		showMsg += "\n상성후\t"+ newPokemon.att + "  \t"+ myMonid.att;
	}
	if((newPokemon.property+1)%5 == myMonid.property){
		showMsg = "\t myMonid newPokemon.att "
		showMsg += "\n상성전\t"+myMonid.att + "  \t"+ newPokemon.att;
		myMonid.att = Number((myMonid.att * 1.1).toFixed(1));
		newPokemon.att = Number((newPokemon.att * 0.9).toFixed(1));
		showMsg += "\n상성후\t"+ myMonid.att + "  \t"+ newPokemon.att;
	}
	console.log(showMsg);

}
function propertyBonusRelease(){
	var showMsg = "상성이없음.";
	if((myMonid.property+1)%5 == newPokemon.property){
		showMsg = "\t newPokemon myMonid.att "
		showMsg += "\n해제전\t"+newPokemon.att + "  \t"+ myMonid.att;
		newPokemon.att = Number((newPokemon.att / 1.1).toFixed(1));
		myMonid.att = (myMonid.att / 0.9).toFixed(1);
		showMsg += "\n해제후\t"+ newPokemon.att + "  \t"+ myMonid.att;
	}
	if((newPokemon.property+1)%5 == myMonid.property){
		showMsg = "\t myMonid newPokemon.att "
		showMsg += "\n해제전\t"+myMonid.att + "  \t"+ newPokemon.att;
		myMonid.att = (myMonid.att / 1.1).toFixed(1);
		newPokemon.att = Number((newPokemon.att / 0.9).toFixed(1));
		showMsg += "\n해제후\t"+ myMonid.att + "  \t"+ newPokemon.att;
	}
	console.log(showMsg);

}
	
function enemyRandAtt(){
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var enemyRand = Math.floor(Math.random()*2);
		if(enemyRand == 0){
			console.log(newPokemon.name+"이 공격력 "+newPokemon.att+"로공격.");
			myMonid.hp = Number((myMonid.hp - newPokemon.att).toFixed(1));
			console.log(myMonid.name + "의 체력 "+myMonid.hp+" 남음.");
		}
		else{
			var criticalAttack02 = Number((newPokemon.att*(1+(Math.random()*0.3 + 0.2))).toFixed(1)); 
			console.log(newPokemon.name+"이 스킬 "+skillNames[newPokemon.property]+"로공격.");
			console.log("원래데미지: "+newPokemon.att+ "  스킬데미지: "+criticalAttack02);
			myMonid.hp = Number((myMonid.hp - criticalAttack02).toFixed(1));
			console.log(myMonid.name + "의 체력 "+myMonid.hp+" 남음.");
		}
	}
}

function tackle(){
	propertyBonus();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		console.log(myMonid.name+"이 공격력 "+myMonid.att+"로공격.");
		newPokemon.hp = Number((newPokemon.hp - myMonid.att).toFixed(1));
		console.log(newPokemon.name + "의 체력 "+newPokemon.hp+" 남음.");
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyBonusRelease();
}
	

function skillAttack(){
	propertyBonus();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var criticalAttack01 = Number((myMonid.att*(1+(Math.random()*0.3 + 0.2))).toFixed(1)) ; 
		console.log(myMonid.name+"이 스킬 "+skillNames[myMonid.property]+"로공격.");
		console.log("원래데미지: "+myMonid.att+ "  스킬데미지: "+criticalAttack01);
		newPokemon.hp = (newPokemon.hp - criticalAttack01).toFixed(1);
		console.log(newPokemon.name + "의 체력 "+newPokemon.hp+" 남음.");
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyBonusRelease();
}


//var propertyNames = ["물","바람","풀","불","흙"];
//var skillNames = ["물폭탄던지기!","바람베기!","덩쿨채찍!","화염폭탄!","지진일으키기!"];
/*var effectTimes;
var skill2s = ["reflect","sharpen","paralyse","burn","shieldOn"]; //
function skillLv2Attack(){
	var skillMsg = "적정레벨이 아닙니다. 현재레벨: " + myMonid.lv + "/ 요구레벨:2 "; 
	if( myMonid.lv > 1 && !winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		propertyBonus();
		switch(myMonid.property){
		case 0:
			// 아무런 이상없음. 0은 정상상태.
			break;
		case 1:
			newPokemon.status = skill2s[0];
			effectTimes =1;
			console.log(newPokemon.name+"에게 "+ skill2s[0]+"를 걸엇다!");
			break;
		case 2:
			newPokemon.status = skill2s[1];
			console.log(newPokemon.name+"에게 "+ skill2s[1]+"를 걸엇다!");
			break;
		case 3:
			newPokemon.status = skill2s[2];
			console.log(newPokemon.name+"에게 "+ skill2s[2]+"를 걸엇다!");
			break;
		case 4:
			newPokemon.status = skill2s[3];
			console.log(newPokemon.name+"에게 "+ skill2s[3]+"를 걸엇다!");
			break;
		case 5:
			newPokemon.status = skill2s[4];
			console.log(newPokemon.name+"에게 "+ skill2s[4]+"를 걸엇다!");
			break;
		}
		winOrLose();
		if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
			enemyRandAtt();
			winOrLose();
		}
		propertyBonusRelease();
	}  // if 레벨2조건  END.
	console.log(skillMsg);
}  //skillLv2Attack END

function skillLv2AttackRelease(){
	switch(newPokemon.status){	
	case 0:
		// 아무런 이상없음. 0은 정상상태.
		break;
	case "reflect":
		
		newPokemon.status = 0;
		console.log(newPokemon.name+"에게 "+ skill2s[0]+"를 걸엇다!");
		break;
	case "sharpen":
		newPokemon.status = skill2s[1];
		console.log(newPokemon.name+"에게 "+ skill2s[1]+"를 걸엇다!");
		break;
	case "paralyse":
		newPokemon.status = skill2s[2];
		console.log(newPokemon.name+"에게 "+ skill2s[2]+"를 걸엇다!");
		break;
	case "burn":
		newPokemon.status = skill2s[3];
		console.log(newPokemon.name+"에게 "+ skill2s[3]+"를 걸엇다!");
		break;
	case "shieldOn":
		newPokemon.status = skill2s[4];
		console.log(newPokemon.name+"에게 "+ skill2s[4]+"를 걸엇다!");
		break;
	}
}
*/

function meditation(){
	propertyBonus();
	var showMsg = "명상을 할수없습니다. \n\t(설명: 명상하면 전체체력보다 많아질경우.)"
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		if((myMonid.hp +13) < myMonid.initHp){
		myMonid.hp += 13;
		showMsg = "체력회복 (+13)!" +myMonid.hp;
		}
	}
	console.log(showMsg);
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyBonusRelease();
}


function catchWildMon(){
	var chanceToCatch = Math.random() * 0.2 + 0.6; // 체력비율 60~80% 확률잡기.
	if((newPokemon.hp/newPokemon.initHp) < chanceToCatch){
		pokemons.push(new MyPokemon(
				pokemons.length,
				worldMon.id,
				worldMon.name,
				worldMon.lv ,
				worldMon.exp ,
				worldMon.hp,
				worldMon.att,
				worldMon.property,
				0  // status =0 // 정상.
				));
		showItemMsg = "system- 새로운 몬스터 "+worldMon.name+"를 잡앗다!!";
		console.log(pokemons[pokemons.length-1]);
		
		//#### 종원이형: 여기서 전투모드 끝내고 맵으로 전환.
	}
	else{
		showItemMsg = "system- "+worldMon.name+"를 잡는데 실패했다!!";
	}
}

function useItem(item){
	if(item == "mint"){
		var showItemMsg = "사용할수 없습니다 - 설명: 민트먹을시 체력max보다 많습니다.";
		if(jiwoo.mint ==0){
			showItemMsg = "system- mint 없다 ㅜㅜ";
		}
		else if((jiwoo.mint >0) && ((myMonid.hp +25) < myMonid.initHp)){
			myMonid.hp +=25;		
			showItemMsg = myMonid.name+"회복!! 현재체력: "+ myMonid.hp;
			jiwoo.mint--;
			showItemMsg += "\nsystem- "+ item +" " + jiwoo.mint + "개 남았습니다.";
		}
		console.log(showItemMsg);
	}

	if(item == "pokeBall"){
		var showItemMsg = "";
		if(jiwoo.pokeBall ==0){
			showItemMsg ="system- pokeBallNo 없다 ㅜㅜ";
		}
		else if(jiwoo.pokeBall >0){
			jiwoo.pokeBall--;
			console.log("system- 포켓볼을 던졋다! \n"+ item +" " + jiwoo.pokeBall + "개 남았습니다.");
			catchWildMon();  // 체력비율 60~80% 확률잡기.
			
		} // jiwoo.pokeBall >0 END
		console.log(showItemMsg);
	}// 아이템사용_포켓볼 던졌을때. else if END
	console.log("jiwoo.mint "+jiwoo.mint +"  jiwoo.pokeBall "+ jiwoo.pokeBall);
} 

// 내가 소유한 몬스터와 태그하기.
function tagMyMon(bookNumber){	
	if(confirm("태그하시겟습니까?")){
//		turnMoves(parseInt(obj.getAttribute("id").substr(obj.getAttribute("id").length -2)), window.pokemonNo02);
		encounter(pokemons[bookNumber].id, worldMon.id); 
		console.log("너로 정했다!! 나와라~ "+pokemons[bookNumber].name+"!!!!");
		// #### 맵팀: 여기서 몬스터태그하면서 화면전환 가능한지...
	}
}



var winOrLoseResult = false;  //결과가 나올때까지 경기 속행. 둘중 죽거나, 도망치면 true.
function winOrLose(){

	if(newPokemon.hp <= 0){
		console.log("enemy loses.");
		if(quest[0].questDone && quest[1].questNeeds != 0 && newPokemon.property == 3){
			quest[1].questNeeds--;
			console.log("퀘스트1: 불속성몬스터 잡기!! \n\t완료까지"+quest[1].questNeeds+"마리 잡으면됨." );
		}
		expUp();
		winOrLoseResult= true;
		///########## 종원이형: 여기서 escape로 전투화면을 끝내는 화면연출.!!!
	}
	else if(myMonid.hp <= 0){
		console.log("user loses.");
		winOrLoseResult= true;
		///########## 종원이형: 여기서 escape로 전투화면을 끝내는 화면연출.!!!
	}
}

function expUp(){  
	var winExp = 40;  // 한판 승리때마다 얻는 경험치.
	var showMsg = "";   
	if((myMonid.exp + winExp) >= (60 + myMonid.lv*40)){  //1렙 풀경치 100, 2렙은 140, 3렙은 180...
		showMsg = myMonid.name+"가 레벨업했다!!!";
		showMsg += "\n경험치: "+(myMonid.exp);
		myMonid.exp = ((myMonid.exp + winExp) % (60 + myMonid.lv*40));
		showMsg += " -> "+ myMonid.exp +", ";
//		console.log("#### "+ (60 + myMonid.lv*40));    경험치가 앞에 있어야함. 아니면 앞에 함수식 망가짐;;
		showMsg += "\t레벨: "+myMonid.lv ;
		myMonid.lv += 1;  //#### 종원이형: 레벨 오를시에 생기는 이벤트. 레벨업연출은 여기서 수정해가면되욤.
		showMsg += " -> "+ myMonid.lv;
		myMonid.hp = (myMonid.initHp*1.2);
		myMonid.initHp = myMonid.hp;
		showMsg += "\n공격력 증가 (+4): \t" + myMonid.att;
		myMonid.att += 4;
		showMsg += " -> "+ myMonid.att;
		showMsg += "\n체력증가율 (1.2배):\t"+ myMonid.initHp+ " -> " + (myMonid.initHp*1.2);
		
	}
	else{
		myMonid.exp += winExp;
		showMsg = myMonid.name+"가"+ winExp+"만큼 경험치를 획득했다!!!";
	}
	console.log(showMsg);
}



function runAway(){
	winOrLoseResult = true;
	//###### 종원이형: 여기서 escape로 전투화면을 끝내는 화면연출.!!!
	
	
}
