/*
 * 집에서....Apr22,2017
 * 			04:27 
 * 			dev by JB
 * 
 * 금_작업) 
 * 상성(+데미지, -데미지)효과 부여.
 * 월드몬(맵전체 몬스터리스트)를 복사본과 싸우게끔 객체생성.. 다시만나도 싱싱한녀석만남.
 * 
 * 
 * 
 * #### 해야할것.
 * mapBattle쪽에 올려야할 func: 가방보기,  몬스터보기, >> 연결하고 테스팅. 
 * 
 * 상점 & 병원.js구현
 * + 재화 storage
 * 
 * 방생과 보관.
 * 
 * 레벨2 -기술타입(상대 공/방깍, 자신공격/방증가)
 * 
 * 퀘스트 
 * + ~id 몇마리 잡기만해라. + 남은 포획수: @@/ 몇마리.
 * + ~id 두마리 몬스터북에 보유해라.. + 현재 소유포켓몬:~id : @@/ 2마리
 * + 
 * 
 * */

var newPokemon = {   // 때려잡을 적 "몬스터 복사본", 몬볼로 잡는것은 세계몬스터 새걸로 가져옴.
		// ### 종원이형: newPokemon.name, lv, hp, att property 이런식으로 가져가면 되요!
		id: worldMonid, 
		name: worldMon.name, 
		lv: worldMon.lv, 
		hp: worldMon.hp, 
		att: worldMon.att, 
		property: worldMon.property 
		};
console.log("worldMonid "+worldMonid);
	console.log("newPokemon.id: "+newPokemon.id);
/*
var noExists = true;
for(id in pokemons){
	if( worldMonid == id ){
		noExists = false;
	}
//	console.log("alreadyExists  "+ noExists);
}
if(noExists){
	pokemons.push(new myPokemon(worldMon.name, worldMon.lv, worldMon.exp, worldMon.hp, worldMon.att, worldMon.property )); 
	console.log("worked");
}
*/
function propertyAtt(){
//var myMonid;
//var worldMonid;
	var showMsg = "상성이없음.";
	if((myMonid.property+1)%5 == newPokemon.property){
		showMsg = "\t newPokemon myMonid.att "
		showMsg += "\n상성전\t"+newPokemon.att + "  \t"+ myMonid.att;
		newPokemon.att = (newPokemon.att * 1.1).toFixed(1);
		myMonid.att = (myMonid.att * 0.9).toFixed(1);
		showMsg += "\n상성후\t"+ newPokemon.att + "  \t"+ myMonid.att;
	}
	if((newPokemon.property+1)%5 == myMonid.property){
		showMsg = "\t myMonid newPokemon.att "
		showMsg += "\n상성전\t"+myMonid.att + "  \t"+ newPokemon.att;
		myMonid.att = (myMonid.att * 1.1).toFixed(1);
		newPokemon.att = (newPokemon.att * 0.9).toFixed(1);
		showMsg += "\n상성후\t"+ myMonid.att + "  \t"+ newPokemon.att;
	}
	console.log(showMsg);

}
function propertyAttRelease(){
	//var myMonid;
	//var worldMonid;
		var showMsg = "";
		if((myMonid.property+1)%5 == newPokemon.property){
			showMsg = "\t newPokemon myMonid.att "
			showMsg += "\n해제전\t"+newPokemon.att + "  \t"+ myMonid.att;
			newPokemon.att = (newPokemon.att / 1.1).toFixed(1);
			myMonid.att = (myMonid.att / 0.9).toFixed(1);
			showMsg += "\n해제후\t"+ newPokemon.att + "  \t"+ myMonid.att;
		}
		if((newPokemon.property+1)%5 == myMonid.property){
			showMsg = "\t myMonid newPokemon.att "
			showMsg += "\n해제전\t"+myMonid.att + "  \t"+ newPokemon.att;
			myMonid.att = (myMonid.att / 1.1).toFixed(1);
			newPokemon.att = (newPokemon.att / 0.9).toFixed(1);
			showMsg += "\n해제후\t"+ myMonid.att + "  \t"+ newPokemon.att;
		}
		console.log(showMsg);

	}
	
function enemyRandAtt(){
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var enemyRand = Math.floor(Math.random()*2);
		if(enemyRand == 0){
			console.log(newPokemon.name+"이 공격력 "+newPokemon.att+"로공격.");
			myMonid.hp = (myMonid.hp - newPokemon.att).toFixed(1);
			console.log(myMonid.name + "의 체력 "+myMonid.hp+" 남음.");
		}
		else{
			console.log(newPokemon.name+"이 스킬 "+skills[newPokemon.property]+"로공격.");
			myMonid.hp = (myMonid.hp - newPokemon.att).toFixed(1);
			console.log(myMonid.name + "의 체력 "+myMonid.hp+" 남음.");
		}
	}
}

function tackle(){
	propertyAtt();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		console.log(myMonid.name+"이 공격력 "+myMonid.att+"로공격.");
		newPokemon.hp = (newPokemon.hp - myMonid.att).toFixed(1);
		console.log(newPokemon.name + "의 체력 "+newPokemon.hp+" 남음.");
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyAttRelease();
}
	
function skillAttack(){
	propertyAtt();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		console.log(myMonid.name+"이 스킬 "+skills[myMonid.property]+"로공격.");
		newPokemon.hp = (newPokemon.hp - myMonid.att).toFixed(1);
		console.log(newPokemon.name + "의 체력 "+newPokemon.hp+" 남음.");
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
	propertyAttRelease();
}



function meditation(){
	propertyAtt();
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
	propertyAttRelease();
}


function useItem(item){
	if(item == "mint"){
		var showMsg = "사용할수 없습니다 - 설명: 민트먹을시 체력max보다 많습니다.";
		if(jiwoo.mint ==0){
			showMsg = "system- mint 없다 ㅜㅜ";
		}
		else if((jiwoo.mint >0) && ((myMonid.hp +25) < myMonid.initHp)){
			myMonid.hp +=25;		
			showMsg = myMonid.name+"회복!! 현재체력: "+ myMonid.hp;
			jiwoo.mint--;
			showMsg += "\nsystem- "+ item +" " + jiwoo.mint + "개 남았습니다.";
			
		}
		
		console.log(showMsg);
	}

	if(item == "pokeBall"){
		if(jiwoo.pokeBall ==0){
			console.log("system- pokeBallNo 없다 ㅜㅜ");
		}
		else if(jiwoo.pokeBall >0){
			
			jiwoo.pokeBall--;
			console.log("system- 포켓볼을 던졋다! \n"+ item +" " + jiwoo.pokeBall + "개 남았습니다.");
			
			pokemons.push(new myPokemon(
					pokemons.length,
					worldMon.id,
					worldMon.name,
					worldMon.lv ,
					worldMon.exp ,
					worldMon.hp,
					worldMon.att,
					worldMon.property
					));
			console.log("system- 새로운 몬스터 "+worldMon.name+"를 잡앗다!!");
			console.log(pokemons[pokemons.length-1]);
			///일단 무조건 성공.
			
		}
		
	}
	console.log("jiwoo.mint "+jiwoo.pokeBall +"  jiwoo.pokeBall "+ jiwoo.pokeBall);
} 

// 내가 소유한 몬스터와 태그하기.
function tagMyMon(bookNumber){	
	if(confirm("태그하시겟습니까?")){
//		turnMoves(parseInt(obj.getAttribute("id").substr(obj.getAttribute("id").length -2)), window.pokemonNo02);
		console.log("너로 정했다!! 나와라~ "+pokemons[bookNumber].name+"몬!");
		encounter(pokemons[bookNumber].id,worldMonid); 
	}
}

// 내가 소유한 몬스터북 확인하기.
function checkPokemonBook(bookNumber){  // bookNumber = listCount-1;
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
	console.log("hp: "+ pokemons[bookNumber].hp);
	console.log("att: "+ pokemons[bookNumber].att);
	console.log("skill: "+ skills[pokemons[bookNumber].property]);
	console.log("=================");

	console.log("===== 가방검사 ======  // 나중에 분리할예정.");
	console.log("jiwoo.mint: " + jiwoo.mint);
	console.log("jiwoo.pokeBall: " + jiwoo.pokeBall);
	console.log("jiwoo.golds: " + jiwoo.golds);
	console.log("====== END ======"); 
}
//checkPokemonBook(myMonid);
//checkPokemonBook(worldMonid);

var winOrLoseResult = false;  //결과가 나올때까지 경기 속행. 둘중 죽거나, 도망치면 true.
function winOrLose(){

	if(newPokemon.hp <= 0){
		console.log("enemy loses.");
		expUp();
		winOrLoseResult= true;
		///########## 종원이형: 여기서 escape로 전투화면을 빠져나와야함!!!
	}
	else if(myMonid.hp <= 0){
		console.log("user loses.");
		winOrLoseResult= true;
	
		///########## 종원이형: 여기서 escape로 전투화면을 빠져나와야함!!!
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
		myMonid.lv += 1;
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
	//맵단으로 다시이동.
	
	
}
