
/*ㅁㅁ
 * 학원에서....Apr24,2017
 * 			20:56
 * 			dev by JB
 * UTF-8
 * 
 * 금_작업) 
 * 상성(+데미지, -데미지)효과 부여.
 * 월드몬(맵전체 몬스터리스트)를 복사본과 싸우게끔 객체생성.. 다시만나도 싱싱한녀석만남.
 * 
 * 토_ 작업) actions -> battleFunctions로 rename.
 * 상점 이용구축. - 구축은 했음.. 아직 UI가 힘든상황이라, 아이템1,2,3,4쪽에 아이템사용과 상점이용을 겸하고있음.
 * 방생(포켓몬버리기) 구축 wantedService("makeMonFree"); - .splice로 배열원소를 통째로 날림. 
 *
 * 일_작업) 
 * *****퀘스트 **** mapBattlefunction
 *  //### 하지만 상상코딩이라. 버그덩어리일듯함..
 * + 첫몬스터를 골라라. (mapBattle_ quest0 함수참고)
 * + 불속성 몇마리 쓰러트려라. (battleFunction_ winOrLose함수참고) 남은 포획수: @@마리.
 * + 3마리 몬스터북에 보유해라..
 * 
 * *** 2차기술***
 * 레벨2 이상 조건에...
 * 속성 0,1,2,3,4 각각에게. 
 * "reflect" -상대몬스터 데미지반사 - 1회.
 * "sharpen" -상대몬스터 방어관통.
 * "paralyze" - 상대몬스터 1회 마비; 공격불가.  // 근데 이거 좀 사긴데...??;;;
 * "burn" - 화상걸린 상대몬스터가 총 3턴에 걸쳐 1차 화상은 5, 2차는 8, 3차는 11의 가중데미지를 받는다.
 * "shieldOn" - 스킬쓴 직후 2턴동안 몬스터의 방어력 3배.
 * 
 * 
 * #### 해야할것.
 * 보관.  
 * 골드, 민트, 포켓볼 넣고 뺼수잇게.
 * 
 * 포멧몬창고/// 보류. 포켓몬 버리기와 비슷한데.. ;;;;;; 살려종.
 * ++ 포켓몬storage라면 객체함수 또 만들어야하는뎁... 차라리 상태: 창고보관 -> disabled 이라고할까..
 * 
 * 아이템.. 추가?
 * +공격증강. 방어증강?
 * 
 * ==============================
 * 연동작업- 
 * 월) 내 몬스터, 적몬스터 name, lv, hp, att, 등등.
 * 
 * 
 * 
 * 
 * 
 * 
 * */

var newPokemon = {   // 때려잡을 적 "몬스터 복사본", 몬볼로 잡는것은 세계몬스터 새걸로 가져옴.
		// ### 종원이형: newPokemon.name, lv, hp, att property 이런식으로 가져가면 되요!
		id: worldMon.id, 
		name: worldMon.name, 
		lv: worldMon.lv, 
		hp: worldMon.hp, 
		att: worldMon.att, 
		shield: worldMon.shield, 
		property: worldMon.property, 
		status: "normal",
		
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

$(".whyEnemyName").html("["+ newPokemon.name +"] Lv."+ newPokemon.lv );
$(".whyAllyName").html("["+ myMonid.name +"] Lv."+ myMonid.lv );

function propertyBonus(){  // 상성 보너스 데미지.
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
function propertyBonusRelease(){ // 상성 보너스 데미지 해제 - 안하면 공격할때마다 곱하게됨...
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

//shield
function enemyRandAtt(){
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var enemyRand = Math.floor(Math.random()*2);
		var criticalAttack02 = Number((newPokemon.att*(1+(Math.random()*0.3 + 0.2))).toFixed(1)); 
		if(myMonid.status =="reflect"){ 
			// 상대몬스터 턴 시작전에 상태에따른 공격방식 변화 - 공격반사는 자기자신의 공격함.
			console.log( myMonid.name + "가 공격반사를 사용했다!!");
			if(enemyRand == 0){
				console.log(newPokemon.name+"몬이 공격력 ("+newPokemon.att+"-"+newPokemon.shield+")로공격.");
				newPokemon.hp = Number((newPokemon.hp - (newPokemon.att - newPokemon.shield)).toFixed(1));
				console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
			}
			else{
				console.log(newPokemon.name+"몬이 스킬 "+skillNames[newPokemon.property]+"로공격.");
				console.log("원래데미지: "+newPokemon.att+ " 스킬데미지: "+criticalAttack02+ " 상대방어: "+newPokemon.shield);
				newPokemon.hp = Number((newPokemon.hp - (criticalAttack02- newPokemon.shield)).toFixed(1));
				console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
			}
			hpDown();
			$(".whyEnemyTextHp").html("HP: "+ newPokemon.hp + " / Max_HP: "+newPokemon.initHp);
		}
		else if(newPokemon.status == "paralyze"){  // 마비는 1턴 휴식.
			console.log("마비... 이번턴 쉴께요~");
		}
		else{ // 공격반사, 마비이외에는 평범한 랜덤형식 공격시전.
			if(enemyRand == 0){
				console.log(newPokemon.name+"몬이 공격력 ("+newPokemon.att+"-"+myMonid.shield+")로공격.");
				myMonid.hp = Number((myMonid.hp - (newPokemon.att - myMonid.shield)).toFixed(1));
				console.log(myMonid.name + "몬의 체력 "+myMonid.hp+" 남음.");
			}
			else{
				console.log(newPokemon.name+"몬이 스킬 "+skillNames[newPokemon.property]+"로공격.");
				console.log("원래데미지: "+newPokemon.att+ " 스킬데미지: "+criticalAttack02+ " 내방어: "+myMonid.shield);
				myMonid.hp = Number((myMonid.hp - (criticalAttack02- myMonid.shield)).toFixed(1));
				console.log(myMonid.name + "몬의 체력 "+myMonid.hp+" 남음.");
			}
			$(".whyAllyTextHp").html("HP: "+ myMonid.hp + " / Max_HP: "+myMonid.initHp);
		}
	skillLv2AttackRelease();  // 상대몬스터의 턴이 끝날때마다 부여효과 횟수 차감.
	}
}

function tackle(){
	propertyBonus();  // 상성데미지 추가.
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		console.log(myMonid.name+"몬이 공격력 ("+myMonid.att+ "-" + newPokemon.shield +")로공격.");
		newPokemon.hp = Number((newPokemon.hp - (myMonid.att - newPokemon.shield)).toFixed(1));
		console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
		$(".whyEnemyTextHp").html("HP: "+ newPokemon.hp + " / Max_HP: "+newPokemon.initHp);
	}
	winOrLose();  // 자신/ 상대의 턴이 끝날때마다 hp <=0인지 체크 -> 승리판정
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose(); // 자신/ 상대의 턴이 끝날때마다 hp <=0인지 체크 -> 승리판정
	}
	propertyBonusRelease();// 상성데미지 해제..
}
	

function skillAttack(){
	propertyBonus();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var criticalAttack01 = Number((myMonid.att*(1+(Math.random()*0.3 + 0.2))).toFixed(1)) ; 
																	// 스킬1공격은 최소 1.2배~ 최대 1.5배 공격력을 가짐.
																	// 소수점 한자리수로 string형변화후 넘버화.
		console.log(myMonid.name+"몬이 스킬 "+skillNames[myMonid.property]+"로공격.");
		console.log("원래데미지: "+myMonid.att+ " 스킬데미지: "+criticalAttack01 + " 상대방어: "+newPokemon.shield);
		newPokemon.hp = (newPokemon.hp - (criticalAttack01 - newPokemon.shield)).toFixed(1);
		console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
		$(".whyEnemyTextHp").html("HP: "+ newPokemon.hp + " / Max_HP: "+newPokemon.initHp);
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyBonusRelease();
}

function meditation(){  // 명상 체력 +13.
	propertyBonus();
	var showMsg = "명상을 할수없습니다. \n\t(설명: 명상하면 전체체력보다 많아질경우.)"
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		if((myMonid.hp +13) < myMonid.initHp){
		myMonid.hp += 13;
		showMsg = "체력회복 (+13)!" +myMonid.hp;
		hpUp();
		}
	}
	console.log(showMsg);
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyBonusRelease();
}


//var propertyNames = ["물","바람","풀","불","흙"];
//var skillNames = ["물폭탄던지기!","바람베기!","덩쿨채찍!","화염폭탄!","지진일으키기!"];
var effectTimes =0;
var burning  = 5;
//var skill2Names = ["reflect","sharpen","paralyze","burn","shieldOn"]; //
function skillLv2Attack(){
	var skillMsg = "적정레벨이 아닙니다. 현재레벨: " + myMonid.lv + "/ 요구레벨:2 "; 
	if( myMonid.lv > 1 /*&& !winOrLoseResult*/){  //### 레벨 2이상 && winOrLoseResult 결과값이 안나왓을경우에 진행.
		propertyBonus();
		switch(myMonid.property){
		case 0://reflect -상대몬스터 데미지반사 - 1회.
			myMonid.status = skill2Names[0];
			effectTimes =1;
			skillMsg = myMonid.name+"에게 "+ skill2Names[0]+"를 걸엇다!";
			break;
		case 1://sharpen -상대몬스터 방어관통.
			myMonid.status = skill2Names[1];
			effectTimes =(2 +1);  //### 2+1의미: 처음 해제되고 내 몬스터의 2턴의 공격동안 방어관통이됨.
			newPokemon.initSh = newPokemon.shield;
			newPokemon.shield = 0;
			skillMsg =myMonid.name+"에게 "+ skill2Names[1]+"를 걸엇다!";
			break;
		case 2://paralyze - 상대몬스터 1회 마비; 공격불가.  // 근데 이거 좀 사긴데...??;;;
			newPokemon.status = skill2Names[2];
			effectTimes = (1+1); //## 상대방은 1턴을 그냥 공격 받아야한다.
			skillMsg =newPokemon.name+"에게 "+ skill2Names[2]+"를 걸엇다!";
			
			break;
		case 3://burn - 화상걸린 상대몬스터가 총 3턴에 걸쳐 1차 화상은 5, 2차는 8, 3차는 11의 가중데미지를 받는다.
			newPokemon.status = skill2Names[3];
			effectTimes =(3 +1); //## 화상은 총 3회 공격으로 1차 화상은 5, 2차는 8, 3차는 11의 가중데미지를 준다.
			skillMsg =newPokemon.name+"에게 "+ skill2Names[3]+"를 걸엇다!";
			
			break;
		case 4://shieldOn  - 스킬쓴 직후 2턴동안 몬스터의 방어력 3배.
			myMonid.status = skill2Names[4];
			effectTimes =2;
			skillMsg =myMonid.name+"에게 "+ skill2Names[4]+"를 걸엇다!";
			myMonid.shield *= 3;
			
			break;
		default:
			break;
		}
		winOrLose();
	}  // if - switch case:  END
	console.log(skillMsg);

	if( myMonid.lv > 1 /*&& !winOrLoseResult*/){  //### winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
		propertyBonusRelease();
	}  // if 레벨2조건  END.
}  //skillLv2Attack func END

function skillLv2AttackRelease(){  // 상태이상 효과 해제. 
	effectTimes--;
	console.log("효과  " + effectTimes + "번 남음.");
	if(effectTimes == 0 ){
		switch(newPokemon.status){	
		case "paralyze":
		case "burn":
			burning  = 5;
			console.log(newPokemon.name+"의 "+ newPokemon.status +"효과 해제!");
			newPokemon.status = "normal";
			break;
		}
		switch(myMonid.status){	
		case "reflect":
			console.log(myMonid.name+"의 "+ myMonid.status +"효과 해제!");
			myMonid.status = "normal";
			break;
		case "sharpen":
			newPokemon.shield = newPokemon.initSh;
			console.log(myMonid.name+"의 "+ myMonid.status +"효과 해제!");
			myMonid.status = "normal";
			break;
		case "shieldOn":
			myMonid.shield /= 3;
			console.log(myMonid.name+"의 "+ myMonid.status +"효과 해제!");
			myMonid.status = "normal";
			break;
		}
	} //if(effectTimes <=0) END
	else if(newPokemon.status == "burn"){  // 효과횟수가 남은동안에는 화상데미지는 누적됨.
		console.log( (4-effectTimes) + "차화상: " + burning + "데미지");
		newPokemon.hp -= burning;
		console.log("상대 포켓몬 체력: " + newPokemon.hp);
		
		burning += 3;  // 1차 화상은 5, 2차는 8, 3차는 11 데미지. 총 24데미지를 주게됨.
		
	}
	
} //skillLv2AttackRelease END

function catchWildMon(){  // 몬스터볼 소모해서 상대몬스터를 포획.
	var showItemMsg = "";
	var chanceToCatch = Math.random() * 0.2 + 0.6; // 상대몬스터 체력비율 < 60~80% 확률로 포획.
//	console.log(newPokemon.hp/newPokemon.initHp +"  ??  " + chanceToCatch);
	if((newPokemon.hp/newPokemon.initHp) < chanceToCatch){  // 포획에 성공하는경우.
		pokemons.push(new MyPokemon(
				pokemons.length,
				worldMon.id,
				worldMon.name,
				worldMon.lv ,
				worldMon.exp ,
				worldMon.hp,
				worldMon.att,
				worldMon.shield,
				worldMon.property,
				"normal"  // status ="normal" // 정상.
				));
		showItemMsg = "system- 새로운 몬스터 "+worldMon.name+"를 잡앗다!!";
		winOrLoseResult = true;
		console.log(pokemons[pokemons.length-1]);  // 포획한 몬스터, 몬스터북에서 확인.
		
		//#### 종원이형: 여기서 전투모드 끝내고 맵으로 전환.
	}
	else{
		showItemMsg = "system- "+worldMon.name+"를 잡는데 실패했다!!";
	}
	console.log(showItemMsg);
}

function useItem(item){
	if(item == "mint"){  // 민트 아이템 소모. 체력+25. 턴소모X. 초기 5개 소유중.
		var showItemMsg = "사용할수 없습니다 - 설명: 민트먹을시 체력max보다 많습니다.";
		if(jiwoo.mint ==0){
			showItemMsg = "system- mint 없다 ㅜㅜ";
		}
		else if((jiwoo.mint >0) && ((myMonid.hp +25) < myMonid.initHp)){
			myMonid.hp +=25;		
			showItemMsg = myMonid.name+"회복!! 현재체력: "+ myMonid.hp;
			jiwoo.mint--;
			showItemMsg += "\nsystem- "+ item +" " + jiwoo.mint + "개 남았습니다.";
			hpUp();
		}
		console.log(showItemMsg);
	}

	if(item == "pokeBall"){ // 몬볼아이템 소모해서 포획시도. 턴소모X. 초기 3개 소유중.
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

function tagMyMon(bookNumber){	// 내가 소유한 몬스터와 태그하기.
	if(confirm("태그하시겟습니까?")){
//		turnMoves(parseInt(obj.getAttribute("id").substr(obj.getAttribute("id").length -2)), window.pokemonNo02);
		encounter(pokemons[bookNumber].id, worldMon.id); 
		console.log("너로 정했다!! 나와라~ "+pokemons[bookNumber].name+"!!!!");
		$(".whyAllyName").html("["+ pokemons[bookNumber].name +"] Lv."+ pokemons[bookNumber].lv );
		$(".whyAllyTextHp").html("HP: "+ pokemons[bookNumber].hp + " / Max_HP: "+pokemons[bookNumber].initHp);

		
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
		myMonid.status = "Fainted";
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



function runAway(){  // 도망도망..
	winOrLoseResult = true;
	//###### 종원이형: 여기서 escape로 전투화면을 끝내는 화면연출.!!!
	
	
}
