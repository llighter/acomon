/*ㅁㅁzz
<!-- 
* 학원에서....Apr27,2017
 * 			21:05
 * 			dev by JB
 * MS969
 * 
 *
 * ==============================
 * 연동작업- 
 * 월) 내 몬스터, 적몬스터 name, lv, hp, att, 등등.
 * 
 * 수) 
 * battlefunc // 데미지, 상태이상 ytext수정. 
 * mapBattlefunc // hp/max_hp 초기상태창. 지우상점이용후 지우상태창update.
 * rocket_ver3.1 // 특수스킬 사용효과 ytext. 
 * --------------------
 * 수 20:45) 해결 해야할 버그
 * 1.mapBattle -> $("#dialog").html("보유 포켓몬: list"+ (++listNo) +" 몬스터이름: " + pokemons[bookNo].name);
	보내기위해서 몬스터 리스트를 봐야하는데... html이 안뜸..
	// todo w/ 맵팀.
   1.1 방생 보내고, 몬스터도감 확인할때 리스트 업데이트가 안됨... 
    // todo w/ 종원이형.이 카톡에 적어놓은거긴한데..

   2.승리판정후 -> 전투화면에서 빠져나가게끔.  << 종원이형.  //setTimeout(yCmdRun(), 5000); 이거 맞는지 확인...
 * 3. 이름과, 숫자 -> <span> 스타일 이쁘게 처리할수잇음...
 * 4. 몬스터 볼을 산 후에.. 아이템창에서 몬스터볼 x?? 가버그인듯.. 사용하면 숫자가 올라가긴함.  //종원이형.
 * 5. 마비... 1차적으로는 막앗지만 2차마비는 공격모션보다 빨리 풀려지는바람에.. 방법없음. 혹시 물어보고 안되겟다시프면 ㅈㅈ..
 * 6. 내가 스킬2쓰면 가만히 있는게.. 공격모션은 막아볼것.
 * 
 * 
 * 
 * */

var newPokemon = {   // 때려잡을 적 "몬스터 복사본", 몬볼로 잡는것은 세계몬스터 새걸로 가져옴.
		id: worldMon.id, 
		name: worldMon.name, 
		lv: worldMon.lv, 
		hp: worldMon.hp, 
		att: worldMon.att, 
		shield: worldMon.shield, 
		property: worldMon.property, 
		status: "normal",
		img00 : worldMon.img00,
		img01 : worldMon.img01,
		img02 : worldMon.img02,
		
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
$(".whyEnemyTextHp").html(parseInt(newPokemon.hp *10)/10 + " / "+newPokemon.initHp);
$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10 + " / "+myMonid.initHp);

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
			yTextmsg( myMonid.name + "가 공격반사를 사용했다!!");
			if(enemyRand == 0){
				console.log(newPokemon.name+"몬이 공격력 ("+newPokemon.att+"-"+newPokemon.shield+")로공격.");
				newPokemon.hp = Number((newPokemon.hp - (newPokemon.att - newPokemon.shield)).toFixed(1));
				console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
			    setTimeout(yTextmsg("<span style='color:#FF6961'>"+newPokemon.name+"</span>몬이 <span style='color:#82b5f2'>"+
			    		(newPokemon.att - newPokemon.shield).toFixed(1)+"</span>만큼 피해를 받았습니다!!"),1000);   
			}
			else{
				console.log(newPokemon.name+"몬이 스킬 "+skillNames[newPokemon.property]+"로공격.");
				console.log("원래데미지: "+newPokemon.att+ " 스킬데미지: "+criticalAttack02+ " 상대방어: "+newPokemon.shield);
				newPokemon.hp = Number((newPokemon.hp - (criticalAttack02- newPokemon.shield)).toFixed(1));
				console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
				setTimeout(yTextmsg("<span style='color:#FF6961'>"+newPokemon.name+"</span>몬이 <span style='color:#82b5f2'>"+
			        	(criticalAttack02- newPokemon.shield).toFixed(1)+"</span>만큼 피해를 받았습니다!!"),1000);   
			}
			yEnemyAttackEffect();	
			yEnemyhp();		
			$(".whyEnemyTextHp").html(parseInt(newPokemon.hp*10)/10 + " / "+newPokemon.initHp);
			yEnemyhp();	
		}
		else if(newPokemon.status == "paralyze"){  // 마비는 1턴 휴식.
			console.log("마비... 이번턴 쉴께요~");
			yTextmsg("<span style='color:#FF6961'>"+newPokemon.name+ "</span>몬이 <span style='color:#82b5f2'>"+
            		skill2Names[myMonid.property]+"</span>(마비) 상태입니다.");
		}
		else{ // 공격반사, 마비이외에는 평범한 랜덤형식 공격시전.
			if(enemyRand == 0){
				console.log(newPokemon.name+"몬이 공격력 ("+newPokemon.att+"-"+myMonid.shield+")로공격.");
				myMonid.hp = Number((myMonid.hp - (newPokemon.att - myMonid.shield)).toFixed(1));
				console.log(myMonid.name + "몬의 체력 "+myMonid.hp+" 남음.");
			        yTextmsg("<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"+
			        		(newPokemon.att - myMonid.shield).toFixed(1)+"</span>만큼 피해를 받았습니다!!");   
			}
			else{
				console.log(newPokemon.name+"몬이 스킬 "+skillNames[newPokemon.property]+"로공격.");
				console.log("원래데미지: "+newPokemon.att+ " 스킬데미지: "+criticalAttack02+ " 내방어: "+myMonid.shield);
				//////
				myMonid.hp = Number((myMonid.hp - (criticalAttack02- myMonid.shield)).toFixed(1));
				console.log(myMonid.name + "몬의 체력 "+myMonid.hp+" 남음.");
			        yTextmsg("<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"+
			        		(criticalAttack02- myMonid.shield).toFixed(1)+"</span>만큼 피해를 받았습니다!!");   
			}
			yEnemyAttackEffect();	
			yAllyhp();		
			$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10 + " / "+myMonid.initHp);
		}
	skillLv2AttackRelease();  // 상대몬스터의 턴이 끝날때마다 부여효과 횟수 차감.
	}
}

function tackle(){
	propertyBonus();  // 상성데미지 추가.
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var showTackleMsg = "";
		console.log(myMonid.name+"몬이 공격력 ("+myMonid.att+ "-" + newPokemon.shield +")로공격.");
		newPokemon.hp = Number((newPokemon.hp - (myMonid.att - newPokemon.shield)).toFixed(1));
		console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
		
		//yTextmsg("<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>몸통박치기</span>를 시전했습니다.");
		yAllyAttackEffect();	//공격 시각효과
    	yEnemyhp();				//공격 hp시각효과
		$(".whyEnemyTextHp").html( parseInt(newPokemon.hp*10)/10 + " / "+newPokemon.initHp);
		showTackleMsg = "<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>몸통박치기</span>를 시전했습니다.";
		yTextmsg(showTackleMsg);
		winOrLose();  // 자신/ 상대의 턴이 끝날때마다 hp <=0인지 체크 -> 승리판정
	}
	propertyBonusRelease();// 상성데미지 해제..
}
	

function skillAttack(){
	var showSkill1Msg = "";
	propertyBonus();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var criticalAttack01 = Number((myMonid.att*(1+(Math.random()*0.3 + 0.2))).toFixed(1)) ; 
																	// 스킬1공격은 최소 1.2배~ 최대 1.5배 공격력을 가짐.
																	// 소수점 한자리수로 string형변화후 넘버화.
		console.log(myMonid.name+"몬이 스킬 "+skillNames[myMonid.property]+"로공격.");
		console.log("원래데미지: "+myMonid.att+ " 스킬데미지: "+criticalAttack01 + " 상대방어: "+newPokemon.shield);
		newPokemon.hp = (newPokemon.hp - (criticalAttack01 - newPokemon.shield)).toFixed(1);
		
			//yTextmsg("<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"+
			//		skillNames[myMonid.property]+"</span>를 시전했습니다.");
		yAllyAttackEffect();	//공격 시각효과
    	yEnemyhp();				//공격 hp시각효과
	
		console.log(newPokemon.name + "몬의 체력 "+newPokemon.hp+" 남음.");
		$(".whyEnemyTextHp").html( parseInt(newPokemon.hp*10)/10 + " / " + newPokemon.initHp);
		showSkill1Msg = "<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"+ 
			skillNames[myMonid.property]+"</span>를 시전했습니다.";
	}
	yTextmsg(showSkill1Msg);
	winOrLose();
	propertyBonusRelease();
}

function meditation(){  // 명상 체력 +13.
	var showMsg  = "";
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		if((myMonid.hp +13) < myMonid.initHp){
			myMonid.hp += 13;
			showMsg = "<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>명상</span>을 시전합니다."
		}
		else{
			myMonid.hp = myMonid.initHp;
			showMsg = "<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>명상</span>을 시전합니다."
		}
			//yTextmsg("<span style='color:#FF6961'>"+myMonid.name+"</span>몬이 <span style='color:#82b5f2'>명상</span>을 시전합니다.");
		yAllyHealEffect();	//공격 시각효과
		yAllyhp();				//공격 hp시각효과
		$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10+ " / "+myMonid.initHp);
	}
	yTextmsg(showMsg);
	winOrLose();
}


//var propertyNames = ["물","바람","풀","불","흙"];
//var skillNames = ["물폭탄던지기!","바람베기!","덩쿨채찍!","화염폭탄!","지진일으키기!"];
var effectTimes =0;
var burning  = 2;
//var skill2Names = ["reflect","sharpen","paralyze","burn","shieldOn"]; //
function skillLv2Attack(){
	var skillMsg = "적정레벨이 아닙니다. 현재레벨: " + myMonid.lv + "/ 요구레벨:2 "; 
	if( myMonid.lv > 1 && ( myMonid.status == "normal" && newPokemon.status =="normal" ) /*&& !winOrLoseResult*/){  //### 레벨 2이상 && winOrLoseResult 결과값이 안나왓을경우에 진행.
		propertyBonus();
		switch(myMonid.property){
		case 0://reflect -상대몬스터 데미지반사 - 1회.
			myMonid.status = skill2Names[0];
			effectTimes =1;
			skillMsg = "<span style='color:#FF6961'>" + myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"
			+ skill2Names[0]+"</span>(공격반사)를 시전했습니다.";
			break;
		case 1://sharpen -상대몬스터 방어관통.
			myMonid.status = skill2Names[1];
			effectTimes =(2 +1);  //### 2+1의미: 처음 해제되고 내 몬스터의 2턴의 공격동안 방어관통이됨.
			newPokemon.initSh = newPokemon.shield;
			newPokemon.shield = 0;
			skillMsg ="<span style='color:#FF6961'>" + myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"
			+ skill2Names[1]+"</span>(방어관통)를 시전했습니다.";
			break;
		case 2://paralyze - 상대몬스터 1회 마비; 공격불가.  // 근데 이거 좀 사긴데...??;;;
			newPokemon.status = skill2Names[2];
			effectTimes = (1+1); //## 상대방은 1턴을 그냥 공격 받아야한다.
			skillMsg ="<span style='color:#FF6961'>" +newPokemon.name+"</span>에게 <span style='color:#82b5f2'>"
			+ skill2Names[2]+"</span>(마비)를 시전했습니다.";
			
			break;
		case 3://burn - 화상걸린 상대몬스터가 총 3턴에 걸쳐 1차 화상은 5, 2차는 8, 3차는 11의 가중데미지를 받는다.
			newPokemon.status = skill2Names[3];
			effectTimes =(3 +1); //## 화상은 총 3회 공격으로 1차 화상은 5, 2차는 8, 3차는 11의 가중데미지를 준다.
			skillMsg ="<span style='color:#FF6961'>" +newPokemon.name+"</span>에게 <span style='color:#82b5f2'>"
			+ skill2Names[3]+"</span>(마비)를 시전했습니다.";
			break;
		case 4://shieldOn  - 스킬쓴 직후 2턴동안 몬스터의 방어력 3배.
			myMonid.status = skill2Names[4];
			effectTimes =2;
			skillMsg ="<span style='color:#FF6961'>" + myMonid.name+"</span>몬이 <span style='color:#82b5f2'>"
			+ skill2Names[4]+"</span>(방어증가)를 시전했습니다.";
			myMonid.shield *= 3;
			
			break;
		default:
			break;
		}
		winOrLose();
	}  // if - switch case:  END
	else if(myMonid.lv > 1 && ( myMonid.status != "normal" )){
		skillMsg ="<span style='color:#FF6961'>" +myMonid.name+"</span>에게 이미<span style='color:#82b5f2'>"
			+ myMonid.status+"</span>가 걸려있습니다.";
		skillMsg  += "<br/><span style='color:#FF6961'>"+myMonid.name+"</span>몬이 스킬 <span style='color:#82b5f2'>"
			+skillNames[myMonid.property]+"</span>로공격."
		skillAttack();
	}
	else if(myMonid.lv > 1 && ( newPokemon.status !="normal" )){
		skillMsg ="<span style='color:#FF6961'>" +newPokemon.name+"</span>에게 이미<span style='color:#82b5f2'>"
			+ newPokemon.status+"</span>가 걸려있습니다.";
		skillMsg  += "<br/><span style='color:#FF6961'>"+myMonid.name+"</span>몬이 스킬 <span style='color:#82b5f2'>"
			+skillNames[myMonid.property]+"</span>로공격."
		skillAttack();
	}
	yTextmsg(skillMsg);
	winOrLose();
	propertyBonusRelease();
}  //skillLv2Attack func END

function skillLv2AttackRelease(){  // 상태이상 효과 해제. 
	effectTimes--;
	if(effectTimes >0 ){
		console.log("효과  " + effectTimes + "번 남았습니다.");
	}

	if(effectTimes == 0 ){
		switch(newPokemon.status){	
		case "paralyze":
		case "burn":
			burning  = 2;
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
		setTimeout(function(){
			yTextmsg( newPokemon.name +"몬 "+(4-effectTimes) + "차화상: " + burning + "데미지");
		}, 1500);
		newPokemon.hp -= burning;
		console.log("상대 포켓몬 체력: " + newPokemon.hp);
		$(".whyEnemyTextHp").html( parseInt(newPokemon.hp*10)/10 + " / "+newPokemon.initHp);
		yEnemyhp();	
		//### 종원이형: hp게이지 변동..
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
				newPokemon.id,
				newPokemon.name,
				newPokemon.lv ,
				0 ,  //newPokemon.exp
				newPokemon.hp,
				newPokemon.att,
				newPokemon.shield,
				newPokemon.property,
				"normal",  // status ="normal" // 정상.
				newPokemon.img00,
				newPokemon.img01,
				newPokemon.img02
				
				));
		
		showItemMsg = "새로운 몬스터 <span style='color:#FF6961'>"+worldMon.name+"</span>를 잡앗다!!";
		winOrLoseResult = true;
		newPokemon.hp = 0;
		yEnemyhp();	
		$(".whyEnemyTextHp").html( parseInt(newPokemon.hp*10)/10 + " / "+newPokemon.initHp);
		console.log(pokemons[pokemons.length-1]);  // 포획한 몬스터, 몬스터북에서 확인.
		//setTimeout(function(){ yCmdRun(); }, 8000); //@@// yText 없애야함.
		//#### 종원이형: 여기서 전투모드 끝내고 맵으로 전환.
	}
	else{
		showItemMsg = worldMon.name+"를 잡는데 실패했다!!";
	}
	//yTextmsg(showItemMsg);
}

function useItem(item){
	if(item == "mint"){  // 민트 아이템 소모. 체력+25. 턴소모X. 초기 5개 소유중.
		var showItemMsg = "체력이 최대치입니다. <span style='color:#82b5f2'>mint</span>를 사용할 수 없습니다.";
		if(jiwoo.mint ==0){
			showItemMsg = "<span style='color:#82b5f2'>mint</span>가 없습니다.";
		}
		else if((jiwoo.mint >0) && (myMonid.hp == myMonid.initHp)){
			showItemMsg ="<span style='color:#FF6961'>"+myMonid.name+
				"</span>이미 체력이 풀상태입니다. <br>현재 HP는 <span style='color:#82b5f2'>"+myMonid.hp+"</span>입니다.";
			$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10+ " / "+myMonid.initHp);
		}
		else if((jiwoo.mint >0) && ((myMonid.hp +25) < myMonid.initHp)){
			myMonid.hp +=25;		
			showItemMsg ="<span style='color:#FF6961'>"+myMonid.name+
				"</span>몬이 회복합니다. <br>현재 HP는 <span style='color:#82b5f2'>"+myMonid.hp+"</span>입니다.";
			jiwoo.mint--;
			showItemMsg += "<br><span style='color:#82b5f2'>"+ item +
				"</span>(이)가 <span style='color:#82b5f2'>"+ jiwoo.mint + "</span>개 남았습니다.";
			$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10+ " / "+myMonid.initHp);
			yAllyhp();
		}
		else if((jiwoo.mint >0) && ((myMonid.hp +25) >= myMonid.initHp)){
			myMonid.hp = myMonid.initHp;		
			showItemMsg ="<span style='color:#FF6961'>"+myMonid.name+
				"</span>몬이 체력이 전부 회복되었습니다. <br>현재 HP는 <span style='color:#82b5f2'>"+myMonid.hp+"</span>입니다."
			jiwoo.mint--;
			showItemMsg += "<br><span style='color:#82b5f2'>"+ item +
				"</span>(이)가 <span style='color:#82b5f2'>"+ jiwoo.mint + "</span>개 남았습니다.";
			$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10 + " / "+myMonid.initHp);
			yAllyhp();
		}
		setTimeout(yTextmsg(showItemMsg), 1500);
		console.log(showItemMsg);
		$(".whyStatusMoneybox").html("소유 골드: "+ jiwoo.golds +"골드 "+"<br/> 민트: "+ jiwoo.mint +"개 <br/>몬스터볼: "+ jiwoo.pokeBall+ "개");
	}

	if(item == "pokeBall"){ // 몬볼아이템 소모해서 포획시도. 턴소모X. 초기 3개 소유중.
		var showItemMsg = "";
		if(jiwoo.pokeBall ==0){
			showItemMsg ="포켓볼이 없습니다. 상점에서 구매 해주세요!";
		}
		else if(jiwoo.pokeBall >0){
			jiwoo.pokeBall--;
			console.log("system- 포켓볼을 던졋다! \n"+ item +" " + jiwoo.pokeBall + "개 남았습니다.");
			catchWildMon();  // 체력비율 60~80% 확률잡기.
			winOrLose();
		} // jiwoo.pokeBall >0 END
		console.log(showItemMsg);
		$(".whyStatusMoneybox").html("소유 골드: "+ jiwoo.golds +"골드 "+"<br/> 민트: "+ jiwoo.mint +"개 <br/>몬스터볼: "+ jiwoo.pokeBall+ "개");
	}// 아이템사용_포켓볼 던졌을때. else if END
	console.log("jiwoo.mint "+jiwoo.mint +"  jiwoo.pokeBall "+ jiwoo.pokeBall);
} 

function tagMyMon(bookNumber){	// 내가 소유한 몬스터와 태그하기.
	//if(confirm("태그하시겟습니까?")){
		encounter(pokemons[bookNumber].id, worldMon.id); 
		yTextmsg("너로 정했다!! <br/> 나와라~ <span style='color:#FF6961'>"+pokemons[bookNumber].name+"</span>!!!!");
		$(".whyAllyName").html("["+ pokemons[bookNumber].name +"] Lv."+ pokemons[bookNumber].lv );
		$(".whyAllyTextHp").html( parseInt(pokemons[bookNumber].hp*10)/10 + " / "+pokemons[bookNumber].initHp);
		$(".whyEnemyTextHp").html(parseInt(newPokemon.hp *10)/10 + " / "+newPokemon.initHp);
		$(".whyEnemyName").html("["+ newPokemon.name +"] Lv."+ newPokemon.lv );
		// #### 맵팀: 여기서 몬스터태그하면서 화면전환 가능한지...
	//}
}



function winOrLose(){

	if(newPokemon.hp <= 0){
		console.log("enemy loses.");
		if(quest[0].questDone && quest[1].questNeeds != 0 && newPokemon.property == 3){
			quest[1].questNeeds--;
			console.log("퀘스트1: 불속성몬스터 잡기!! \n\t완료까지"+quest[1].questNeeds+"마리 잡으면됨." );
		}
		newPokemon.hp = 0;
		$(".whyEnemyTextHp").html( parseInt(newPokemon.hp*10)/10 + " / "+newPokemon.initHp);
		yTextmsg(myMonid.name+ "의 승리!!");
		expUp();
		winOrLoseResult= true;
		setTimeout(function(){ yCmdRun(); }, 4000); //@@// yText 없애야함.
	}
	else if(myMonid.hp <= 0){
		console.log("user loses.");
		myMonid.hp = 0;
		$(".whyAllyTextHp").html( parseInt(myMonid.hp*10)/10  + " / "+myMonid.initHp);
		myMonid.status = "Fainted";
		winOrLoseResult= true;
		setTimeout(function(){ yCmdRun(); }, 4000); //@@// yText 없애야함.
		yTextmsg(myMonid.name+ "의 패배!! " +
				 "<br/>" + myMonid.name + "의 상태가 " + myMonid.status+ "가 되었다!");
	}
}

function expUp(){  
	var winExp = 80;  // 한판 승리때마다 얻는 경험치.
	var showMsg = "";   
	if((myMonid.exp + winExp) >= (60 + myMonid.lv*40)){  //1렙 풀경치 100, 2렙은 140, 3렙은 180...
		showMsg = "<span style='color:#FF6961'>" +myMonid.name+"</span>가 레벨업했다!!!";
		showMsg += "<br/>경험치: "+(myMonid.exp);
		myMonid.exp = ((myMonid.exp + winExp) % (60 + myMonid.lv*40));
		showMsg += " -> "+ myMonid.exp +", ";
//		console.log("#### "+ (60 + myMonid.lv*40));    경험치가 앞에 있어야함. 아니면 앞에 함수식 망가짐;;
		showMsg += "   레벨: "+myMonid.lv ;
		myMonid.lv += 1;  //#### 종원이형: 레벨 오를시에 생기는 이벤트. 레벨업연출은 여기서 수정해가면되욤.
		showMsg += " -> "+ myMonid.lv;
		myMonid.hp = Number((myMonid.initHp*1.2).toFixed(1));
		showMsg += "<br/>체력증가율 (1.2배):"+ myMonid.initHp+ " -> " + (myMonid.initHp*1.2).toFixed(1);
		myMonid.initHp = myMonid.hp;
		showMsg += "<br/>공격력 증가 (+7): " + myMonid.att;
		myMonid.att += 7;
		showMsg += " -> "+ myMonid.att;

	}
	else{
		myMonid.exp += winExp;
		showMsg = myMonid.name+"가 "+ myMonid.exp+" / "+(60 + myMonid.lv*40)+ "만큼 경험치를 획득했다!!!";
	}
	yTextmsg(showMsg);
}


function enemyTurn(){
	propertyBonus();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose(); // 자신/ 상대의 턴이 끝날때마다 hp <=0인지 체크 -> 승리판정
	}
	propertyBonusRelease();
}


function runAway(){  // 도망도망..
	winOrLoseResult = true;
	setTimeout(function(){ yCmdRun(); }, 4000); //@@// yText 없애야함.
	//###### 종원이형: 여기서 escape로 전투화면을 끝내는 화면연출.!!!
	
	
}
