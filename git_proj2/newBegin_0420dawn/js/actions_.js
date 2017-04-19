/*
 * 집에서....Apr20,2017
 * 			02:37 
 * 			dev by JB
 * 
 * #### 해야할것.
 * 상점 & 병원.js구현
 * 상성(+데미지, -데미지)효과 부여.
 * 새로운 몬스터 찾았을때 일단 pokemons에 넣었는데.. 뺴야함.  
 *   // 상대방id로 하게되면 다시만날때 싱싱한녀석이 안됨..
 * 
 * 
 * 
 * 
 * */
var myMonid = myMon.id;
var enemyMonid = enemyMon.id;
console.log(myMon.id);
console.log(enemyMon.id);



// 가져온 id값으로 몬스터객체 만들어내기aa
var pokemons =[];
var propertyNames = ["물","바람","풀","불","흙"];
var skills = ["물폭탄던지기!","바람베기!","덩쿨채찍!","화염폭탄!","지진일으키기!"]

function myPokemon(id, name, lv, exp, hp, att, property){
	this.id = id;
	this.name = name; 
	this.lv = lv; 
	this.exp = exp; 
	this.property = property;
	this.hp = hp;
	this.att = att;
	
	this.initHp = hp;
}
pokemons.push(new myPokemon(0, "jbMon", 1, 0, 50, 13, 0 ));  
pokemons.push(new myPokemon(1, "ynMon", 1, 0, 52, 15, 1 ));  // 포켓몬번호 이름 체력 기본공격력 기본방어력
pokemons.push(new myPokemon(2, "gyMon", 1, 0, 54, 17, 2 ));  // 일반공격이 1이면 스킬공격은 최소 1.2 최대1.7랜덤
pokemons.push(new myPokemon(3, "jwMon", 1, 0, 56, 15, 3 ));  //  pokemons[].id
pokemons.push(new myPokemon(4, "jhMon", 1, 0, 58, 14, 4 ));  
	// mapPokemons    // id:0, name:"aa", lv:1, exp:0, hp: 50, att:13, property:"물"
	// aa < bb < cc < dd < ee < aa  ... 먹이사슬 외에는 평범하게고우.

var newPokemon = {id: enemyMon.id, name: enemyMon.name, lv: enemyMon.lv, exp: enemyMon.exp, hp: enemyMon.hp, att: enemyMon.att, property: enemyMon.property };
console.log("enemyMon.id "+enemyMon.id);

var noExists = true;
for(id in pokemons){
	if( enemyMon.id == id ){
		noExists = false;
	}
//	console.log("alreadyExists  "+ noExists);
}
if(noExists){
	pokemons.push(new myPokemon(enemyMon.id, enemyMon.name, enemyMon.lv, enemyMon.exp, enemyMon.hp, enemyMon.att, enemyMon.property )); 
	console.log("worked");
}

function enemyRandAtt(){
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		var enemyRand = Math.floor(Math.random()*2);
		if(enemyRand == 0){
			console.log(pokemons[enemyMon.id].name+"이 공격력 "+pokemons[enemyMon.id].att+"로공격.");
			pokemons[myMon.id].hp -= pokemons[enemyMon.id].att;
			console.log(pokemons[myMon.id].name + "의 체력 "+pokemons[myMon.id].hp+" 남음.");
		}
		else{
			console.log(pokemons[enemyMon.id].name+"이 스킬 "+skills[pokemons[enemyMon.id].property]+"로공격.");
			pokemons[myMon.id].hp -= pokemons[enemyMon.id].att;
			console.log(pokemons[myMon.id].name + "의 체력 "+pokemons[myMon.id].hp+" 남음.");
		}
	}
}

function tackle(attacker, defender){
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		console.log(pokemons[attacker].name+"이 공격력 "+pokemons[attacker].att+"로공격.");
		pokemons[defender].hp -= pokemons[attacker].att;
		console.log(pokemons[defender].name + "의 체력 "+pokemons[defender].hp+" 남음.");
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
}
	
function skillAttack(attacker, defender){
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		console.log(pokemons[attacker].name+"이 스킬 "+skills[pokemons[attacker].property]+"로공격.");
		pokemons[defender].hp -= pokemons[attacker].att;
		console.log(pokemons[defender].name + "의 체력 "+pokemons[defender].hp+" 남음.");
	}
	winOrLose();
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
}



function meditation(){
	var showMsg = "명상을 할수없습니다. \n\t(설명: 명상하면 전체체력보다 많아질경우.)"
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		if((pokemons[myMon.id].hp +13) < pokemons[myMon.id].initHp){
		pokemons[myMon.id].hp += 13;
		showMsg = "체력회복 (+13)!" +pokemons[myMon.id].hp;
		}
	}
	console.log(showMsg);
	if(!winOrLoseResult){  // winOrLoseResult 결과값이 안나왓을경우에 진행.
		enemyRandAtt();
		winOrLose();
	}
}


function useItem(item){
	if(item == "mint"){
		var showMsg = "사용할수 없습니다 - 설명: 민트먹을시 체력max보다 많습니다.";
		if(jiwoo.mint ==0){
			showMsg = "system- mint 없다 ㅜㅜ";
		}
		else if((jiwoo.mint >0) && ((pokemons[myMon.id].hp +25) < pokemons[myMon.id].initHp)){
			pokemons[myMon.id].hp +=25;		
			showMsg = pokemons[myMon.id].name+"회복!! 현재체력: "+ pokemons[myMon.id].hp;
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
			///일단 무조건 성공.
			
		}
		
	}
	console.log("jiwoo.mint "+jiwoo.pokeBall +"  jiwoo.pokeBall "+ jiwoo.pokeBall);
} 

// 내가 소유한 몬스터와 태그하기.
function tagMyMon(idNum){	
	/* console.log( parseInt(this.getAttribute("id").substr(this.getAttribute("id").length -2)) );
	console.log( window.pokemonNo02  ); */
	if(confirm("태그하시겟습니까?")){
//		turnMoves(parseInt(obj.getAttribute("id").substr(obj.getAttribute("id").length -2)), window.pokemonNo02);
		console.log("너로 정했다!! 나와라~ "+pokemons[idNum].name+"몬!");
		encounter(idNum,enemyMonid);
	}
}

// 내가 소유한 몬스터북 확인하기.
function checkPokemonBook(idNum){  // idNum = listCount-1;
	console.log(idNum);
	// mapPokemons// id:0, name:"aa", lv:1, exp:0, hp: 50, att:13, property:"물"
	//propertyNames = ["물","바람","풀","불","흙"]  "물"<"바람"<"풀"<"불"<"흙"<"물"
	console.log("=================");
	console.log("id: "+ pokemons[idNum].id 
			+ " property: " + propertyNames[pokemons[idNum].property]);
	console.log("name: "+ pokemons[idNum].name);
	console.log("lv: "+ pokemons[idNum].lv);
	console.log("exp: "+ pokemons[idNum].exp);
	console.log("hp: "+ pokemons[idNum].hp);
	console.log("att: "+ pokemons[idNum].att);
	console.log("skill: "+ skills[pokemons[idNum].property]);
	console.log("=================");

	console.log("===== 가방검사 ======  // 나중에 분리할예정.");
	console.log("jiwoo.mint: " + jiwoo.mint);
	console.log("jiwoo.pokeBall: " + jiwoo.pokeBall);
	console.log("jiwoo.golds: " + jiwoo.golds);
	console.log("====== END ======"); 
}
//checkPokemonBook(myMonid);
//checkPokemonBook(enemyMonid);

var winOrLoseResult = false;  //결과가 나올때까지 경기 속행. 둘중 죽거나, 도망치면 true.
function winOrLose(){

	if(pokemons[enemyMon.id].hp <= 0){
		console.log("enemy loses.");
		expUp();
		winOrLoseResult= true;
		///########## 종원이형: 여기서 escape로 전투화면을 빠져나와야함!!!
	}
	else if(pokemons[myMon.id].hp <= 0){
		console.log("user loses.");
		winOrLoseResult= true;
	
		///########## 종원이형: 여기서 escape로 전투화면을 빠져나와야함!!!
	}
}

function expUp(){
	var winExp = 40;
	var showMsg = "";
	if((pokemons[myMon.id].exp + winExp) >= (60 + pokemons[myMon.id].lv*40)){  //1렙 풀경치 100, 2렙은 140, 3렙은 180...
		showMsg = pokemons[myMon.id].name+"가 레벨업했다!!!";
		showMsg += "\n경험치: "+(pokemons[myMon.id].exp);
		pokemons[myMon.id].exp = ((pokemons[myMon.id].exp + winExp) % (60 + pokemons[myMon.id].lv*40));
		showMsg += " -> "+ pokemons[myMon.id].exp +", ";
//		console.log("#### "+ (60 + pokemons[myMon.id].lv*40));    경험치가 앞에 있어야함. 아니면 앞에 함수식 망가짐;;
		showMsg += "\t레벨: "+pokemons[myMon.id].lv ;
		pokemons[myMon.id].lv += 1;
		showMsg += " -> "+ pokemons[myMon.id].lv;
		pokemons[myMon.id].hp = (pokemons[myMon.id].initHp*1.2);
		showMsg += "\n공격력 증가 (+4): \t" + pokemons[myMon.id].att;
		pokemons[myMon.id].att += 4;
		showMsg += " -> "+ pokemons[myMon.id].att;
		showMsg += "\n체력증가율 (1.2배):\t"+ pokemons[myMon.id].initHp+ " -> " + (pokemons[myMon.id].initHp*1.2);
		
	}
	else{
		pokemons[myMon.id].exp += winExp;
		showMsg = pokemons[myMon.id].name+"가"+ winExp+"만큼 경험치를 획득했다!!!";
	}
	console.log(showMsg);
}



function runAway(){
	winOrLoseResult = true;
	//맵단으로 다시이동.
	
	
}
