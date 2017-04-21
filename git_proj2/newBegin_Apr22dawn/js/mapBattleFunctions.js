/*
 * 집에서....Apr20,2017
 * 			02:37 
 * 			dev by JB
 * aa
 * */
$(document).ready(function(){

});

// 포켓몬세계 전체 몬스터리스트.aa
mapPokemons = [];
mapPokemons[0] = {id:0, name:"jbMon", lv:1, exp:0, hp: 50, att:13, property:0};
mapPokemons[1] = {id:1, name:"ynMon", lv:1, exp:0, hp: 52, att:12, property:1};
mapPokemons[2] = {id:2, name:"gyMon", lv:1, exp:0, hp: 54, att:11, property:2};
mapPokemons[3] = {id:3, name:"jwMon", lv:1, exp:0, hp: 56, att:10, property:3};
mapPokemons[4] = {id:4, name:"jhMon", lv:1, exp:0, hp: 57, att:9, property:4};
mapPokemons[5] = {id:5, name:"bossMon", lv:1, exp:0, hp: 57, att:9, property:4};


// 내포켓몬북에 있는 몬스터리스트.aa
var pokemons =[];
var propertyNames = ["물","바람","풀","불","흙"];
var skills = ["물폭탄던지기!","바람베기!","덩쿨채찍!","화염폭탄!","지진일으키기!"]

function myPokemon(bookNo, id, name, lv, exp, hp, att, property){  //booklistId?
	this.bookNo = bookNo;
	this.id = id;
	this.name = name; 
	this.lv = lv; 
	this.exp = exp; 
	this.property = property;
	this.hp = hp;
	this.att = att;
	
	this.initHp = hp;
}
pokemons.push(new myPokemon(0, 2, "gyMon", 1, 0, 54, 17, 2 ));  // 일반공격이 1이면 스킬공격은 최소 1.2 최대1.7랜덤
pokemons.push(new myPokemon(1, 3, "jwMon", 1, 0, 56, 15, 3 ));  //  pokemons[].id
pokemons.push(new myPokemon(2, 1, "ynMon", 1, 0, 52, 15, 1 ));  // 포켓몬번호 이름 체력 기본공격력 기본방어력
pokemons.push(new myPokemon(3, 4, "jhMon", 1, 0, 58, 14, 4 ));  
pokemons.push(new myPokemon(4, 0, "jbMon", 1, 0, 50, 13, 0 ));  
//mapPokemons    // id:0, name:"aa", lv:1, exp:0, hp: 50, att:13, property:"물"
// jb < yn < gy < jw < jh < jb  ... 먹이사슬 외에는 평범하게고우.

//맵에서 몬스터와 만날경우. - 상대는 랜덤.
var rand1;
var rand2;
var refMyMonId;
var myMonid;
var worldMonid;

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
	worldMonid = worldMon.id;
	console.log("myMon.id "+myMon.id);
	console.log("worldMon.id "+worldMon.id);
	
	for(var myIdx =0; myIdx< pokemons.length; myIdx++){
		if(pokemons[myIdx].id == myMon.id){
			console.log("converted list num: "+myIdx);
			refMyMonId= myIdx;
			myMonid = pokemons[refMyMonId];  // mapMyMon = myMon.id  mapBattle -> actions
			console.log(myMonid);
			break;
		}
	}
}
noRepeatRand();
encounter(rand1,rand2);

var jiwoo = {mint:5, pokeBall:4, golds:30000};

console.log("jiwoo.mint "+jiwoo.mint +"  jiwoo.pokeBall "+ jiwoo.pokeBall);































